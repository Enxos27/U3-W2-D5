import { useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Form, Button, Col, Card, Spinner } from "react-bootstrap" 
import { useState, useEffect} from 'react';
import MyNavBar from './MyNavBar';
import Footer from './Footer';

const CityDetails = () => {
      const navigate = useNavigate()
      const params = useParams()
    const [temp, setTemp] = useState(null)
     const [loading, setLoading] = useState(true)


     const fetchComments = () => {
     const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${params.city},IT&appid=02f3fa7eaf8fb595bdab064aa9ae370a&units=metric&lang=it`;
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
    fetchComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

        return (<>
        {loading ? (
            <div className="text-start">
              <Spinner animation="border" variant="success" />
            </div>
          ) : (<>
          <MyNavBar></MyNavBar>

<Row className="justify-content-center mt-4">
         <Col xs={6} md={4} lg={5} key={params.city}  >
          <Card className='shadow-lg border-primary'>
             <Card.Body>
             <Card.Header className='bg-primary text-white text-center py-2 mb-2'>
                                <Card.Title className='mb-0 fs-3'>
                                    <i className="bi bi-geo-alt-fill me-2"></i> {params.city}
                                </Card.Title>
                            </Card.Header>
                 <Card.Text className='text-center'> 
                                 <span className='fw-bold '> Previsioni:</span> {new Date(temp.list[0].dt * 1000).toLocaleDateString()} { new Date(temp.list[0].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </Card.Text>
               <hr/>
               <Card.Text className='text-center'>
                        <span className='fw-bold text-center'><i class="bi bi-thermometer-half"></i> Temperatura:</span> {temp.list[0].main.temp} °C 
                        <br />
                        </Card.Text>
                        <Card.Text className='text-center'>
                            <Row className='justify-content-between'>
                            <Col> <span className='fw-bold'><i class="bi bi-thermometer-high"></i>Max</span> {temp.list[0].main.temp_max} °C </Col>
                            <Col> <span className='fw-bold text-end'><i class="bi bi-thermometer-low"></i>Min</span> {temp.list[0].main.temp_min} °C </Col>
                        </Row>
                        </Card.Text>
                       
                        <Card.Text> 
                            <span className='fw-bold'> <i class="bi bi-cloud"></i> Meteo:</span> {temp.list[0].weather[0].description} 
                            </Card.Text>
                            <Card.Text>
                                <span className='fw-bold'> <i class="bi bi-droplet"></i> Umidità:</span> {temp.list[0].main.humidity} %
                            </Card.Text>
                         <Card.Text>
                               <span className='fw-bold'> <i class="bi bi-wind"></i> Vento:</span> {temp.list[0].wind.speed} m/s
                         </Card.Text>
                         <Card.Text>
                             <span className='fw-bold'><i class="bi bi-arrow-down"></i><i class="bi bi-arrow-down"></i> Pressione:</span> {temp.list[0].main.pressure} hPa
                            </Card.Text>
                      <Container className='text-center'>
                        <Button
                  className='mt-auto text-center'
                    variant="primary"
                    onClick={
                      // riporto l'utente nella pagina menu
                      () => navigate(`/`)
                    }
                  >
                    Vai alla Home
                  </Button>
                      </Container>
                
            </Card.Body> 
            </Card>
          </Col>
          </Row>
          <Footer />
          </>
            )}
          </>)

}

export default CityDetails;