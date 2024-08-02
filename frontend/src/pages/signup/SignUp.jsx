import React from "react";
import GenderCheckbox from "./GenderCheckBox";

const SignUp = () => {
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

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              type="text"
              placeholder="enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              placeholder="confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <label className="label p-2">
            <span className="text-base label-text text-black">Avatar</span>
          </label>
          <GenderCheckbox />

          <a
            to="#"
            className="text-sm hover:cursor-pointer hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border">
              {" "}
              Sign Up{" "}
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
