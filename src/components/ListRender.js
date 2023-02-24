import React from "react";

const ListRender = (props) => {
  if ( list === "")
  {
     return " ";
  }
  else{
  return (
    <>
      {props.list.map((list) => {
        return (
          <div className="box" key={list.number}>
            <div className="task">
              {list.title} ({list.date.toLocaleDateString()})
            </div>
          </div>
        );
}
      })}
    </>
  );
};

export default ListRender;
