import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { DefaultUsernameContext } from "../../contexts/DefaultUsernameContext";
import {toast} from 'react-toastify'


function PassGen() {
    //  let num=40
      // const userList = [
      //   {
      //     userName: "raju",
      //     age: 8,
      //   },
      //   {
      //     userName: "shyaam",
      //     age: 18,
      //   },
      //   {
      //     userName: "raju",
      //     age2:34
      //   },
      // ];

      const [userList,setUserList] =useState([])
      
        async function callApiExternal(){
      
          try {
      
            const res = await fetch ('https://jsonplaceholder.typicode.com/users')
            // console.log(res);
            const data = await res.json()
            console.log(data);
            setUserList(data)
            
            
          } catch (error) {
            console.log(error);
            
            
          }
      
        }
      
        useEffect(()=>{
         
          callApiExternal()
      
      
        },[]) 

        const [username,setUsername] =useState('')

       const {defaultUserName,setDefaultUserName} =useContext(DefaultUsernameContext)

       const handleSaveUsername =()=>{
        setDefaultUserName(username ||  defaultUserName)
        toast.success('Default Username Saved!')
        
       }
      
  return (
    <>
   <div className="mb-3 w-25">
  <label htmlFor="githubUsername" className="form-label">Default GitHub Username:</label>
  <div className="input-group">
    <input type="text" id="githubUsername" className="form-control" placeholder="Username" aria-label="Username" onChange={(e)=>setUsername(e.target.value)} value={username || defaultUserName}/>
    <button className="btn btn-primary" type="button" onClick={handleSaveUsername}>
      <i className="bi bi-floppy2-fill"></i>
    </button>
  </div>
</div>

    
      <div id="users" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
      {userList && userList.map((item)=>(

        <Card key={item?.id} userName={item?.username} age={item?.id} />

      ))}
      </div>
    </>
  )
}

export default PassGen