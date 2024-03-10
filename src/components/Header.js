// import React from "react";
// const Header = ({ darkmode, setDarkmode }) => {
//   return (
//     <div className="container">
//       <div className="row justify-content-between  ">
//         <h1 className="col-6">To-Do app</h1>
//         <button
//           className="col-1 btn btn-transparent"
//           onClick={() => setDarkmode(!darkmode)}
//         >
//           🌙
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Header;

import React from "react";
const Header = ({ darkmode, setDarkmode }) => {
  return (
    <div className="container">
      <div className="row justify-content-between  ">
        <h1 className="col-6">To-Do app</h1>
        <button
          className="col-1 btn btn-transparent me-2"
          onClick={() => setDarkmode(!darkmode)}
        >
          🌙
        </button>
      </div>
    </div>
  );
};
export default Header;
