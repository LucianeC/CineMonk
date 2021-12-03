import { Containerconclusion } from "./styled";
import Logo from "../../components/CineMonk-logo-2/index";
import Ticket from "../../components/ticket_sucess/index";

export default function Conclusion() {
    return (
        <Containerconclusion>
            <Logo/>

            <div className="f1-message"> 
                <div className="message"> Parabéns! Sua compra foi realizada com sucesso.</div>
                <div className="message"> Agora é só aproveitar o filme :) </div> 
            </div>

            <Ticket/>

            <div className="menu_button"><button> Menu </button></div>

        </Containerconclusion>
    )
}