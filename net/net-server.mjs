import net from "net";

const server = net.createServer((client)=>{
   console.info("Client connected");
   client.on("data", (data)=>{
       console.info(`Receive data from client : ${data.toString()}`);
       client.write(`Hello ${data.toString()}\r\n`);
   })
});

server.listen(3000, "localhost");