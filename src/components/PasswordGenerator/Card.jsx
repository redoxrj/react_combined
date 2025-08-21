import { useCallback, useEffect, useRef,useState} from 'react'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

function Card({userName,age=0}){
  const copyRef =useRef(null)

  const [copyState,setCopyState] =useState('Copy')
  const [password,setPassword] =useState('')
  const [length,setLength] =useState(12)


  function copyToClipboard(){

    window.navigator.clipboard.writeText(password)  // writeText expeects string in () aru=gumet
    copyRef?.current?.select() // works for input and textarea TAGS not for h5 and others.
    setCopyState('Copied!')

    setTimeout(()=>{
       setCopyState('Copy')

    },1000)

  }

  // function generateRandomPassword(first){
  //   let pass=''
  //   let str='abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*'

  //   for(let i=0;i<length;i++){
  //     let rand = Math.floor(Math.random()*str.length)
  //     pass+= str.charAt(rand)

  //   }
  //   setPassword(pass)
  //   if(first) toast.success('Password Generated!')
  // }

  const generateRandomPassword = useCallback((first)=>{// using useCallback hook just for optimization
     let pass=''
    let str='abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*'

    for(let i=0;i<length;i++){
      let rand = Math.floor(Math.random()*str.length)
      pass+= str.charAt(rand)

    }
    setPassword(pass)
    if(first) toast.success('Password Generated!')

  },[length])
  
  useEffect(()=>{
    if (password) generateRandomPassword(false)

  },[length])

    return(
        <>
        <div className="card" style={{width: "18rem"}}>
  <img src='https://avatars.githubusercontent.com/u/140983045?v=4' className="card-img-top img-fluid" alt=".." style={{ height: "200px", objectFit: "fill" }} />
  <div className="card-body"> 
    <input className="card-title form-control-plaintext fw-bold"  value={`${userName},${age}`} readOnly></input> 
    <Link to={`/github/${userName}`}> <button> <i className="bi bi-eye"></i></button> </Link>
    <input className="card-title form-control-plaintext fw-bold"  ref={copyRef} value={password} readOnly></input>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <button className="btn btn-primary" onClick={()=>generateRandomPassword(true)}>Generate Pass</button>
    <button className= {copyState==='Copy'?"btn btn-primary ms-4" : "btn btn-success ms-4"} onClick={copyToClipboard} disabled={!password? true : false}>{copyState}</button>
    <label htmlFor="range" className='fw-bold'> Pass Length : { length}</label> <input id='range' type="range" min={6} max={30}  value={length} onChange={(e)=>(setLength(e.target.value))}/>
  </div>
</div>
        </> 
    )
}

export default Card