import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>What's ur plan today?</h1>
      <TodoList />
    </div>
  );
}

export default App;
