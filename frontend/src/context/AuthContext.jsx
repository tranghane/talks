import { createContext, useContext, useState } from "react";

//create a context for auth
export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
//create a custome hook
export const useAuthContext = () => {//allow access to get values from authUser and setAuthUser
	return useContext(AuthContext);
};
 
export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    
    //wrap the application with value={{ authUser, setAuthUser }}
    // see how AuthContextProvider was used in main.jsx
	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};