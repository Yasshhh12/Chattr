const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');

const connect = require('./config/database-config');

const io = socketio(server);

io.on('connection', (socket) => {
    // console.log('a user connected',socket.id);

    // socket.on('msg_send',(data)=>{
    //     console.log(data);
    //     io.emit('msg_recieved',data);
    // })


});

app.set('view engine','ejs');

app.use('/',express.static(__dirname+'/frontend'));

app.get('/chat/:roomid',(req,res)=>{
    res.render('index',{
        name:'Yash',
        id:req.params.roomid
    }); 
})

server.listen(3000,async()=>{
    console.log('Server started');
    await connect();
    console.log("Mongodb connected");
})