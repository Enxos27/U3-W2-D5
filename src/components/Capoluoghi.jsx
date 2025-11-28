import MyNavBar from "./MyNavBar";
import WelcomeAlert from "./WelcomeAlert";
import { Row } from "react-bootstrap";
import Footer from "./Footer";
import SingleCity from "./SingleCity";

const Capitali = () => {
    return (
        <>
        <MyNavBar/>
        <WelcomeAlert></WelcomeAlert>
        <h3 className="text-center my-4"> Capoluoghi Italiani </h3>
         <Row>
            <SingleCity city="Torino" />
            <SingleCity city="Aosta" />
            <SingleCity city="Milano" />
            <SingleCity city="Trento" />
            <SingleCity city="Venezia" />
            <SingleCity city="Trieste" />
            <SingleCity city="Genova" />
            <SingleCity city="Bologna" />
            <SingleCity city="Firenze" />
            <SingleCity city="Perugia" />
            <SingleCity city="Ancona" />
            <SingleCity city="Roma" />
            <SingleCity city="L'Aquila" />
            <SingleCity city="Campobasso" />
            <SingleCity city="Napoli" />
            <SingleCity city="Bari" />
            <SingleCity city="Potenza" />
            <SingleCity city="Catanzaro" />
            <SingleCity city="Palermo" />
            <SingleCity city="Cagliari" />
         </Row>
         <div className="mb-5 pb-5"></div>
        <Footer></Footer>
        </>
    );
};

export default Capitali;
