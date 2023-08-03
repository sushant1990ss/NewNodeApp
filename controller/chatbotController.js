const request = require("request");
const dotenv = require("dotenv");
const socket = require('../server');
let test = (req, res) => {
  return res.send("Hello");
};
setInterval(() => {
  socket.ioObject.sockets.emit("random number", "hello");
}, 1000);
const MY_VERIFY_TOKEN = "Itjustarandomstringtoverify1234sushantDanish";
console.log(MY_VERIFY_TOKEN);

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let getWebhook = (req, res) => {
  let VERIFY_TOKEN = MY_VERIFY_TOKEN;

  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
};
let postWebhookV2 = (req, res) => {
  console.log(req.body);
  return res.send("Hello rjksdasd");
};


let postWebhook = (req, res) => {
  let body = req.body;
console.log(body);
  if (body.object === "page") {
    body.entry.forEach(function (entry) {
      let webhook_event = entry.messaging[0];
console.log(webhook_event);
      socket.ioObject.sockets.emit("random number",webhook_event);
       res.status(200).send(webhook_event);
    });

    console.log("EVENT_RECEIVED");
  } else {
     res.sendStatus(404);
  }
  //return res.send("Hello rjksdsfsdfsfsfsdfasd");
};
function handleMessage(sender_psid, received_message) {
  let response;

  if (received_message.text) {
    response = {
      text: `You sent the message: "${received_message.text}". Now send me an image!`,
    };
  }

  callSendAPI(sender_psid, response);
}

function handlePostback(sender_psid, received_postback) {
  let response;

  let payload = received_postback.payload;

  if (payload === "yes") {
    response = { text: "Thanks!" };
  } else if (payload === "no") {
    response = { text: "Oops, try sending another image." };
  }

  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };
}
module.exports = {
  test: test,
  getWebhook: getWebhook,
  postWebhook: postWebhook,
postWebhookV2 :postWebhookV2,
};
