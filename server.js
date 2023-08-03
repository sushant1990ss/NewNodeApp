const app = require("./app");
const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});


app.set('socketio', io);

io.on("connection", (socket) => {
  console.log("Connected!");
  socket.emit("join", "Love Stereo Again");
  // socket.on("random number", (arg) => {
  //   console.log(arg);
  // });
  
});

// io.on("random number", (arg) => {
//   console.log(arg);
// });


const port = process.env.PORT || 5053;
server.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
const socketIoObject = io;
module.exports.ioObject = socketIoObject;
