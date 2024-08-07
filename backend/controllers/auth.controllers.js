import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    //get input from user
    const { fullName, username, password, confirmPassword, gender } =
      req.body;

    //handle password not matching
    if (password !== confirmPassword) {
      console.log(`${password} !== ${confirmPassword}`)
      return res.status(400).json({ error: "Passwords don't match, error in auth controllers" });
    }

    //get the user base on the username to check if exist username already
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10); //in genSalt(x), higher x -> more secure + slower
    const hashedPassword = await bcrypt.hash(password, salt);

    //generate profile picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //generate new User
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      //generate JWT token
      generateTokenAndSetCookie(newUser._id, res);

      //save new user to database
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in sign up controller: ", error.message);
    res.status(500).json({ error: "Internal Sever error: in signup" });
  }
};

export const login = async (req, res) => {
	try {
    //get login info
		const { username, password } = req.body;

    //find user base on username
		const user = await User.findOne({ username });

    //check if password match and user exist
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: `username or password is left, not right` });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error in login" });
	}
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0
    })
    res.status(200).json({message: "logout successfully"});
  }catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error in logout" });
  }
};
