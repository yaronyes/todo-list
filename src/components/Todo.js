import React, {useState} from 'react';
// import TodoModel from '../model/TodoModel';
import './Todo.css'
import { Row, Col, Modal, Button } from 'react-bootstrap';

// component for drawing todo item
// Props:
// todo - TodoModel class - the object to show
// updateTodoStatus - callback function for changing the todo item isCompleted status (e.g: updateTodoStatus(todoId, isCompleted))
// deleteItem - callback function for deleting the current item (e.g: deleteItem(todoId))
// State:
// showDeleteBtn - string - represent className for showing the delete button on mouse over
// completed - boolean - if the item completed or not
// show - boolean - show or hide the delete confirmation model dialog
const Todo = props  => {
    const { todo, updateTodoStatus, deleteItem } = props;
    const [showDeleteBtn, setShowDeleteBtn] = useState("");
    const [completed, setCompleted] = useState(todo.isCompleted);
    const [show, setShow] = useState(false);

    const onShowDeleteBtn = (show) => {
        setShowDeleteBtn(show ? "show-del-button" : "");
    };
    
    const changeStatus = e => {
        setCompleted(e.target.checked);        
        
        updateTodoStatus(todo.id, e.target.checked);
    };

    const deleteButtonPressed = () => {
        if(todo.isCompleted) {
            deleteItem(todo.id);
        } else {
            setShow(true);
        }        
    };

    const handleDelete = () => {
        deleteItem(todo.id);
        handleClose();
    }

    const handleClose = () => setShow(false);

    return (
        <div className="todo-comp" onMouseOver={() => onShowDeleteBtn(true)} onMouseLeave={() => onShowDeleteBtn(false)}>
            <Row>
                <Col className="todo">
                    <div>
                        <input type="checkbox" id="todo-item" checked={completed} onChange={e => changeStatus(e)}/> 
                        <span className={completed ? "todo-text completed-todo" : "todo-text"}>{todo.text}</span>
                    </div>
                    <span className={"delete-todo " + showDeleteBtn} onClick={deleteButtonPressed}>x</span>
                </Col>
            </Row>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting an Item!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                    Delete
                    </Button>
                </Modal.Footer>
                </Modal>
        </div>
    );
}

export default Todo;