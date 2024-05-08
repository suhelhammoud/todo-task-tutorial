import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import getTasks from "./data";

function App() {
  const [data, setData] = useState(getTasks());
  const [inputText, setInputText] = useState('');
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)


  function toggleOneTask(task){
    task.completed = ! task.completed;
    return task;
  }

  function toggle(id){
    const dataUpdated = data.map( t => t.id === id ? toggleOneTask(t): t)
    setData(dataUpdated);
  }
   
  function addTask(text){
    const id = data.length + 1;
    const task = {id, text, completed:false}
    setData([...data, task])
  }

  function deleteTask(id){
    const dataUpdated = data.filter( t=> t.id !== id);
    setData(dataUpdated);
  }

  return (
    <div className="w-80 bg-sky-200">
      <Header />
      <div className="shadow-sm">
        <div className="flex flex-row bg-sky-200 p-2 m-3 rounded-sm shadow-sm">
          <input 
            type="text"
            onChange={ev => setInputText(ev.target.value)}
            onKeyDown={ e => {
              if(e.key === 'Enter'){
                addTask(inputText);
                e.target.value ='';
              }
            }}
          />
          <button
            onClick={()=> {
              addTask(inputText)
            }}
            className="bg-sky-500 flex-auto ml-3 rounded-sm hover:bg-sky-700"
          >
            Add
            </button>
        </div>
        <div className="m-3" ref={parent}>
          <Tasks data={data} deleteTask={deleteTask} toggle={toggle}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
