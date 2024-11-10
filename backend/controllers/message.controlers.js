import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  try {
    //get user id and message content from req
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    //find consversation between 2 user
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    //if didn't exist, create new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //create new message
    const newMessage = new Message({
      senderID: senderId,
      receiverID: receiverId,
      message: message,
    });
    //put new message into conversation
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //save stuff into database synchronously
    // await conversation.save()
    // await newMessage.save()

    // save into database parralelly
    await Promise.all([conversation.save(), newMessage.save()]);

    //todo: socket io
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {

      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage: ", error.message);
    res.status(500).json({ error: "Internal sever error in sendMessage" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //populate message convert message id to content

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage: ", error.message);
    res.status(500).json({ error: "Internal sever error in getMessage" });
  }
};
