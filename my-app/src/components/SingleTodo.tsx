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
 return (
    <form className='todos__single'>
        <span className='todos__single--text'>{todo.todo}</span>

        <div>
            <span className="icons">
                <AiFillEdit/>
                </span>
            <span className="icons">
                <AiFillDelete/>
                </span>
            <span className="icons">
                <MdDone/>
                </span>
        </div>

    </form>
  )
}
