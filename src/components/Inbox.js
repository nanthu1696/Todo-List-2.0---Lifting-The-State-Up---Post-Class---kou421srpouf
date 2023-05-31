import React, { useState, useRef } from "react";

const Inbox = (props) => {
  let tit = useRef(null);
  let dat = useRef(null);
  let [newTask, setnewTask] = useState(false);
  function createObj(event) {
    event.preventDefault();
    let title = tit.current.value;
    let date = new Date(dat.current.value);
    let obj = { title: title, date: date };
    let arr = [...props.list, obj];
    console.log(arr);
    props.append(arr);
    setnewTask(false);
  }
  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button
          className="new"
          onClick={() => {
            setnewTask(true);
          }}
          id="add-new"
        >
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={tit}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={createObj}>
              Add Task
            </button>
            <button
              className="new"
              onClick={() => {
                setnewTask(false);
              }}
            >
              Cancel
            </button>
            <input
              type="date"
              defaultValue="2022-09-27"
              id="date"
              ref={dat}
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list, index) => {
          return (
            <div className="box" key={index}>
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
