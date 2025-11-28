import { useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Form, Button, Col, Card, Spinner, Alert } from "react-bootstrap" 
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
            {/* Sezione Card */}
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
                        <span className='fw-bold text-center'><i className="bi bi-thermometer-half"></i> Temperatura:</span> <span style={{whiteSpace: "nowrap"}}> {temp.list[0].main.temp} °C </span>
                        <br />
                        </Card.Text>
                        <div className='text-center'>
                            <Row className='justify-content-between'>
                            <Col className='mb-3'> <span className='fw-bold'><i className="bi bi-thermometer-high"></i>Max</span> {temp.list[0].main.temp_max} °C </Col>
                            <Col className='mb-3'> <span className='fw-bold text-end'><i className="bi bi-thermometer-low"></i>Min</span> {temp.list[0].main.temp_min} °C </Col>
                        </Row>
                        </div>
                       
                        <Card.Text> 
                            <span className='fw-bold'> <i className="bi bi-cloud"></i> Meteo:</span> {temp.list[0].weather[0].description} 
                            </Card.Text>
                            <Card.Text>
                                <span className='fw-bold'> <i className="bi bi-droplet"></i> Umidità:</span> {temp.list[0].main.humidity} %
                            </Card.Text>
                         <Card.Text>
                               <span className='fw-bold'> <i className="bi bi-wind"></i> Vento:</span> {temp.list[0].wind.speed} m/s
                         </Card.Text>
                         <Card.Text>
                             <span className='fw-bold'><i className="bi bi-arrow-down"></i><i className="bi bi-arrow-down"></i> Pressione:</span> {temp.list[0].main.pressure} hPa
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
          {/* Sezione Alert per giorni successivi */}
          <Row className='justify-content-center'>
            <Col xs={6} md={4} lg={3}>
            {/* Primo Alert (giorno dopo) */}
            <Alert variant="light" className="text-center mt-4 shadow ">
              <Alert.Heading><span className='fw-bold '> Previsioni per il:</span> <span style={{whiteSpace: "nowrap"}}>{new Date(temp.list[8].dt * 1000).toLocaleDateString()}</span></Alert.Heading>
               <Card.Text className='text-center'>
                        <span className='fw-bold text-center'><i className="bi bi-thermometer-half"></i> Temperatura:</span> <span style={{whiteSpace: "nowrap"}}> {temp.list[8].main.temp} °C </span>
                        <br />
                        </Card.Text>
                <div className='text-center'>
                            <Row className='justify-content-between'>
                            <Col className='mb-3'> <span className='fw-bold'><i className="bi bi-thermometer-high"></i>Max</span> {temp.list[8].main.temp_max} °C </Col>
                            <Col className='mb-3'> <span className='fw-bold text-end'><i className="bi bi-thermometer-low"></i>Min</span> {temp.list[8].main.temp_min} °C </Col>
                        </Row>
                        </div>
                       
                        <Card.Text> 
                            <span className='fw-bold'> <i className="bi bi-cloud"></i> Meteo:</span> {temp.list[8].weather[0].description} 
                            </Card.Text>
                         <Card.Text>
                               <span className='fw-bold'> <i className="bi bi-wind"></i> Vento:</span> {temp.list[8].wind.speed} m/s
                         </Card.Text>
            </Alert>
            {/* Fine primo alert */}
            </Col>
            <Col xs={6} md={4} lg={3}>
            {/* Inizio secondo alert 2gg dopo */}
            <Alert variant="light" className="text-center mt-4 shadow">
              <Alert.Heading><span className='fw-bold '> Previsioni per il:</span> <span style={{whiteSpace: "nowrap"}}>{new Date(temp.list[16].dt * 1000).toLocaleDateString()}</span></Alert.Heading>
               <Card.Text className='text-center'>
                        <span className='fw-bold text-center'><i className="bi bi-thermometer-half"></i> Temperatura:</span> <span style={{whiteSpace: "nowrap"}}> {temp.list[16].main.temp} °C </span>
                        <br />
                        </Card.Text>
                <div className='text-center'>
                            <Row className='justify-content-between'>
                            <Col className='mb-3'> <span className='fw-bold'><i className="bi bi-thermometer-high"></i>Max</span> {temp.list[16].main.temp_max} °C </Col>
                            <Col className='mb-3'> <span className='fw-bold text-end'><i className="bi bi-thermometer-low"></i>Min</span> {temp.list[16].main.temp_min} °C </Col>
                        </Row>
                        </div>
                       
                        <Card.Text> 
                            <span className='fw-bold'> <i className="bi bi-cloud"></i> Meteo:</span> {temp.list[16].weather[0].description} 
                            </Card.Text>
                         <Card.Text>
                               <span className='fw-bold'> <i className="bi bi-wind"></i> Vento:</span> {temp.list[16].wind.speed} m/s
                         </Card.Text>
            </Alert>
            {/* Fine secondo alert */}
            </Col>
            <Col xs={6} md={4} lg={3}>
            {/* Inizio terzo alert 3gg dopo */}
            <Alert variant="light" className="text-center mt-4 shadow">
              <Alert.Heading><span className='fw-bold '> Previsioni per il:</span> <span style={{whiteSpace: "nowrap"}}>{new Date(temp.list[24].dt * 1000).toLocaleDateString()}</span></Alert.Heading>
               <Card.Text className='text-center'>
                        <span className='fw-bold text-center'><i className="bi bi-thermometer-half"></i> Temperatura:</span> <span style={{whiteSpace: "nowrap"}}> {temp.list[24].main.temp} °C </span>
                        <br />
                        </Card.Text>
                <div className='text-center'>
                            <Row className='justify-content-between'>
                            <Col className='mb-3'> <span className='fw-bold'><i className="bi bi-thermometer-high"></i>Max</span> {temp.list[24].main.temp_max} °C </Col>
                            <Col className='mb-3'> <span className='fw-bold text-end'><i className="bi bi-thermometer-low"></i>Min</span> {temp.list[24].main.temp_min} °C </Col>
                        </Row>
                        </div>
                       
                        <Card.Text> 
                            <span className='fw-bold'> <i className="bi bi-cloud"></i> Meteo:</span> {temp.list[24].weather[0].description} 
                            </Card.Text>
                         <Card.Text>
                               <span className='fw-bold'> <i className="bi bi-wind"></i> Vento:</span> {temp.list[24].wind.speed} m/s
                         </Card.Text>
            </Alert>
            {/* Fine terzo alert */}
            </Col>
            
          </Row>
          <div className="mb-5 pb-5"></div>
          <Footer />
          </>
            )}
          </>)

}

export default CityDetails;