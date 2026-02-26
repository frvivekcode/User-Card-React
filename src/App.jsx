 import React, { useState } from 'react'
import Card from './Components/Card'
 
 const App = () => {
  const [UserName, setUserName] = useState('')
  const [UserImage, setUserImage] = useState('')
  const [UserRole, setUserRole] = useState('')
  const [UserDescription, setUserDescription] = useState('')

  const localData=JSON.parse(localStorage.getItem('all-user')) || []

  const [AllUserData, setAllUserData] = useState(localData)
  const SumbitHandler=(e)=>{
    e.preventDefault()
    const NewUserData=[...AllUserData]
    NewUserData.push({UserName,UserImage,UserRole,UserDescription})

    localStorage.setItem("all-user",JSON.stringify(NewUserData))
    console.log(NewUserData);
    setAllUserData(NewUserData)
    setUserDescription("")
    setUserImage("")
    setUserName("")
    setUserRole("")
  }
  const Deletehandler=(idx)=>{
    const copyData=[...AllUserData]
    copyData.splice(idx,1)
    setAllUserData(copyData)
    localStorage.setItem("all-user",JSON.stringify(copyData))
    }
   return (
     <div className='h-screen bg-[#333]'>
      <div className='h-auto bg-[#333]  text-[#ffff]'>
      <form onSubmit={(e)=>{
        SumbitHandler(e)
      }} className='bg-[#007377] p-4 gap-2 flex flex-wrap' >



        <input className='p-4  mx-auto bg-[#143245] w-[48%] rounded-sm mb-2 '
         type="text"
          placeholder='Enter Name'
          value={UserName}
          onChange={(elem)=>{
            setUserName(elem.target.value)
          }}
          required
          />


        <input className='p-4  mx-auto bg-[#143245]  w-[48%] rounded-sm mb-2 ' 
        type="text" 
        placeholder='Enter Role' 
        value={UserRole}
          onChange={(elem)=>{
            setUserRole(elem.target.value)
          }}
          required
        />


        <input className='p-4  mx-auto bg-[#143245] w-[48%] rounded-sm mb-2 '
         type="text"
          placeholder='Image URL' 
          value={UserImage}
          onChange={(elem)=>{
            setUserImage(elem.target.value)
          }}
          required
          />


        <input className='p-4  mx-auto bg-[#143245]  w-[48%] rounded-sm mb-2 '
         type="text"
          placeholder='Enter Description'
          value={UserDescription}
          onChange={(elem)=>{
            setUserDescription(elem.target.value)
          }} 
          required
          />


        <button  className='p-4 active:scale-95 block bg-cyan-600 w-[40%] rounded-sm mb-2 mx-auto'>Sumbit</button>
      </form>
      <div className='flex flex-wrap gap-3'>
        {AllUserData.map((elem,idx)=>{
          return <div className='items-center flex  mx-auto flex-col p-3 h-100 w-80 rounded-xl mt-3  bg-[#595959]'>
      <img className='h-30 w-30 rounded-[50%] mb-4' src={elem.UserImage} alt="" />
      <h1 className='text-3xl text-[#ffffff] mb-2'>{elem.UserName}</h1>
      <h2 className='text-xl text-[#1d76db] mb-4'>{elem.UserRole}</h2>
      <p className='text-center mb-3'>{elem.UserDescription}</p>
      <button onClick={(idx)=>{
        Deletehandler(idx)
      }} className='bg-[#f00606] px-8 rounded-sm active:scale-95 py-2'>Remove</button>
    </div>
        })}
        
      </div>
     </div>
     </div>
   )
 }
 
 export default App
 