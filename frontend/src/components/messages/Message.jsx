// import React from "react";
// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";
// import { extractTime } from "../../utils/extractTime";

// const Message = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();
//   const formattedTime = extractTime(message.createdAt);

//   // to check if message is from the logged in user
//   const fromMe = message.senderID === authUser._id;

//   //to use for checking if message is from the logged in user and assign classname based on that
//   const chatClassName = fromMe ? "chat-end" : "chat-start";

//   //get profilepic based on fromMe
//   const profilePic = fromMe
//     ? authUser.profilePic
//     : selectedConversation?.profilePic;
//   //get bubble color based on fromMe
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "";

//   return (
//     <div className={`chat ${chatClassName}`}>
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img key={message._id} src={profilePic} alt="user avatar" />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white  ${bubbleBgColor}`}>
//         {message.message}
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-black">
//         {formattedTime}
//       </div>
//     </div>
//   );
// };

// export default Message;
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  if (!message) {
    console.log("message: ", message);
    return null;
  }
  //   console.log("message: ", message)
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderID === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
