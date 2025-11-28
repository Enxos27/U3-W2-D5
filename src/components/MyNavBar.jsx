import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/LogoRounded.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



function MyNavBar() {
    const navigate = useNavigate()
     const location = useLocation()
  return ( 
   <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home"> <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top rounded-circle"
              alt="Meteo logo"
                onClick={() => navigate(`/`)}
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/"
             className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }>Home</Link>
            <Link to="/capoluoghi"
          className={
                location.pathname === '/capoluoghi' ? 'nav-link active' : 'nav-link'
              }>Capoluoghi</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;