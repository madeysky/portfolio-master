import "./portfolio.css";
// obrazy
import fdm from "../../obrazy/fdm.png";
import p85 from "../../obrazy/p85.png";
// ikony
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// popup
import { PopupboxManager, PopupboxContainer } from "react-popupbox";



export default function Portfolio() {


  //Fdm
  const openPopupboxFdm = () => {
    const content = (
      <>
        <img src={fdm} alt="Fizjoterpia Dominika Madej" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, totam?</p>
        <b>GitHub:</b> <a className="hyperlink" onClick={() => window.open("https://madeysky.github.io/Strona-Dominiki/")}>https://madeysky.github.io/Strona-Dominiki/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigFdm = {

  }

  return (
    <div id="portfolio" className="portfolioWrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="imageBoxWrapper row justify-content-center">
          <div className="portfolioImageBox" onClick={openPopupboxFdm}>
            <img className="portfolioImage" src={fdm} alt="Fizjoterpia Dominika Madej" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolioIcon" icon={faSearchPlus} />
          </div>

          <div className="portfolioImageBox">
            <img className="portfolioImage" src={p85} alt="Projekt 85" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolioIcon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigFdm}/>

      
    </div>

  )
}