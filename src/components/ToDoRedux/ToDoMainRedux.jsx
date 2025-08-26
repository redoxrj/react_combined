import React from 'react'
import './ToDoMainRedux.css'
import {Link} from 'react-router-dom'
import AddToDoRedux from './AddToDoRedux'
import { useSelector } from 'react-redux'
import ToDoItemRedux from './ToDoItemRedux'

function ToDoMainRedux() {
     const todos = useSelector((state)=> state.todos)   // use Selector ke callbacker ke ander store ke ssare sattes ka acess milta hai uske naame se
    //  console.log(todos);
     
  return (
    <>
      <div className='todo-container'>
      <h2 style={{textAlign:"center"}}>Redux TODO</h2> 
      <Link to={'/todo'} > <button type="button" className="btn btn-primary">Context-API TODO</button> </Link>

      <div className="mb-3 w-50 mt-5">
        <AddToDoRedux />

        {todos && todos.map((item)=>(
          <ToDoItemRedux key={item.id} todo={item}/>
        ))}


 
      </div>

    </div>
    </>
  )
}

export default ToDoMainRedux
