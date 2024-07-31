import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
export const sendMessage = async (req, res) => {
    
    try{
        //get user id and message content from req
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        
        //find consversation between 2 user
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })
        //if didn't exist, create new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        //create new message
        const newMessage = new Message({
            senderID: senderId,
            receiverID: receiverId,
            message: message
        })
        //put new message into conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

		//save stuff into database synchronously
		// await conversation.save()
		// await newMessage.save()

		// save into database parralelly
		await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json({newMessage})
    }catch (error) {
        console.log("Error in sendMessage: ", error.message)
        res.status(500).json({error: "Internal sever error in sendMessage"})
    }
}