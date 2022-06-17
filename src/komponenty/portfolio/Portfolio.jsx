import "./portfolio.css";

import fdm from "../../obrazy/fdm.png";
import p85 from "../../obrazy/p85.png";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {


    return (
        <div id="portfolio" className="portfolioWrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="imageBoxWrapper">

                    <Card className="portfolioCard">
                        <Card.Img className="portfolioImg" variant="top" src={fdm} />
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle">"Fizjoterpia Dominika Madej"</Card.Title>
                            <Card.Text className="cardText">
                                Wizytówka indywidulanej praktyki fizjoterapeutycznej.
                            </Card.Text>
                            <Button className="btnMainOffer portfolioBTN" variant="primary">Odwiedź Stronę</Button>
                        </Card.Body>
                    </Card>
                    <Card className="portfolioCard">
                        <Card.Img className="portfolioImg" variant="top" src={p85} />
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle" >"Projekt 85"</Card.Title>
                            <Card.Text className="cardText">
                                Blog osobisty o tematyce sportowej i stylu życia.
                            </Card.Text>
                            <Button className="btnMainOffer portfolioBTN" variant="primary">Odwiedź Stronę</Button>
                        </Card.Body>
                    </Card>


                    {/* <div className="portfolioImageBox">
                        <img className="portfolioImage" src={fdm} alt="Fizjoterpia Dominika Madej" />
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolioImageBox">
                        <img className="portfolioImage" src={p85} alt="Projekt 85" />
                        <div className="overflow"></div>
                    </div> */}
                </div>
            </div>


            );




        </div>

    )
}