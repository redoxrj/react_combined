import React, { useContext, useState } from 'react'
import { ToDoContext } from '../../contexts/ToDoContext'
import {toast} from 'react-toastify'

function AddToDo() {
      const {addToDo} = useContext(ToDoContext)
      const [toDo,setToDo] =useState('')

      const handleAddButton = ()=>{
        if(!toDo) return
        const toDoObject = {
          id : Date.now(),
          title : toDo,
          isCompleted :false
        }
        addToDo(toDoObject)
        setToDo('')
        toast.success('ToDo Added Successfully!')

      }
  return (
    <>
     <div className="input-group">
    <input style={{backgroundColor:"#424E64",color:"white"}} type="text" id="githubUsername" className="form-control" placeholder="Write ToDo..." aria-label="Username"  value={toDo} onChange={(e)=>setToDo(e.target.value)} />
    <button className="btn btn-success" type="button" onClick={handleAddButton} >
      Add
    </button>
  </div>
      
    </>
  )
}

export default AddToDo
