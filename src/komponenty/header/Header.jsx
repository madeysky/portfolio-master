import "./header.css";
import Typed from "react-typed"


export default function Header() {
  return (
    <div className="headerWrapper">
        <div className="mainInfo">
            <h1>Tworzenie Stron Internetowych</h1>
            <Typed className="typedText"
            strings={["Projektowanie Stron Internetowych", "Tworzenie Stron Internetowych", "Prowadzenie Mediów Społecznościowych"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btnMainOffer">Kontakt</a>
        </div>
    </div>
  )
}