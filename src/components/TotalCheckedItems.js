import React from "react";
const TotalCheckedItems = ({ checkedItems, handleClearData }) => {
  const ClearDataButton = () => {
    handleClearData();
  };
  return (
    <div className="container my-2">
      <h3>Total Checked Tasks : {checkedItems}</h3>
      <button className="btn btn-sm btn-danger" onClick={ClearDataButton}>
        Clear All Data
      </button>
    </div>
  );
};
export default TotalCheckedItems;
