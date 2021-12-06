import {Container_selection_day} from './styled'
import Logo from "../../components/CineMonk-logo/index";
import Box_date_great from "../../components/selection-day/box_date_great/index";
import Box_date_little from "../../components/selection-day/box_date_little/index";

export default function Selection_day(){
    return (
        <Container_selection_day>
            <Logo/>

            <div className="message"> Escolha a data que você deseja comprar o ingresso. </div>

            <div className="box_selection-f2">
                <Box_date_great/>
                
                <div className="box_little"> 
                    <Box_date_little/>
                    <Box_date_little/>
                    <Box_date_little/>
                    <Box_date_little/>
                    <Box_date_little/>
                    <Box_date_little/>
                </div>
            </div>
        </Container_selection_day>
    )
}

