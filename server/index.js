const io = require("socket.io")(3000, {
    path: "/socket.io",
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
    }
});

io.on("connection", function (client) {
    console.log('cliente conectado')

    client.on('newMessage', function(msg){
        client.broadcast.emit('messageFromServer', msg)
    })

    client.on('disconnect', function(){
        console.log('cliente desconectado')
    })
});
