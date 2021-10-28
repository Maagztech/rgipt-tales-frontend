import React from 'react';
import './App.css';
import Topbar from './Components/topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hometop from './Components/hometop/Hometop';
import SideAuthor from './Components/SideAuthor/SideAuthor';
import { Row, Col, Container } from "react-bootstrap";
import Catagorywhole from './Components/Catagory-main/catagory-whole';
import Homeabout from './homeAbout/homeabout';


function App() {
    return (
        <div>

            <Topbar />
            <Hometop />
            <Container>
                <Row>
                    <Col>
                        <Catagorywhole />
                        
                        <Catagorywhole />
                        
                        <Catagorywhole />
                        
                        <Catagorywhole />
                        
                    </Col>
                    <Col xl={2}>
                        <SideAuthor />
                        <Homeabout/>

                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

