import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavBar(props) {
  return ( 
   <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" style={{color: "#32A852"}}>EpiLibrary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"
            active={props.illuminaLink === 'Home' ? true : false}>Home</Nav.Link>
            <Nav.Link href="#home"
            active={props.illuminaLink === 'About' ? true : false}>About</Nav.Link>
            <Nav.Link href="#link"
            active={props.illuminaLink === 'Browse' ? true : false}>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;