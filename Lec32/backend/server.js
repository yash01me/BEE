const {WebSocketServer} = require('ws');
const ws = new WebSocketServer({port: 8888});

// ws.on('connection', function(socket){
//     console.log('New client connected');
//     socket.on('message', function(message){
//         console.log('Received:'+ message.toString());
//         if (message.toString() === 'ping') {
//             socket.send('pong');
//         }
//     });
// })
let allsockets = [];
ws.on('connection', function(socket){
    console.log('User client connected');
    allsockets.push(socket);
    socket.on('message', function(message){
        console.log('Received:'+" "+ message.toString());
        allsockets.forEach(s => s.send(message.toString()));
    });
})