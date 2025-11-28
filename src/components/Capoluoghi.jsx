import MyNavBar from "./MyNavBar";
import WelcomeButton from "./WelcomeButton";
import { Row } from "react-bootstrap";
import CityCard from "./CityCard";
import Footer from "./Footer";

const Capitali = () => {
    return (
        <>
        <MyNavBar/>
        <WelcomeButton></WelcomeButton>
        <h3 className="text-center my-4"> Capoluoghi Italiane </h3>
         <Row>
            <CityCard city="Torino" />
            <CityCard city="Aosta" />
            <CityCard city="Milano" />
            <CityCard city="Trento" />
            <CityCard city="Venezia" />
            <CityCard city="Trieste" />
            <CityCard city="Genova" />
            <CityCard city="Bologna" />
            <CityCard city="Firenze" />
            <CityCard city="Perugia" />
            <CityCard city="Ancona" />
            <CityCard city="Roma" />
            <CityCard city="L'Aquila" />
            <CityCard city="Campobasso" />
            <CityCard city="Napoli" />
            <CityCard city="Bari" />
            <CityCard city="Potenza" />
            <CityCard city="Catanzaro" />
            <CityCard city="Palermo" />
            <CityCard city="Cagliari" />
         </Row>
         <div className="mb-5 pb-5"></div>
        <Footer></Footer>
        </>
    );
};

export default Capitali;
