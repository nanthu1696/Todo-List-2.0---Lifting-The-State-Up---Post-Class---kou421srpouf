import React from "react";

const ListRender = (props) => {
  let arr = "``";
  return (
    <>
      {props.list.map((list) => {
      if ( list === "")
      {
       return " ";
      }
      else{
        return (
          <div className="box" key={list.number}>
            <div className="task">
              {list.title === "" ? arr : list.title} ({list.date.toLocaleDateString()})
            </div>
          </div>
        );
}
      })}
    </>
  );
};

export default ListRender;
