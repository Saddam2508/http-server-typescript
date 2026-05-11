import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer((req: IncomingMessage, res: ServerResponse)=>{})


server.listen(5000, ()=>{
    console.log("server is running port 5000")
})