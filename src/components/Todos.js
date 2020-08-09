import React, {useState} from 'react';
import TodoModel from '../model/TodoModel';
import { Row, Col, Toast } from 'react-bootstrap';
import './Todos.css'
import Todo from './Todo';

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
            <Row>
                <Col>
                    <input type="text" value={value} placeholder="What's next?" onChange={(e) => setValue(e.target.value) } onKeyUp={addTodo}/>
                </Col>
            </Row>            
            <Row>
                <Col lg={5}>
                    {/* {displayList} */}
                    <Todo />
 
                </Col>
            </Row>            
        </div>
    );
}

export default Todos;