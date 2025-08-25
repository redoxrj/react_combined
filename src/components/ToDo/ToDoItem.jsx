import { useContext, useState } from "react";
import { ToDoContext } from "../../contexts/ToDoContext";
import {toast} from 'react-toastify'

function ToDoItem({ todo }) {
    const [isEditing,setIsEditing] =useState(false)
    const [text,setText] = useState(todo?.title)
    const [isCompleted,setIsCompleted] = useState(todo?.isCompleted)

    const {deleteToDo,updateToDo} = useContext(ToDoContext)
const handleUpdate =()=>{
    
    if(isEditing===false &&  text){
        setIsEditing(true)

    }
    else if(isEditing===true){
        updateToDo(todo?.id,{title :text})
        setIsEditing(false)
        toast.success('Updated Successfully!')
        

    }
    
}

const handleCheckBox = (e)=>{
    // setIsCompleted((prev)=>!prev) // state timing problem,setIsCompleted is asynchronous — React won’t update isCompleted immediately. So when you call updateToDo right after, it’s still using the old value of isCompleted, not the new one.
    const checked = e.target.checked
    setIsCompleted(checked) // update local state
    // console.log(checked);
    // console.log(isCompleted);

    updateToDo(todo?.id,{isCompleted : checked})
        setIsEditing(false)

    toast.success(checked ? 'ToDo Completed!': "ToDo Pending!")


    
}


  return (
    <div className="todo-item">
      <input type="checkbox" className="todo-checkbox" value={isCompleted} checked={isCompleted} onChange={handleCheckBox} disabled={isCompleted} />
      <input type="text" className={`todo-text ${isCompleted ? 'text-decoration-line-through' :''}`} value={text} readOnly ={isEditing===true?false : true} onChange={(e)=>setText(e.target.value)}  />
      <button className="btn btn-link p-0 todo-icon edit-icon" onClick={handleUpdate} disabled={isCompleted} ><i className={`bi ${isEditing ? 'bi-floppy2-fill' :'bi-pencil-square' } todo-icon edit-icon`} ></i> </button>
      <i className="bi bi-x-square todo-icon delete-icon" onClick={()=>deleteToDo(todo.id)}></i>
    </div>
  );
}

export default ToDoItem;

