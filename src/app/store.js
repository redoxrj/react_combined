import {configureStore} from '@reduxjs/toolkit'
import ToDoReducer from '../features/ToDo/ToDoSlice'

// step 1 : store bnaya/configure kiya redux toolkit se
export const store = configureStore({
    reducer : ToDoReducer
})


// hmara centralized redux store simgle sourse of trurth
// store->single center warehourse of state varaibles ,consisite of multiple mini/sub stores/features(slices) eg-todo,users,products that represent a single sourse of truth
//redux/redux-toolkit mein har jgh mostly arguements mien  {}  koi objects pass on krtey h
// react-redux lgta hai import wiring /coonection(taaki react or redux ki baat cheet ho skein) ke liye indepdenet libbrbay redux/reduxToolkit(RTK) ke liye just like react-dom lgta hai(impliemnetation) web par react use karny k liye