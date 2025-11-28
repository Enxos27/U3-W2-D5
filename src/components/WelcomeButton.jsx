import { Button, Alert, Row, Col, Container } from 'react-bootstrap';
function WelcomeButton() {

  return (
   <Container fluid className='p-0 mb-4'>
      
      {/* Usiamo bg-info (azzurro chiaro) e un bordo arrotondato e ombra per un look moderno.
        Text-light assicura che il testo sia leggibile su bg-info.
      */}
      <Alert 
        variant="info" 
        className='text-center shadow-sm rounded-3 p-4' // Aggiunge ombra e padding
      >
        {/* Intestazione principale con icona */}
        <Alert.Heading className='display-5 fw-bold mb-3' style={{ color: "#007bff" }}> 
           <i class="bi bi-cloud-sun-fill"></i> EpiMeteo
        </Alert.Heading>
        
        <p className='fs-5 text-dark'> 
            Il <span style={{color:"#881A80"}}>meteo epico</span> a portata di mano. Controlla le previsioni in tempo reale!
        </p>
      </Alert>
    </Container>
  );
}

export default WelcomeButton;