import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import {GitHub, PassGen,optimisedApiCallGithubLoader} from './components'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom'

const  router =createBrowserRouter(createRoutesFromElements(

<Route path='/' element={<App/>}>

  <Route path="" element={<PassGen />} />
  <Route path="github" element={<GitHub />} loader={optimisedApiCallGithubLoader} />
  <Route path="github/:userName" element={<GitHub />} loader={optimisedApiCallGithubLoader} />

</Route>

))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* // <React.StrictMode> */}
  <RouterProvider router={router} />
  <ToastContainer/>
  {/* // </React.StrictMode> */}
  </>

);

