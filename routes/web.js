const express = require("express");
const chatBotController = require("../controller/chatbotController");
let app = express();
let router = express.Router();

let WebRoutes = (app) => {
  router.get("/", chatBotController.test);
  router.get("/webhook", chatBotController.getWebhook);
  router.post("/webhook", chatBotController.postWebhook);
 router.post("/getsushant", chatBotController.postWebhookV2);
  return app.use(router);
};

module.exports = WebRoutes;
