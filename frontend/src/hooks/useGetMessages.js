import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);

    //get messages from useConversation
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		//get messages from server, GET method
        const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

        //call get messages only if conversation is selected
		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);
    //whenever selectedConversation?._id change, run the useEffect

	return { messages, loading };
};
export default useGetMessages;