import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser} = useAuthContext()

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    //check if there's any problem with inputs
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    // same with { fullName, username, password, confirmPassword, gender } in auth.controllers.js
    if (!success) {
      return;
    }

    setLoading(true);
    //sending inputs to sever
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      // check for error
      if (data.error) {
        throw new Error(data.error);
      }
      //save to local storage, first step to log in
      localStorage.setItem("chat-user", JSON.stringify(data))
      //context
      setAuthUser(data)

      //print out the data after signup
      console.log(data);
    } catch (error) {
      toast.error(`${error.message}`);
      console.log(error.message + "is this the problem?");
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

//detect anyproblem with the user inputs
function handleInputError({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("missing something ?");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Your password is a lighter, not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Your password is emotionless, need more characters");
    return false;
  }

  return true;
}
