import jwt from 'jsonwebtoken';
const generateTokenAndSetCookie = (userID, res) => {
    //generate a token using the userID as payload and the secret key
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //this is time in milisecond format
        httpOnly: true, //cookie can only access through http, prevent XSS attack
        sameSite: "strict", //prevent CSRF attack

        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;