import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);  // State to store the list of todos
  const [newTodo, setNewTodo] = useState("");  // State to store the current input

  // Handle the input change
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); // Add the new todo to the list
      setNewTodo(''); // Clear the input field
    }
  };

  // Render each todo item
  const ToDoItem = ({ text }) => {
    return <li>{text}</li>;
  };

  return (
    <div className="App">
      <h1>Ty's To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={handleChange}  // Bind the handleChange function
        />
        <button type="submit" className="save-button">SAVE</button>
      </form>

      <div className="todo-content">
        <ol>
          {todos.map((todo, index) => (
            <ToDoItem key={index} text={todo} />  // Render the todo items
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
