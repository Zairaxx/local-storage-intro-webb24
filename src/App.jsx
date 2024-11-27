import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //Sätt todos till localStorage om det finns, ANNARS en tom array
  const [todos, setTodos] = localStorage.getItem("Todos") ? useState(JSON.parse(localStorage.getItem("Todos"))) : useState([]);
  const [newTodo,setNewTodo] = useState("");

  const addTodo = () => {
    let updatedTodos = [...todos, newTodo];
    localStorage.setItem("Todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Todo-list with local storage</h1>
      <input type="text" placeholder='New todo' onChange={(event) => setNewTodo(event.target.value)}/>
      <button onClick={addTodo}>Lägg till</button>
      <h2>Todo list</h2>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </>
  )
}

export default App
