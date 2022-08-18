import { FormEvent, useState } from 'react';
import './App.css';
import { Todo } from './components/Model';
import TextField from './components/TextField';
import TodoList from './components/TodoList';


const App:React.FC=()=> {

  const [todo, setTodo] = useState<string>("")
  const[todos,setTodos] = useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  };
  console.log(todos)

  return (
    <div className="App">
<span className="heading">
  <h1>Taskify</h1>
  <TextField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
</span>

<TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
