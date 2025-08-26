export const ToDos = ()=>{
    const todos = localStorage.getItem('todosRedux')
    if(todos && todos!=='undefined' ){
        return JSON.parse(todos)
    }
    return []
}