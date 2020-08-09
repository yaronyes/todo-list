import React, {useState} from 'react';
import TodoModel from '../model/TodoModel';
import { Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './Todos.css'
import Todo from './Todo';

const Todos = () => {
    const [value, setValue] = useState("");    
    const [todoList, setTodoList] = useState([]);
    const [selectedButton, setSelectedButton] = useState(1);
    
    const addTodo = (event) => {                
        if(event.keyCode === 13) {
            setTodoList([...todoList, new TodoModel({ text: value })]);
            setValue("");
        }
    }

    const updateTodoStatus = (id, isCompleted) => {
        setTodoList(todoList.map(todo => {
            if(id === todo.id) {
                return new TodoModel({ ...todo, isCompleted });
            } else {
                return todo;
            }
        }));
    }

    const applyFilter = (value) => {
        setSelectedButton(value);
    }
    
    const filteredList = todoList.filter(todo => {
        if(selectedButton === 1) {
            return true;
        }

        return selectedButton === 2 ? !todo.isCompleted : todo.isCompleted;
    })

    console.log(todoList)
    const displayList = filteredList.map((todo => <Todo key={todo.id} todo={todo} updateTodoStatus={(isCompleted) => updateTodoStatus(todo.id, isCompleted)}/>))
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
            <Row className={todoList.length === 0 ? "hide-footer" : ""}>
                <Col>
                    <p>{numberOfItemsLeft} items left</p>
                </Col>
                <Col>
                <ToggleButtonGroup type="radio" name="options"  className="filters-area" value={selectedButton} defaultValue={selectedButton} onChange={applyFilter}>
                    <ToggleButton variant="outline-danger" value={1}>All</ToggleButton>
                    <ToggleButton variant="outline-danger" value={2}>Active</ToggleButton>
                    <ToggleButton variant="outline-danger" value={3}>Completed</ToggleButton>
                </ToggleButtonGroup>                
                </Col>
            </Row>
        </div>
    );
}

export default Todos;