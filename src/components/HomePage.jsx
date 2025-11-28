import MyNavBar from "./MyNavBar"
import { Row } from "react-bootstrap"
import SearchBar from "./SearchBar"
import Footer from "./Footer"
import WelcomeButton from "./WelcomeButton"
import CityCard from "./CityCard"
import { useState } from "react"
import SingleCity from "./SingleCity"

function HomePage() {
 const [activeCity, setActiveCity] = useState(null);

  // 2. HANDLER: Questa funzione viene passata a SearchBar e WelcomeButton
  const handleCityChange = (city) => {
    setActiveCity(city);
  };
  
  // Condizione per mostrare le card predefinite
  const showDefaultCards = !activeCity;
  return (
    <>
    <MyNavBar illuminaLink="Home"></MyNavBar>    
    <WelcomeButton></WelcomeButton>
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
            <CityCard city="Roma" />
            <CityCard city="Milano" />
            <CityCard city="Napoli" />
            <CityCard city="Torino" />
          </>
        )}
    </Row>
            <Footer></Footer>
            </>
  )
}

export default HomePage