import { Container_conclusion} from "./styled";
import Logo from "../../components/CineMonk-logo-2/index";
import Ticket from "../../components/ticket_sucess/index";

export default function conclusion() {
    return (
        <Container_conclusion>
            <Logo/>

            <div className="f1-message"> 
                <div className="message"> Parabéns! Sua compra foi realizada com sucesso.</div>
                <div className="message"> Agora é só aproveitar o filme :) </div> 
            </div>

            <Ticket/>

            <div className="menu_button"><button> Menu </button></div>

        </Container_conclusion>
    )
}