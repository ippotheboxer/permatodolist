import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TbPencil } from "react-icons/tb";

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.task);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Edit description
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/";
            
        } catch (error) {
            console.log(error);
        }
    } 

    return (<>
    <Button variant="primary" onClick={handleShow}>
        <TbPencil />
      </Button>

      <Modal show={show} onHide={() => {setDescription(todo.task); handleClose(); }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body> <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} /> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setDescription(todo.task); handleClose(); }}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {updateDescription(e); handleClose();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>);
    };

export default EditTodo;