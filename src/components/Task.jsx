/* eslint-disable react/prop-types */
import React from "react";

function Task({ task, deleteTask, toggle }) {
  const { id, text, completed } = task;
  return (
  <div 
    className="p-2 flex flex-row shadow-sm rounded-sm"
  >
        <input 
            type="checkbox"
            checked={completed}
            onChange={()=> toggle(id)}
        />
        <div 
            className="flex-auto ml-2"
            style={{
                textDecorationLine: completed? 'line-through':''
            }}
        >
            {text}
        </div>
        <div
            className="text-red-500 text-center rounded-md hover:text-white hover:bg-red-500 w-5"
            onClick={()=> deleteTask(id)}
        >
            X
        </div>
    </div>
  )
}

export default Task;
