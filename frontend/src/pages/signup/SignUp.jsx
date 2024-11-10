import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  //set up useState to get value from user
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  //when page is submit, run this function
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent that submitting the form do not reload the page
    await signup(inputs);
  };

  return (
    <div className="flex flex-col imtems-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 
        bg-clip-padding 
        backdrop-filter
        backdrop-blur-lg
        bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-800">Talks</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="full name"
              className="w-full input input-bordered h-10 placeholder-gray-500 placeholder-opacity-50"
              //get fullName
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full input input-bordered h-10 placeholder-gray-500 placeholder-opacity-50"
              //get username
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="w-full input input-bordered h-10 placeholder-gray-500 placeholder-opacity-50"
              //get password
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered h-10 placeholder-gray-500 placeholder-opacity-50"
              //get confrim password
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <label className="label p-2">
            <span className="text-base label-text text-black">Avatar</span>
          </label>

          <GenderCheckbox
            onCheckBoxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:cursor-pointer hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border"
            disabled={loading}>
              {" "}
              {loading ? <span className="loading loading-infinity"></span> : "Sign Up"}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//starter file
// import React from "react";
// import GenderCheckbox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col imtems-center justify-center min-w-96 mx-auto">
//       <div
//         className="w-full p-6 rounded-lg shadow-md bg-gray-400
//         bg-clip-padding
//         backdrop-filter
//         backdrop-blur-lg
//         bg-opacity-0"
//       >
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup <span className="text-blue-800">Talks</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-black">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-black">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="johndoe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-black">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-black">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <label className="label p-2">
//             <span className="text-base label-text text-black">Avatar</span>
//           </label>
//           <GenderCheckbox />

//           <a
//             to="#"
//             className="text-sm hover:cursor-pointer hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-x-slate-700">
//               {" "}
//               Sign Up{" "}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
