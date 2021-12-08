import {Container_box_date_little} from './styled'
import { Link } from 'react-router-dom';

export default function Box_date_little(){
    return (
        <Link className="button" to="/selection-film" style={{ textDecoration: 'none', color: 'trasnparent' }}>
            <Container_box_date_little>
                <div className="week"> Sábado </div>
                <div className="day"> 05 </div>
                <div className="month"> maio </div>
           </Container_box_date_little>
        </Link>
    )
}
