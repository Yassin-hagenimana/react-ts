import { FormEvent, useState } from 'react';
import './App.css';
import { Todo } from './components/Model';
import TextField from './components/TextField';
import TodoList from './components/TodoList';
import{DragDropContext,DropResult} from "react-beautiful-dnd"


const App:React.FC=()=> {

  const [todo, setTodo] = useState<string>("")
  const[todos,setTodos] = useState<Todo[]>([])
  const[completed,setCompleted]=useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  };
  
  const onDragEnd= (result:DropResult)=>{
    const{source,destination}=result;
    if(!destination) return
    if(destination.droppableId===source.droppableId &&destination.index===source.index)
    return

    let add,
    active=todos,
    complete=completed;

  if(source.droppedId==="TodosList"){
    add=active[source.index]
    active.splice(source.index,1)

  }else{
    add=complete[source.index]
    complete.splice(source.index,1)
  }


  if(destination.droppedId==="TodosList"){
    active.splice(destination.index,0)

  }else{
    complete.splice(destination.index,1)
  }

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
<span className="heading">
  <h1>Taskify</h1>
  <TextField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
</span>

<TodoList
 todos={todos} 
 setTodos={setTodos}
  completed={completed}
  setCompleted={setCompleted}/>

    </div>
    </DragDropContext>
  );
}

export default App;
