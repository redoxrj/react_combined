import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addToDo} from '../../features/ToDo/ToDoSlice'
import {toast} from 'react-toastify'

function AddToDoRedux() {
  const [toDo,setToDo] = useState('')
  const dispatch  = useDispatch()

  const handleAddButton =()=>{
    if(!toDo) return  toast.error('Please Add First!')
    const payload = {
      title : toDo
    }
    dispatch(addToDo(payload))
    setToDo('')
    toast.success('ToDo Added!')
    
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

export default AddToDoRedux
