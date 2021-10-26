import React , {useState} from 'react'

function TodoForm(props) {
    const [input, setinput] = useState('')

    const handleChange = (e) => {
        setinput(e.target.value)
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        
        props.onSubmit({
            id : Math.floor(Math.random()*100000),
            text : input
        })
        setinput('')
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="enter a todo" value={input} onChange={handleChange} />
            <button className="todo-button">add to list</button>
        </form>
    )
}

export default TodoForm
