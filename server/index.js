// create a server
const http = require('http').createServer();

// import the socketio function and pass the http server to it as an argument
// pass in an configuration Object to enable cors as the second argument
const io = require('socket.io')(http, {
  cors: {origin: "*"}
});

// socket are an event based systems so lets listen for a connetion event
// the second argument is a callback function that gives us access to the socket Object
io.on('connection' , (socket) => {
    console.log(`A user ${socket.id}connected`);

    // now listen for a message event in the socket Object
    // the second argument is a callback that gives us access to the the data
    socket.on("message", (message) => {
        console.log(message);    
        
        // no that we have the message we can broacast it to anyone who has a connection
        // we also pass along the socket id
        io.emit("message", `${socket.id.substr(0,2)} said ${message}`);
    });
});


// start the server
http.listen(8080, () => console.log("server is running on port http://localhost:8080"));