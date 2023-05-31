import React from "react";

const ListRender = (props) => {
  return (
          <div className="box" key={list.number}>
            <div className="task">
              {list.title ? list.title : " "} ({list.date.toLocaleDateString()})
            </div>
          </div>
);
};

export default ListRender;
