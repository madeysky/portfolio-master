import "./header.css";
import Typed from "react-typed"


export default function Header() {
  return (
    <div className="headerWrapper">
        <div className="mainInfo">
            <h1>web development and website promotions</h1>
            <Typed className="typedText"
            strings={["Web Design", "Web Development", "Social Media Marketing"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btnMainOffer">Kontakt</a>
        </div>
    </div>
  )
}