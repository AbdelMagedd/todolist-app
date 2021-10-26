import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'



function Todo({todos,completeTodo,removeTodo,updatetodo}) {
    const [Edit, setEdit] = useState({id: null})
    
    const submitupdate = (value) => {
        updatetodo(Edit.id,value);
        setEdit({
            id:null,
            value:''
        })
    }
    if(Edit.id) {
        return <TodoForm edit={Edit} onSubmit={submitupdate}/>
    }

    return todos.map((todo,index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div>
            <RiCloseCircleLine onClick={() =>removeTodo(todo.id)}/>
            <TiEdit className='edit-icon' onClick={() => setEdit({id:todo.id, value: todo.text})} />
        </div>
    </div>))
}

export default Todo
