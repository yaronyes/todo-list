import React, {useState} from 'react';
import TodoModel from '../model/TodoModel';

const Todos = () => {
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    
    const addTodo = (event) => {                
        if(event.keyCode === 13) {
            setTodoList([...todoList, new TodoModel(value)]);
        }
    }
    
    const displayList = todoList.map((todo => todo.text))

    return (
        <div className="todos-comp">
            <h1>Todos</h1>
            <input type="text" value={value} placeholder="What's next?" onChange={(e) => setValue(e.target.value) }  onKeyUp={addTodo}/>
            {displayList}
        </div>
    );
}

export default Todos;