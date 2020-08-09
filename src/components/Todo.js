import React, {useState} from 'react';
// import TodoModel from '../model/TodoModel';
import './Todo.css'
import { Row, Col } from 'react-bootstrap';

const Todo = props  => {
    const { todo, updateTodoStatus } = props;
    const [showDeleteBtn, setShowDeleteBtn] = useState("");
    const [completed, setCompleted] = useState(todo.isCompleted);
    
    const onShowDeleteBtn = (show) => {
        setShowDeleteBtn(show ? "show-del-button" : "");
    }
    
    const changeStatus = e => {
        setCompleted(e.target.checked);        
        
        updateTodoStatus(e.target.checked);
    }

    return (
        <div className="todo-comp" onMouseOver={() => onShowDeleteBtn(true)} onMouseLeave={() => onShowDeleteBtn(false)}>
            <Row>
                <Col className="todo">
                    <div>
                        <input type="checkbox" id="todo-item" checked={completed} onChange={e => changeStatus(e)}/> 
                        {/* <label className={completed ? "completed-todo" : ""} htmlFor="todo-item">{todo.text}</label> */}
                        <span className={completed ? "todo-text completed-todo" : "todo-text"}>{todo.text}</span>
                    </div>
                    
                    {/* <Button variant="outline-danger" className="delete-todo" size="sm">x</Button>                                             */}
                    <span className={"delete-todo " + showDeleteBtn}>x</span>
                </Col>
            </Row>
            
            
        </div>
    );
}

export default Todo;