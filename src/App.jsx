import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'



function App() {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const newuser = {id:nanoid(), name, email, number }
    setusers([...users, newuser])
    setname("")
    setemail("")
    setnumber("")
    localStorage.setItem('users', JSON.stringify([...users, newuser]))
    console.log(newuser)

  }

  const deleteHandler = (id) => {
    
    setusers(users.filter((user) => user.id !== id))
    localStorage.setItem('users', JSON.stringify([...users,users.filter((user) => user.id !== id)]))

  }

  return (
    <> 
    <div className='bg-lime-200 px-20 py-10 w-[100vw] h-[100vh] text-center overflow-x-hidden'>
      <h1 className=' text-2xl text-black font-[gilroy] font-semibold mb-[5vh]'>Data showning Cards</h1>
      <form onSubmit={submitHandler} className=' flex items-center justify-center gap-7 '>

      <div>
        <label htmlFor="name" className='text-normal font-bold'>NAME : </label>
      <input 
      onChange={(e) => setname(e.target.value)} 
      value={name}
      type="text" 
       placeholder='Enter your name'
       className='outline outline-violet-600 mr-4 ml-1 px-5 rounded-lg' />
      </div>

      <div>
        <label htmlFor="email" className='text-normal font-bold'>EMAIL : </label>
      <input
      onChange={(e) => setemail(e.target.value)} 
      value={email}
      type="email" placeholder='Enter your email' 
      className='outline outline-violet-600 mr-4 ml-1 px-5 rounded-lg'/>
      </div>

      <div>
        <label htmlFor="no" className='text-normal font-bold'>CONTACT NO :</label>
      <input
      onChange={(e) => setnumber(e.target.value)} 
      value={number}
      type="num" placeholder='Enter your number' 
      className='outline outline-violet-600 mr-4 ml-1 px-5 rounded-lg'/>
      </div>
      <button type="submit" className='border-2 bg-violet-500 hover:bg-violet-600 px-4 py-1 rounded-lg text-white hover:text-black border-black hover:border-white'>Submit</button>


    </form>

<div className=' grid grid-cols-5 mt-[10vh] gap-16'>

{users.length > 0 ? (

  users.map((user) =>{
    return (
      <div key={user.id} className='w-[15vw] h-[22vh] bg-violet-600 text-white py-2 text-center rounded-3xl border-2 shadow-lg hover:shadow-2xl shadow-black hover:shadow-green-800 border-black hover:border-white scale-100 hover:scale-105 transition-all'>
    <h1 className=' font-bold text-lg'>{user.name}</h1>
    <h4>{user.email}</h4>
    <h4>{user.number}</h4>
    <h4 className=' text-xs'>{user.id}</h4>
    <button
     className='bg-lime-500 hover:bg-red-500 mt-5 text-black hover:text-white w-20 h-7 border-2 border-black hover:border-white rounded-lg text-center'
     onClick={() => {deleteHandler(user.id) }}>Delete</button>
    </div>
)}
)
) : ( <h1 className='w-[90vw] text-center font-bold mt-[15vh] '>No Data Registered</h1> )
}

</div>
</div>
    </>
    )
}

export default App