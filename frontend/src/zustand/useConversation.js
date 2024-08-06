import { create } from "zustand";

// sets up a Zustand store (aka a global state) to manage conversation
const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
    // The setSelectedConversation and setMessages to update the state when needed.
}));

export default useConversation;