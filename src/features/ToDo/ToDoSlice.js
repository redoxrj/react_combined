import {createSlice,nanoid} from '@reduxjs/toolkit'
import {ToDos} from '../../utils/localStorage'

// const initialState= {
  //     todos : [{id :1,title:"First To-Do",isCompleted :false}]
  // }
  const intialToDos = ToDos()
const initialState= {
    todos : intialToDos
}



//step 2: kisi sub-store/feature/slice ka slice bnaya redux toolkit se

 const ToDoSlice =createSlice({
    name : 'ToDo',
   initialState,  // (initialState :initialState),
   reducers :{     
    addToDo : (state,action)=>{ // state here refers to intitialState Object
        const todo ={
            id :nanoid(),
            title : action.payload.title, //just action.payload will also work same since same name // payload is nothinbg but object
            isCompleted :false
        }
        state.todos.push(todo)  // see here are mutating the react states directly contrary to react rules and context-api // coz redux mein states hmari saari preserve rhti hai conext-api mein ni
        localStorage.setItem('todosRedux',JSON.stringify(state.todos))

    },
    deleteToDo : (state,action)=>{
        state.todos =state.todos.filter((todo)=>todo.id!==action.payload.id)
        localStorage.setItem('todosRedux',JSON.stringify(state.todos))

    },
    updateToDo : (state,action)=>{      
        state.todos =state.todos.map((todo)=>todo.id===action.payload.id ? {...todo,...action.payload} :  todo)
        localStorage.setItem('todosRedux',JSON.stringify(state.todos))

    }

   }
   // reducers objects ke ander key : functions definiotns rhnegyey (basically sarre functions rhrnrgy jo bhi bannaana chhatye ho joki current intitialState ko change kar rhine hongey but current present value ko ) 
   // (state,action) ye dono automatice milta hai createSlice ke reducers ke ander sare cretaed func's mein, react toolkit provite krta hai har redcucers(nothing but functionlaity/function to modify/update state in redux store) ke ssath 
   // state here-> satte mein hmesha current state ka acesss milega jo bhi h curent wo,jo ki by bydefault inttially intialState tha wo
   // action -> acvtion mein hmesha payload milega (jo bhi data pass ho rha hai ksiki compoennet mein jha use krneegy) ,so action.payload hmesha milega

   // store,reducers --> part of redux/redux toolkit(modern better) independent core libraries
//useSelector,useDispatch --> part of react-redux (or can say react )

// useDispatch-> to dipatch any satte chyange in store //dispatch ek reducer ko use krtey hue store mien states/values changes karta hia (we use useDispatch mostly in componnets where some action is perorming ,so we just call a partucalr reducer and hence the state get updated in store )
// useSelector-> to take any value/satte from store (agian mostly in component wehere we want to get currenoy updated valye of a state present in store)

// *** MOST IMPORTANT : as we know as they say, NEVER mutate your state directtly in react (just we saw an todo exmample using context-api) , finally this is overcomed by redux/reduxToolkit as in this we can mutate staates directly and everything redux will work behind the scnesnes automatilaly to get the things done and so finally react able to render it without any issue. 



})

export const {addToDo,deleteToDo,updateToDo}  = ToDoSlice.actions  // to indididiaully export each reducer so that later ccan be used in amy target compoenets
// This is an object with action creator functions of a coressponding slice(feature) automatically made for us , so that we can use it anywhere(compoenet) we want.

export default ToDoSlice.reducer  // the single big reducer function you put in the store/Redux expects/It’s the one you give to configureStore for each slice(feature) we made.
//It knows how to handle "todo/addTodo" and "todo/removeTodo" and others(if any) actions.

// if you cosole.log(ToDoSlice) ,you will get
/*
{
  name: "todo",
  reducer: ƒ(state, action),   // <-- the main reducer function
  actions: {                   // <-- action creators generated for you
    addTodo: ƒ(payload),
    removeTodo: ƒ(payload)
  },
  caseReducers: {              // <-- your raw reducer functions
    addTodo: ƒ(state, action),
    removeTodo: ƒ(state, action)
  }
}

*/