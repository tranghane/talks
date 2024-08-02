const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`} >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            
            className="checkbox checkbox-primary"
            checked={selectedGender === "male"}
            onChange={() => {onCheckBoxChange("male")}}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            
            className="checkbox checkbox-secondary"
            checked={selectedGender === "female"}
            onChange={() => {onCheckBoxChange("female")}}

          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;


// Starter file
// const GenderCheckbox = () => {
//     return (
//       <div className="flex">
//         <div className="form-control">
//           <label className="label gap-2 cursor-pointer">
//             <span className="label-text">Male</span>
//             <input
//               type="checkbox"
//               defaultChecked
//               className="checkbox checkbox-primary"
//             />
//           </label>
//         </div>
  
//         <div className="form-control">
//           <label className="label gap-2 cursor-pointer">
//             <span className="label-text">Female</span>
//             <input
//               type="checkbox"
//               defaultChecked
//               className="checkbox checkbox-secondary"
//             />
//           </label>
//         </div>
//       </div>
//     );
//   };
//   export default GenderCheckbox;
  