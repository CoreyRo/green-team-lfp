const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  userId: { type: String, required: true },
  senderId: { type: String, required: true },
  senderUsername: { type: String, required: true },
  projectId: { type: String, required: true },
  projectTitle: { type: String, required: true },
  text: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;