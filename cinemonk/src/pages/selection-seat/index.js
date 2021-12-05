import { ContainerSeat } from "./styled.js";
import Logo from "../../components/CineMonk-logo/index" 
import BoxSeats from "../../components/selection-seat/box-seats/index.js";
import Button from "../../components/selection-seat/button-seat/index"


export default function Seats(){
    return (
        <ContainerSeat>
            <div className = "header">
                <Logo></Logo>
                <div className = "title-seat"> Selecione os melhores lugares </div>
            </div>
            <div className= "contents">
                <div className= "box-seats">
                    <BoxSeats></BoxSeats>
                </div>
                <div className= "containerButton">
                    <Button></Button>
                </div>
                
            </div>
            
        </ContainerSeat>
    )
}