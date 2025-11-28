import { Container, Row } from "react-bootstrap" 
function Footer() { 
    return (
          <footer className="fixed-bottom bg-dark">
              <Container fluid>
               <Row className="text-white ">
                 <p className="text-center"> Tutti i diritti sono riservati <small>&copy; 2024</small></p>
               </Row>
            </Container>
          </footer>
    );
}
export default Footer;