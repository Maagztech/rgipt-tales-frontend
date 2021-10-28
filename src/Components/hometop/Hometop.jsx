import './Hometop.css';
import React from 'react'
import { Container, Button } from 'react-bootstrap';
function hometop() {
  return (
    <>
      <div className="homeimg d-flex align-item-center position-relative" >
      <div className="logs">
        <Button variant="light">Logout</Button>{' '}
        <Button variant="success">Login</Button>{' '}
        <Button variant="primary">Signup</Button>{' '}
        
          <img src="./././Images/author.jpg" alt="" width="40"
            height="40"
            className="logimg" />
        </div>
        <div className="hometext">
        
          <h2 className="text1">MEDIA AND INFO WEBSITE </h2>
          <h5 className="text2"> Powered by:-</h5>
          <h4 className="text3">Publicity Team RGIPT</h4>
        </div>
      </div>
    </>
  );
}

export default hometop;
