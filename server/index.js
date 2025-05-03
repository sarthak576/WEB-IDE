const http = require('http')
const express =require('express')
const {Server : SocketServer} =require('socket.io')
// node-pty --> own terminal creation in web   
const pty =require('node-pty-prebuilt-multiarch')

const ptyProcess = pty.spawn('bash', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.INIT_CWD,
    env: process.env
  });




const app = express() 
const server = http.createServer(app); //instance of application (app) is passed
const io =new SocketServer({
    cors:'*'
})


io.attach(server);

ptyProcess.onData(data=>{
    io.emit('terminal:data',data)
})
// for  different user -> different docker container 
//* building a bridge 
io.on('connection',(socket)=>{
    console.log(`Socket Connected`,socket.id )

    socket.on('terminal:write',(data)=>{
   ptyProcess.write(data);
    })
})


server.listen(9000,()=> console.log(` Docker server is running on port 9000 `))

  