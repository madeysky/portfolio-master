import "./kontakt.css";
import emailjs from '@emailjs/browser';



export default function Kontakt() {
    
    export const ContactUs = () => {
        const form = useRef();
        
        const serviceID = "service_ID";
        const templateID = "template_ID";
        const publicKEY = "-wXjPCK2RxA7r9tBx";


        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };  
            
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Kontakt</h1>
                <p>Wypełnij Formularz. Przybliż swoje wymagania. Skontaktuję się z Toba najszybciej jak to będzie możliwe.</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name Input */}
                        <input
                        type="text"
                        className="formControl"
                        placeholder="Imię"
                        name="name"
                        />
                        <div className="line"></div>
                        {/* Phone Input */}
                        <input
                        type="text"
                        className="formControl"
                        placeholder="Numer Telefonu"
                        name="phone"
                        />
                        {/* Email Input */}
                        <input
                        type="email"
                        className="formControl"
                        placeholder="Email"
                        name="email"
                        />
                        {/* Temat Input */}
                        <input
                        type="text"
                        className="formControl"
                        placeholder="Temat"
                        name="temat"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Opis */}
                        <textarea
                        type="text"
                        className="formControl"
                        placeholder="Przybliż swoje wymagania..."
                        name="email">
                        </textarea>
                        <button className="btnMainOffer contactBTN" type="submit">Wyślij</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}