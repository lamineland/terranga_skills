import React from 'react';
import prefab1 from './assets/prefab1.jpg';
import prefab2 from './assets/prefab2.jpg';
import prefab3 from './assets/prefab3.jpg';
import { Container, Row, Col, Navbar, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { sizing } from '@material-ui/system';
import { Box } from '@material-ui/core'
import './App.css';

function App() {

  const stylish1 = {
    backgroundColor: '#007bff',
    height: '100vh',
  }

  const stylish2 = {
    paddingTop: '50px',
  }

  const stylish3 = {
    paddingTop: '20px',
    paddingLeft: '40px',
    // height: '400px',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  }

  return (
      <div style={stylish1}>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TERRANGA SKILLS ENGINEERING
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        <Container fluid style={stylish2}>
          <Row>
            <Col md={5} style={stylish3}>
              <Box width="100%" my="auto">
                <Box width={1 / 3} 
                  display="flex" 
                  // alignItems="flex-start" 
                  justifyContent="center" 
                  bgcolor="palevioletred" my={1} p={1} mx="auto"
                  borderRadius={4}
                  boxShadow={4}
                  fontWeight="fontWeightBold" color="white">
                  DEV 
                </Box>
                <Box width={1/3} 
                  display="flex" 
                  // alignItems="flex-end" 
                  justifyContent="center" 
                  bgcolor="palevioletred" my={1} p={1} mx="auto"
                  borderRadius={4} 
                  boxShadow={4}
                  fontWeight="fontWeightBold" color="white">
                  ARCHI 
                </Box>
                <Box width={1/3} 
                  display="flex" 
                  // alignItems="center" 
                  justifyContent="center" 
                  bgcolor="palevioletred" my={1} p={1} mx="auto"
                  borderRadius={4}
                  boxShadow={4}
                  fontWeight="fontWeightBold" color="white">
                  DOSTARS 
                </Box>
              </Box>
            </Col>
            <Col md={{ span: 6 }}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={prefab1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={prefab2}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={prefab3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
