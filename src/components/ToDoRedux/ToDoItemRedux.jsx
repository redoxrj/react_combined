import { useContext, useEffect, useRef, useState } from "react";
import {toast} from 'react-toastify'
import {deleteToDo,updateToDo} from '../../features/ToDo/ToDoSlice'
import { useDispatch } from "react-redux";


function ToDoItemRedux({ todo }) {
    const [isEditing,setIsEditing] =useState(false)
    const [text,setText] = useState(todo?.title)
    const [isCompleted,setIsCompleted] = useState(todo?.isCompleted)
    const inputRef = useRef(null)
const dispatch  = useDispatch()

const handleUpdate =()=>{
  
    
    if(isEditing===false &&  text){

        setIsEditing(true)
        inputRef.current.focus();

    }
    else if(isEditing===true){

        const payload = {
          id: todo?.id,
          title : text,
          isCompleted
        }
        dispatch(updateToDo(payload))
        setIsEditing(false)
        toast.success('ToDo Updated!')
        

    }
    
}

const handleCheckBox = (e)=>{
    // setIsCompleted((prev)=>!prev) // state timing problem,setIsCompleted is asynchronous — React won’t update isCompleted immediately. So when you call updateToDo right after, it’s still using the old value of isCompleted, not the new one.
    const checked = e.target.checked
    setIsCompleted(checked) // update local state
    // console.log(checked);
    // console.log(isCompleted);
     const payload = {
          id: todo?.id,
          isCompleted : checked
        }
        dispatch(updateToDo(payload))
        setIsEditing(false)

    toast.success(checked ? 'ToDo Completed!': "ToDo Pending!")


    
}

// more effevtive optimized in case  inputRef.current.focus() not work in line 16
// useEffect(()=>{
//   if(isEditing){
//     inputRef?.current?.focus()
        

//     }

// },[isEditing])
const deleteHandle =(id)=>{
  console.log(id);
  
  const payload={
    id
  }
  dispatch(deleteToDo(payload))
  toast.success('ToDo Deleted!')

}

  return (
    <div className="todo-item">
      <input type="checkbox" className="todo-checkbox" value={isCompleted} checked={isCompleted} onChange={handleCheckBox} disabled={isCompleted} />
      <input type="text" className={`todo-text ${isCompleted ? 'text-decoration-line-through' :''}`} value={text} readOnly ={isEditing===true?false : true} onChange={(e)=>setText(e.target.value)} ref={inputRef}  />
      <button className="btn btn-link p-0 todo-icon edit-icon" onClick={handleUpdate} disabled={isCompleted} ><i className={`bi ${isEditing ? 'bi-floppy2-fill' :'bi-pencil-square' } todo-icon edit-icon`} ></i> </button>
      <i className="bi bi-x-square todo-icon delete-icon" onClick={()=>deleteHandle(todo.id)}></i>
    </div>
  );
}

export default ToDoItemRedux;

