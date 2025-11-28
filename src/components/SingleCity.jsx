import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import { Container, Row, Form, Button, Col, Card, Alert} from "react-bootstrap" 
import { useState, useEffect} from 'react';

const SingleCity = (props) => {
      const navigate = useNavigate();
      const [temp, setTemp] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null);


const fetchWeather = () => {
        setLoading(true);
        setError(null); // Resetta l'errore ad ogni nuova chiamata
        setTemp(null); // Resetta i dati precedenti

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
        setError(err.message);
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
    <Col xs={12}>
        {/* 1. MOSTRA CARICAMENTO */}
        {loading && (
            <div className="text-center">
                <Spinner animation="border" variant="success" />
                <p>Caricamento dati per {props.city}...</p>
            </div>
        )}
         {error && (
          <Alert variant="danger" className="text-center">
            Errore durante il recupero dei dati, {error}
          </Alert>
        )}

        {/* Se NON è in caricamento E temp esiste E temp.list esiste e non è vuoto */}
        {!loading && temp && temp.list && temp.list.length > 0 && (
            <Col xs={6} md={4} lg={3} className="mx-auto mt-4" > 
                <Card>
                   <Card.Body>
                       <Card.Title>{props.city}</Card.Title>
                       <Card.Text>
                             {/* QUI NON CI SARÀ PIÙ L'ERRORE */}
                             Temperatura: {temp.list[0].main.temp} °C 
                            <br />
                            Descrizione: {temp.list[0].weather[0].description}
                       </Card.Text>
                        <Button
                          className='mt-auto'
                            variant="primary"
                             onClick={() => navigate(`/details/${props.city}`)}
                          >
                            Vai ai dettagli
                          </Button>
                    </Card.Body> 
                </Card>
            </Col>
        )}
    </Col>
            </>

);

}

export default SingleCity;