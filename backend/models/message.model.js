import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  receiverID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  //time that message was sent and stuff, can be access by message.createdAt or message.updatedAt
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema)

export default Message