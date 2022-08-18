import React from 'react'
import { Todo } from './Model'
import SingleTodo from './SingleTodo'
import './styles.css'
interface Props{
todos:Todo[],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
completed:Todo[],
setCompleted:React.Dispatch<React.SetStateAction<Todo[]>>,
}
export default function TodoList({todos,setTodos,completed,setCompleted}:Props) {
  return (
    <div className="container">
      <Droppable droppableId="todosList">
        {(provided,snapshot)=>(

      <div className={`todos ${snapshot.isDraggingOver? "dragactive":""}`}
       ref={provided.innerRef} 
       {...provided.droppableProps}>
      <span className="todos__heading">
          Active Tasks
        </span>
        {todos.map((todo,index)=>(
          <SingleTodo
          todo={todo}  
          index={index}
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          />
        ))}
    {provided.placeholder}
      </div>
       )}
      </Droppable>

      <Droppable droppableId="todosRemove">

      {(provided,snapshot)=>(
      <div className={`todos remove ${snapshot.isDraggingOver? "dragremove":""}`}
      ef={provided.innerRef}
       {...provided.droppableProps}>
        
        <span className="todos__heading">
          Completed Tasks
        </span>
        {completed.map((todo,index)=>(
          <SingleTodo
          todo={todo}
          index={index}
          todos={completed}
          setTodos={setCompleted}
          key={todo.id}
          />
        ))}
        {provided.placeholder}

      </div>
      )}
      </Droppable>
    </div>
  )
}


//react-icons
//react-beautiful-dnd