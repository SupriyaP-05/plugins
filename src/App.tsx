import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from "./Login/login";
import FacebookLogins from "./Login/faceBook";
import { Messaging } from './Firebase/messaging';
import axios from 'axios';
import { ToastContainer, Navbar, Container, Row, Col } from 'react-bootstrap';

axios.defaults.baseURL = 'https://localhost:3001/v1';

function App() {
  return (
    <div className="App">
      <GoogleLogin></GoogleLogin>
      <FacebookLogins></FacebookLogins>
      <Fragment>
      <ToastContainer position="top-center" />
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Firebase notifictations with React and Express</Navbar.Brand>
      </Navbar>
      <Container className="center-column">
        <Row>
          <Col>
            <Messaging />
          </Col>
        </Row>
      </Container>
    </Fragment>
    </div>
  );
}

export default App;
