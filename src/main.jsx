  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import { ToastContainer } from 'react-toastify';
  import {GitHub, PassGen,ToDoMain,optimisedApiCallGithubLoader} from './components'
  import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom'
  import {DefaultUsernameContextProvider,DefaultUsernameContext} from './contexts/DefaultUsernameContext'
  import { useContext } from 'react';

  // const {defaultUserName} = useContext(DefaultUsernameContext) // // ❌ Not allowed ,Hooks (useContext, useState, etc.) only work inside React components (functions that React renders)

  const  router =createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<App/>}>

    <Route path="" element={<PassGen />} />
    <Route path="github" element={<GitHub />}  />
    <Route path="github/:userName" element={<GitHub />} loader={optimisedApiCallGithubLoader} />
    <Route path="todo" element={<ToDoMain />}  />


  </Route>

  ))


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
    {/* // <React.StrictMode> */}
    <DefaultUsernameContextProvider>
    <RouterProvider router={router} />
    </DefaultUsernameContextProvider>
    <ToastContainer/>

    {/* // </React.StrictMode> */}
    </>

  );

