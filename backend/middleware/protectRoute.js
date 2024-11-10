// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

// const protectRoute = async (req, res, next) => {
//   try {
//     //get cookie
//     const token = req.cookies.jwt;

//     if (!token) {
//       console.log(req);
//       return res
//         .status(401)
//         .json({ error: "Unauthorized - No Token Provided" });
        
//     }

//     //use the same key (JWT_SECRET to decode)
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decoded) {
//       return res.status(401).json({ error: "Unauthorized - Wrong token" });
//     }

//     //get user through the token
//     const user = await User.findById(decoded.userID).select("-password");
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     //asign
//     req.user = user;

//     next(); //which in our case is sendMessage in message.routes.js
//   } catch (error) {
//     console.log("Error in protectRoute: ", error.message);
//     res.status(500).json({ error: "Internal sever error in protectRoute" });
//   }
// };


// export default protectRoute 
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;