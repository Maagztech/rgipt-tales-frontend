import './SideAuthor.css';
import { Card, Button, Container } from 'react-bootstrap'


function SideAuthor() {
    return (
        <Container>
            <hr />
            <h4 style={{textAlign:"center"}}>ABOUT ME</h4>
            <hr />
            <Card style={{ width: '16rem' }} className="mx-1" >
                <Card.Img variant="top" src="./././Images/author.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="outline-primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SideAuthor;
