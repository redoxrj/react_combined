import React, { useContext } from 'react'
import './ToDoMain.css'
import AddToDo from './AddToDo'
import ToDoItem from './ToDoItem'
import {ToDoContext} from '../../contexts/ToDoContext'

function ToDoMain() {

  const {toDoC} = useContext(ToDoContext)
  return (
    <div className='todo-container'>
      <h2 style={{textAlign:"center"}}>TODO CRUD APP</h2>

      <div className="mb-3 w-50 mt-5">
        <AddToDo />

        {toDoC && toDoC.map((item)=>(
          <ToDoItem key={item.id} todo={item}/>
        ))}


 
      </div>

    </div>
  )
}

export default ToDoMain
