import { Container_conclusion } from "./styled";
import Logo from "../../components/conclusion/CineMonk-logo-2/index";
import Ticket from "../../components/conclusion/ticket_sucess/index";

export default function Conclusion() {
    return (
        <Container_conclusion>


            <Logo/>


            <div className="f1-message"> 
                <div className="message"> Parabéns! Sua compra foi realizada com sucesso.</div>
                <div className="message"> Agora é só aproveitar o filme :) </div> 
            </div>

            
            <div className="Tickets"> 
                <Ticket/>

                <Ticket/>

                <Ticket/>

                <Ticket/>

                <Ticket/>
            </div>


            <div className="menu_button"><button> Menu </button></div>


        </Container_conclusion>
    )
}