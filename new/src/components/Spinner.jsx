import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div  className="flex justify-center items-center mt-8">
      <div className="spinner spinner-border h-12 w-12 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin">
        <p>Loading....</p>
      </div>
    </div>
  );
};

export default Spinner;
