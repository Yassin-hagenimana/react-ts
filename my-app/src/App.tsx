import './App.css';
import TextField from './components/TextField';


const App:React.FC=()=> {
  return (
    <div className="App">
<span className="heading">
  <h1>Taskify</h1>
  <TextField/>
</span>

    </div>
  );
}

export default App;
