import { Container, Row, Form, Button } from "react-bootstrap"; 
import { useState } from 'react';


// Riceve la prop onCitySearch dalla HomePage
const SearchBar = ({ onCitySelect }) => { 
  const [searchInput, setSearchInput] = useState(''); // Stato per l'input in tempo reale
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce il ricaricamento della pagina
    
    if (searchInput.trim()) {
      // Chiama la funzione passata dalla HomePage
      onCitySelect(searchInput.trim()); 
      setSearchInput(''); // Opzionale: pulisce l'input
    }
  };
 
  return (
    <Container >
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center mb-3">
                    <Form.Group controlId="formCitySearch" className='d-flex align-items-end'>
                        <div style={{ flexGrow: 1 }}>
                            <Form.Label>Cerca una città italiana</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Inserisci il nome della città italiana"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </div>
                        <Button variant="primary" type="submit" className="ms-2">
                            Cerca
                        </Button>
                    </Form.Group>
            </Row>
        </Form>
    </Container>
  );
} 

export default SearchBar;