import {ButtonSeat} from './styled';
import { Link } from 'react-router-dom';


export default function buttonSeat(){
    return(
        <ButtonSeat>
             <Link className= "button-seat" to="/payment" > <button> Próximo </button> </Link>
        </ButtonSeat>
    )

}