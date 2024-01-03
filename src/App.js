import './App.css';
import TaskList from './TaskList.js';




function App() {

  const tasks = [
    {id: 1, text:'faire les cours', completed: false },
    {id: 2, text:'comprendre react', completed: true },
    {id: 3, text:'faire de l exercice', completed: false },

  ]
  return (


    
    
    <div className="App">
      <TaskList tasks={tasks} />
    </div>




  );
}

export default App;