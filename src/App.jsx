import "./App.css";
import {Outlet} from 'react-router-dom'
import {Header} from './components'
import {ToDoContextProvider} from  './contexts/ToDoContext'

function App() {  // App is Layout.jsx here , Header(Navbar) will be constant/fixed ,outlet below it will keep changing
  
  return (
    <>
    <ToDoContextProvider>
    <Header/>
    <Outlet/>
    </ToDoContextProvider>

      
    </>
  );
}

export default App;
