import { useContext, useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"
import { DefaultUsernameContext } from "../../contexts/DefaultUsernameContext"


function GitHub() {
  // const {userName} = useParams()
  // const safeUserName = userName || "redoxrj"

  // const[userInfo,setUserInfo] = useState({})

  // const callGitApi =async()=>{
  //   try {
  //     const res= await fetch(`https://api.github.com/users/${safeUserName}`)
  //     const data = await res.json()
  //     console.log(data);
      

  //     setUserInfo(data)


      
  //   } catch (error) {
      
  //   }
  // }

  // useEffect(()=>{
  //   callGitApi()

  // },[safeUserName])
  const[userInfo,setUserInfo] = useState({})

  const   userInfoFromLoader = useLoaderData() // useLoaderData hook automatically resolves the promise returned by the loader function and provides the data to the component. This is a more optimized way to handle data fetching in React Router, as it allows you to fetch data before rendering the component.
  console.log(userInfo);
  const {defaultUserName} =  useContext(DefaultUsernameContext)
 
   useEffect(()=>{

     if(userInfoFromLoader){
    setUserInfo(userInfoFromLoader)
  }
  else{
  const safeUserName = defaultUserName || "redoxrj"
  const callGitApi =async()=>{
    try {
      const res= await fetch(`https://api.github.com/users/${safeUserName}`)
      const data = await res.json()
      // console.log(data);
      setUserInfo(data)
      console.log(userInfo);
      
      

      // setUserInfo(data)


      
    } catch (error) {
      
    }
  }
  callGitApi()

  }
    

  },[defaultUserName,userInfoFromLoader])


  return (
    <>
    <div className="card" style={{width: "30rem", margin: "auto"}}>
  <img src={userInfo?.avatar_url} className="card-img-top rounded-circle p-3 mx-auto" style={{width: "300px"}} alt="User Image"/>
  <div className="card-body text-center">
    <h5 className="card-title">{userInfo?.login || defaultUserName}</h5>
    <p className="card-text">{userInfo?.name }</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Git Repo's: {userInfo?.public_repos}</li>
    <li className="list-group-item">Git Followers: {userInfo?.followers}</li>
    <li className="list-group-item">Location: {userInfo?.location}</li>
    <li className="list-group-item">Bio: {userInfo?.bio}</li>
  </ul>
  <div className="card-body text-center">
    <Link to={userInfo?.blog} target="_blank" className="btn btn-outline-primary">Blog</Link>
  </div>
</div>

    </>
  )
}

export default GitHub

export const optimisedApiCallGithubLoader =async({params})=>{
  // const {userName} = useParams() // calling a React hook (useParams) inside a loader function, and that’s not allowed.
  //Instead of useParams, the loader receives the route params as an argument.

  //  const {defaultUserName} =useContext(DefaultUsernameContext) // any react hook cannot be used in non react component function like this loader function
  const safeUserName = params?.userName || "redoxrj"
  console.log("safeUserName",safeUserName);
  
  try {

     const res= await fetch(`https://api.github.com/users/${safeUserName}`)
      return res.json()  // promise hi retrun kar diya ,whi chayyie hota hai loader prop ko Route mein react-router-dom k ->fast optimzse way ke liye hover pe hi api call krke reposne proimise mein rakh leta hai click krtey hai bus resolve krke show kr deta hai
      // chahta toh bina loader prop ke bhi kar kr skta tha but not optimised nor fast and laggy in api reposne time just after click

    
  } catch (error) {
    
  }
}