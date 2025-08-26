  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import { ToastContainer } from 'react-toastify';
  import {GitHub, PassGen,ToDoMain,ToDoMainRedux,optimisedApiCallGithubLoader} from './components'
  import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom'
  import {DefaultUsernameContextProvider,DefaultUsernameContext} from './contexts/DefaultUsernameContext'
  import { useContext } from 'react';
  import {Provider} from 'react-redux'
  import {store} from './app/store'

  // const {defaultUserName} = useContext(DefaultUsernameContext) // // ❌ Not allowed ,Hooks (useContext, useState, etc.) only work inside React components (functions that React renders)

  const  router =createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<App/>}>

    <Route path="" element={<PassGen />} />
    <Route path="github" element={<GitHub />}  />
    <Route path="github/:userName" element={<GitHub />} loader={optimisedApiCallGithubLoader} />
    <Route path="todo" element={<ToDoMain />}  />
    <Route path="todo_redux" element={<ToDoMainRedux />}  />


  </Route>

  ))


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
    <Provider store={store}> 
    <DefaultUsernameContextProvider>
    <RouterProvider router={router} />
    </DefaultUsernameContextProvider>
    </Provider>
    <ToastContainer/>
    </>

  );

  // just like provider in context-api we hve to also wrap all compoennts inside Provider given by react-redux and value={} ki jgh store ={store} 

