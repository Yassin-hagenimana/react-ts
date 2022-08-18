import React from 'react'
import { Todo } from './Model'
import SingleTodo from './SingleTodo'
import './styles.css'
interface Props{
todos:Todo[],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
export default function TodoList({todos,setTodos}:Props) {
  return (
    <div className='todos'>
     {
        todos.map(todo=>(
           <SingleTodo
           todo={todo}
           todos={todos}
           setTodos={setTodos} />
        ))
     }
    </div>
  )
}
