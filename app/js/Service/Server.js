import * as ws from "nodejs-websocket";
import { Message } from "./Message";

export default class

Server {
    constructor() {
        this.participants = new Map();

        this.server = ws.createServer((conn) => {
            conn.on("error", (err) => {
                console.error("Server error", err);
            });

            conn.on( "msg", (msg) => {
                const text = Message.fromString( text ),
                      method = `on${text.event}`;
                if(!this[method]){
                    return;
                }
                this[ method ](msg.data, conn);
            })

            conn.on("close", (code, reason)=>{
                console.log("Server closes connection", code, reason);
            });

            conn.on("connection", () => {
                console.info("Server creates a new connection");
            });
        });
    }

    onmsg( data, conn ){
        const name = this.participants.get(conn).name;
        this.broadcast(
            "msg", { name, ...data }
        );
    }

    onjoin( name, conn ){
        const datetime = new Date();
        this.participants.set( conn, {
            name: name,
            time: datetime.toString()
        });

        this.broadcast( "participants", Array.from( this.participants.values() ));
    }

    broadcast (event, data){
        const text = Message.toString(event, data);

        this.server.connections.forEach( conn => {
            conn.sendText( text );
        });
    }

    connect( host, port, client ){
        client.connect( host, port ).catch(() => {
            this.server.listen(port, host, () => {
                console.info("Server is ready");
                client.connect( host, port ).catch(()=>{
                    console.error( "Clientside error" );
                });
            });
        });
    }
}