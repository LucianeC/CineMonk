import {Container_box_date_great} from './styled'
import { Link } from 'react-router-dom';

export default function Box_date_great(){
    return (
        <Link className="button" to="/selection-film" style={{ textDecoration: 'none', color: 'trasnparent' }}>
            <Container_box_date_great>
                <div className="week"> Hoje </div>
                <div className="day"> 04 </div>
                <div className="month"> maio </div>
           </Container_box_date_great>
        </Link>
    )
}
