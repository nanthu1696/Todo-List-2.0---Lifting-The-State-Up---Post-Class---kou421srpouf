import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";

const list = [
  { title: "Let's complete this", date: new Date("9/27/2022") },
  { title: "Should sleep at 9pm", date: new Date("9/28/2022") },
  { title: "Should complete react", date: new Date("10/5/2022") }
];

const MainSection = (props) => {
  let [todo, setTodo] = useState(list);
  return (
    <div className="main-section">
      {props.active === "INBOX" && <Inbox list={todo} append={setTodo} />}
      {props.active === "TODAY" && <Today list={todo} />}
      {props.active === "NEXT" && <Next7Days list={todo} />}
    </div>
  );
};

export default MainSection;
