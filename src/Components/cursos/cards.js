import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';

function Carta(props) {
    

  const ButtonStyle = {
    backgroundColor: "#EFCB68",
    borderColor: "#EFCB68"
}

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    
    <Card >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          Lorem
        </Card.Text>
        <Button variant="primary" style={ButtonStyle} onClick={handleShow}>Comprar</Button>
        

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Info curso</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={ButtonStyle}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
  );
}

export default Carta;