import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { Container, Row, Form, Button, Col, Card } from "react-bootstrap" 
import { useState, useEffect} from 'react';

const CityCard = (props) => {
    const navigate = useNavigate();
    const [temp, setTemp] = useState(null)
      const [loading, setLoading] = useState(true)
const fetchWeather = () => {
     const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},IT&appid=02f3fa7eaf8fb595bdab064aa9ae370a&units=metric&lang=it`;
    fetch(URL)
      .then((response) => { 
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è ok: ' + response.status)
        }
      })
      .then((arrayOfTemperature) => {
        console.log("aaa", arrayOfTemperature)
        setTemp(arrayOfTemperature);
        setLoading(false)
      })
      .catch((err) => {
        console.log('Errore nella chiamata', err)
        setLoading(false)
      })
  } 
 useEffect(() => {
        if (!props.city) {
             // Se la città non è definita, non fare nulla e ferma il caricamento
             setLoading(false);
             return; 
        }
        
        fetchWeather();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.city])
        return (
            <>
    
        {/* 1. MOSTRA CARICAMENTO */}
        {loading && (
            <div className="text-center">
                <Spinner animation="border" variant="success" />
                <p>Caricamento dati per {props.city}...</p>
            </div>
        )}

        {/* 2. MOSTRA ERRORE */}
        {!loading && !temp && (
            <p className="text-center text-danger mt-4">
                ⚠️ Errore: Dati meteo non disponibili per **{props.city}** (città non trovata o problema di rete).
            </p>
        )}

        {/* Se NON è in caricamento E temp esiste E temp.list esiste e non è vuoto */}
        {!loading && temp && temp.list && temp.list.length > 0 && (
            <Col xs={6} md={4} lg={3} className="mx-auto mt-4" > 
                <Card>
                   <Card.Body>
                       <Card.Title className='text-center fs-3'><i className="bi bi-geo-alt-fill me-2"></i> {props.city}</Card.Title>
                       <hr/>
                       <Card.Text>
                             {/* QUI NON CI SARÀ PIÙ L'ERRORE */}
                             <span className='fw-bold text-center'><i class="bi bi-thermometer-half"></i>Temperatura:</span> {temp.list[0].main.temp} °C 
                            <br />
                            <span className='fw-bold text-center'><i class="bi bi-cloud"></i> Meteo:</span> {temp.list[0].weather[0].description}
                       </Card.Text>
                         <Container className='text-end'>
                            <Button
                          className='mt-auto'
                            variant="primary"
                             onClick={() => navigate(`/details/${props.city}`)}
                          >
                            Vai ai dettagli
                          </Button>
                         </Container>
                        
                    </Card.Body> 
                </Card>
            </Col>
        )}
            </>

);

}

export default CityCard;