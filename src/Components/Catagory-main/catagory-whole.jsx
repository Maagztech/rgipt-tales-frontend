import Catagory from "./Catagory-post"
import { Container,Row,Col } from "react-bootstrap"
export default function Catagorywhole() {
    return (
        <>
        <br />
        <h2 style={{fontFamily: "'Bree Serif', serif"}}>Catagory Name</h2>
        <hr/>
        <Container>
            <Row>
            <Col><Catagory/></Col>
            
            <Col><Catagory/></Col>
            <Col><Catagory/></Col>
            <Col className="moreicon"><i class="fas fa-angle-double-right fa-5x"></i></Col>
            
            </Row>
            
        </Container>
        

        </>
    )
}
