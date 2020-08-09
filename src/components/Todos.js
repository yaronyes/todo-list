import React, {useState} from 'react';

const Todos = () => {
    const [value, setValue] = useState("");
    
    const addTodo = (event) => {                
        if(event.keyCode === 13) {
            alert(value)
        }
    }

    return (
        <div className="todos-comp">
            <h1>Todos</h1>
            <input type="text" value={value} placeholder="What's next?" onChange={(e) => setValue(e.target.value) }  onKeyUp={addTodo}/>
        </div>
    );
}

export default Todos;