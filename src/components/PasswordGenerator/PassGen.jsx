import { useEffect, useState } from "react";
import Card from "./Card";

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
      
  return (
    <>
      <div id="users" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
      {userList && userList.map((item)=>(

        <Card key={item?.id} userName={item?.username} age={item?.id} />

      ))}
      </div>
    </>
  )
}

export default PassGen