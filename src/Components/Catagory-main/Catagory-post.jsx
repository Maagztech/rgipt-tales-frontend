import React from 'react'
import {Card,Button} from 'react-bootstrap'

export default function Catagorypost() {
    return (
        <Card style={{ width: '16rem' }} className="my-1">
        <Card.Img variant="bottom" src="./././Images/Post.png" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}
