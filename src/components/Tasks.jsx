/* eslint-disable react/prop-types */
import React from 'react'
import Task from './Task'
function Tasks({data, deleteTask, toggle}) {
  return (
    <>
        {
            data.map(t => <Task key={t.id} task={t} deleteTask={deleteTask} toggle={toggle} />)
        }
    </>
  )
}

export default Tasks