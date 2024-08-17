// import useGetMessages from "../../hooks/useGetMessages";
// import Message from "./Message";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import { useState, useEffect, useRef } from "react";
// const Messages = () => {
//   // get the messages
//   const { messages, loading } = useGetMessages();

//   const lastMessageRef = useRef(null);

//   // console.log("messages: ", messages) for debugging

//   useEffect
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       {/* if loading, show skeleton 3 times */}
//       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

//       {/* if there is no messages, promt the user to send a message */}
//       {!loading && messages.length === 0 && (
//         <p className="text-center">Send a message to start the conversation</p>
//       )}

//       {/* if there are messages, show them */}
//       {!loading &&
//         messages.length > 0 &&
//         messages.map((message, idx) => (
//         //   <div key={message._id} ref={lastMessageRef}>
//         //     <Message message={message} />
//         //   </div>
// 		// pass in the id and message to Message component
// 		// console.log("THIS IS MESSAGE ID: ", message._id) // try this to debug
// 		// return (
		
// 		   <Message key={idx} message={message} />
// 		// );
// 			//EROR: WEIRD MESSGAE ID BEHAVIOUR (keep getting repeat key when rendering message id)
// 			// Happen whenever sending a new message, resolve by simply reloading the page
//         ))
		
// 		}
//     </div>
//   );
// };
// export default Messages;

import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	// useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message, idx) => (
					<div key={idx} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;

// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;