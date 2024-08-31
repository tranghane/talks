import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				//didn't run this part when sending a new message
				// console.log("fetching messages............");
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				// console.log("finishied fetcing messages............");
				// console.log("THIS IS DATA: ", data);

				if (data.error) throw new Error(data.error);
				setMessages(data);
				// console.log("data: ", data)
			} catch (error) {
				toast.error(error.message);
			} finally {

				setLoading(false);
			}
		};
		// if conversation is selected, fetch messages
		if (selectedConversation?._id) getMessages();

		// run getMessages when selectedConversation.id changes, aka changing tab
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;