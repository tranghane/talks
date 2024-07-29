export const signup = async (req, res) => {
  try {
    const {fullName, username, password, confirmedPassword, gender} = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log("login");
  res.send("login");
};

export const logout = (req, res) => {
  console.log("logout");
  res.send("logout");
};
