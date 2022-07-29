import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Carta(props) {
    
const CardStyle = {
    border: "1px solid #",
    boxShadow: "4px 4px 4px #1e3f2996", 
    padding: "20px",
    margin: "10px",
    width: '16rem',
    height: "40vh",
    backgroundColor: "#E1EFE6"
    
  };
  const ButtonStyle = {
    backgroundColor: "#EFCB68",
    borderColor: "#EFCB68"
}
  return (
    <Card style={CardStyle}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          Lorem
        </Card.Text>
        <Button variant="primary" style={ButtonStyle}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta;