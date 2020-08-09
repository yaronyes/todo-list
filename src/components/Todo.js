import React, {useState} from 'react';
import TodoModel from '../model/TodoModel';
import './Todo.css'
import { Row, Col, Button } from 'react-bootstrap';

const Todo = ()  => {
    const [showDeleteBtn, setShowDeleteBtn] = useState("");
    
    const onShowDeleteBtn = (show) => {
        setShowDeleteBtn(show ? "show-del-button" : "");
    }
    
    return (
        <div className="todo-comp" onMouseOver={() => onShowDeleteBtn(true)} onMouseLeave={() => onShowDeleteBtn(false)}>
            <Row>
                <Col className="todo">
                    <label><input type="checkbox"/> checkbox 1</label>
                    {/* <Button variant="outline-danger" className="delete-todo" size="sm">x</Button>                                             */}
                    <span className={"delete-todo " + showDeleteBtn}>x</span>
                </Col>
            </Row>
            
            
        </div>
    );
}

export default Todo;