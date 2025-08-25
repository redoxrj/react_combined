import {createContext, useEffect, useState} from 'react'

export const ToDoContext = createContext()

export const ToDoContextProvider = ({children})=>{
   
    const [toDoC,setToDoC] =useState([])

     //No, we don’t pass just "function definitions" with empty bodies in Context.
//Yes, you’re supposed to define the actual function bodies inside the provider so consumers can use them directly,Context is meant to centralize state and logic in one place (the provider)..
    // const addToDo =(todo)=>{
    //     const isExistingToDos =localStorage.getItem('ToDos')
    //     if(!isExistingToDos) localStorage.setItem('ToDos',JSON.stringify(toDoC)) 
    //     setToDoC(JSON.parse(localStorage.getItem('ToDos')))
    //     toDoC.unshift(todo) // content changed // But  React sees toDoC it's the same array reference, no re-render! // wont work
    //     // When you mutate an array/object directly, the reference stays the same, so React thinks nothing changed. // immutability feature of React

    // } 

    const addToDo = (todo)=>{  // expecting todo as object/json + prev existing satte of toDoC also an array of objects that's why
        setToDoC((prev)=>[todo,...prev]) // returning a new array reference,not mutating the existing array directly,which ensures React detects the state change and re-renders.

    }
    // const updateToDo =(id,todoName)=>{
    //     setToDoC((prev)=>prev.map((todoItem)=>{
    //          if(todoItem.id===id){
    //             todoItem.todoName=todoName   // ❌ mutation! not allowed in react
    //         }
    //     }))
    //     // 1.You’re mutating the object directly (todoItem.todoName=...).
    //     // 2.You’re not returning anything from .map if the condition is false → so it returns undefined for other items.
    // }
    const updateToDo =(id,todo)=>{
        setToDoC((prev)=>prev.map((item)=>item.id===id ? {...item,...todo} : item))
        // ...todo baad mein likha taaki update ho jaaye updated/replace/reassign walwein ke ssath
        // poora todo object consider kiya hai istead of just toDo Name

    }
    const deleteToDo =(id)=>{
        setToDoC((prev)=>prev.filter((item)=>item.id!==id))
    }

    useEffect(()=>{ // Context Providers(ToDoContextProvider) are react components too so we can use react hooks like useEffect — they mount once and render their children ,
        const isExistsToDos= localStorage.getItem('ToDos')
        console.log(isExistsToDos);
        if(isExistsToDos && isExistsToDos!=='undefined') setToDoC(JSON.parse(isExistsToDos))

    },[])

    useEffect(()=>{  //we can also use multiple use Effects in sample compone.
        localStorage.setItem('ToDos',JSON.stringify(toDoC))


    },[toDoC])

    return (
        <>
        <ToDoContext.Provider value={{toDoC,setToDoC,addToDo,updateToDo,deleteToDo}}>
            {children}
        </ToDoContext.Provider>
        </>
    )

}