// import jwt from 'jsonwebtoken';
// const generateTokenAndSetCookie = (userID, res) => {
//     //generate a token using the userID as payload and the secret key
//     const token = jwt.sign({userID}, process.env.JWT_SECRET, {
//         expiresIn: '100d'
//     })

//     res.cookie("jwt", token, {
//         maxAge: 100 * 24 * 60 * 60 * 1000, //this is time in milisecond format
//         httpOnly: true, //cookie can only access through http, prevent XSS attack
//         sameSite: "strict", //prevent CSRF attack

//         secure: process.env.NODE_ENV !== "development"
//     })
// }

// export default generateTokenAndSetCookie;

import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;