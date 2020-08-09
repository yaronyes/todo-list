import React, {useState} from 'react';
import TodoModel from '../model/TodoModel';
import { Row, Col } from 'react-bootstrap';
import './Todos.css'
import Todo from './Todo';

const Todos = () => {
    const [value, setValue] = useState("");    
    const [todoList, setTodoList] = useState([]);
    
    const addTodo = (event) => {                
        if(event.keyCode === 13) {
            setTodoList([...todoList, new TodoModel(value)]);
            setValue("");
        }
    }

    const updateTodoStatus = (index, status) => {
        setTodoList(todoList.map((todo, i) => {
            if(i === index) {
                return new TodoModel(todo.text, status);
            } else {
                return todo;
            }
        }));
    }
    
    const displayList = todoList.map(((todo, index) => <Todo key={index} todo={todo} updateTodoStatus={(status) => updateTodoStatus(index, status)}/>))
    const numberOfItemsLeft = todoList.filter(todo => !todo.isCompleted).length;

    return (
        <div className="todos-comp">
            <h1>Todos</h1>            
            <Row>
                <Col>
                    <input type="text" value={value} placeholder="What's next?" onChange={(e) => setValue(e.target.value) } onKeyUp={addTodo}/>
                </Col>
            </Row>            
            <Row>
                <Col md={5}>
                    {displayList}                     
                </Col>                
            </Row>            
            <Row>
                <Col>
                    <p>{numberOfItemsLeft} items left</p>
                </Col>
            </Row>
        </div>
    );
}

export default Todos;