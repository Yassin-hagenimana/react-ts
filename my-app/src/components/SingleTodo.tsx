import React from 'react'
import { Todo } from './Model'
import './styles.css'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"

type Props={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
export default function SingleTodo({todo,todos,setTodos}:Props) {

    const handleDone=( id:number)=>{
        setTodos(todos.map((todo)=>
        todo.id === id ? {...todo,isDone:!todo.isDone}:todo))

    }
 return (
    <form className='todos__single'>
        {
            todo.isDone?(
                <s className='todos__single--text'>{todo.todo}</s>

            ):(
                <span className='todos__single--text'>{todo.todo}</span>
            )}
        

        <div>
            <span className="icons">
                <AiFillEdit/>
                </span>
            <span className="icons">
                <AiFillDelete/>
                </span>
            <span className="icons" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
                </span>
        </div>

    </form>
  )
}
