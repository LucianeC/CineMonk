import {Container_button} from './styled'
import { Link } from 'react-router-dom';

export default function Button(){
    return (
        <Container_button>
            <Link className="button" to="/selection-day" ><button> Comprar ingresso </button></Link>
        </Container_button>
    )
}

