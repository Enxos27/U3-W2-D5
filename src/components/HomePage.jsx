import MyNavBar from "./MyNavBar"
import { Row } from "react-bootstrap"
import SearchBar from "./SearchBar"
import Footer from "./Footer"
import WelcomeAlert from "./WelcomeAlert"
import { useState } from "react"
import SingleCity from "./SingleCity"

function HomePage() {
 const [activeCity, setActiveCity] = useState(null);

  // Questa funzione viene passata a SearchBar
  const handleCityChange = (city) => {
    setActiveCity(city);
  };
  
  // Condizione per mostrare le card predefinite
  const showDefaultCards = !activeCity;
  return (
    <>
    <MyNavBar illuminaLink="Home"></MyNavBar>    
    <WelcomeAlert></WelcomeAlert>
    <SearchBar onCitySelect={handleCityChange}></SearchBar>
    <h3 className="text-center my-4"> 
        {/* Mostra un titolo diverso a seconda dello stato */}
        {showDefaultCards 
          ? "Città Italiane con previsioni essenziali." 
          : `Risultato della ricerca per: ${activeCity}`}
      </h3>
    <Row>
        {/* MOSTRA IL RISULTATO CERCATO (Solo se activeCity ha un valore) */}
        {activeCity && (
          // Usiamo SingleCity qui per mostrare il risultato ricercato/cliccato
          <SingleCity city={activeCity} /> 
        )}
        
        {/* MOSTRA LE CARD PREDEFINITE (Solo se non c'è una città attiva) */}
        {showDefaultCards  && (
          <>
            <SingleCity city="Roma" />
            <SingleCity city="Milano" />
            <SingleCity city="Napoli" />
            <SingleCity city="Torino" />
            <div className="mb-5 pb-5"></div>
          </>
        )}
    </Row>
            <Footer></Footer>
            </>
  )
}

export default HomePage