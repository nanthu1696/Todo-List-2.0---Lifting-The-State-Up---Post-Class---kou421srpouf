import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  let arr = [];
  for (let i = 0; i < props.list.length; i++) {
    if (props.list[i].date.getFullYear() === date.getFullYear()) {
      if (date.getMonth() === props.list[i].date.getMonth()) {
        if (
          props.list[i].date.getDate() - date.getDate() >= 0 &&
          props.list[i].date.getDate() - date.getDate() <= 6
        ) {
          arr.push(props.list[i]);
        }
      }
    }
  }

  return (
    <div id="next-list">
      <ListRender list={arr} />
    </div>
  );
};

export default Next7Days;
