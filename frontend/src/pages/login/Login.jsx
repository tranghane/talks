import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //call the login function with username and password
    await login(username, password);
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
          Login <span className="text-blue-800">Talks</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full h-10 placeholder-gray-500 placeholder-opacity-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full h-10 placeholder-gray-500 placeholder-opacity-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:cursor-pointer hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-infinity"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//STARTER CODE
// import React from "react";

// const Login = () => {
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
//           Login <span className="text-blue-500">Talks</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-[#415312]">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="enter username"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-[#74b9cb]">
//                 Password
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="enter password"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>

//           <a to='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2"> Login </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
