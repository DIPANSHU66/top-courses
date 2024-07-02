import React from "react";

const Filter = (props) => {
  let filterdata = props.filterdata;
  let category=props.category;
  let setcategory=props.setcategory;

  function  filterhandler(title){
    setcategory(title);
    
  }

  return (
    <div className="w-11/12  flex  flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4  justify-center">
      {filterdata.map((data) => {
        return (
          <button onClick={()=>filterhandler(data.title)}   className={`  border  border-2  font-bold  bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 ${category==data.title?"border-white":"border-transparent"}`} key={data.id}>
            {data.title} 
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
