import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, settodos] = useState([])
    
    const updatetodo = (todoid,newvalue) =>
    {   
        if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
            return;
        }  
        settodos(prev => prev.map(item => (item.id === todoid ? newvalue : item)))
    }
    const addToDo = (todo) => { 
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }  
        const newTodos = [todo, ...todos]
        settodos(newTodos)
        console.log(todo,...todos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        settodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        settodos(updatedTodos);
      };
    


    return (
        <div>
            <TodoForm onSubmit={addToDo}/>
            <Todo todos={todos} completeTodo= {completeTodo} removeTodo={removeTodo} updatetodo={updatetodo}/>
        </div>
)
}

export default TodoList
