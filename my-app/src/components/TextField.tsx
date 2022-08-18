import React from 'react'
import "./styles.css"

interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd:(e:React.FormEvent)=>void
}
function TextField({todo,setTodo,handleAdd}:Props) {



  return (
    <form className='input' onSubmit={handleAdd}>
 <input 
 type="text"
  placeholder='Enter a Task'
   className='input_box'
   value={todo}
   onChange={(e)=>setTodo(e.target.value)}
   />

   <button 
   type='submit'
    className='input_submit'
    >
    Go</button>
    </form>
  )
}

export default TextField