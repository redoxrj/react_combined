import "./App.css";
import {Outlet} from 'react-router-dom'
import {Header} from './components'

function App() {  // App is Layout.jsx here , Header(Navbar) will be constant/fixed ,outlet below it will keep changing
  
  return (
    <>
    <Header/>
    <Outlet/>

      
    </>
  );
}

export default App;
