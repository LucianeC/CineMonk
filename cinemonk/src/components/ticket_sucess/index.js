import { Container_ticket} from "./styled";

export default function CineMonk(){
    return (
        <Container_ticket>

            <div className="ticket_information_basic">
                <div className="armchair"> A1 </div>
                <div className="ticket_type"> meia </div>
                <div className="ticket_identification"> #864825684 </div>
            </div>

            <div className="date_time">
                <div className="date"> 04/06/2021 </div>
                <div className="time"> 17:02 </div>
            </div>

            <div className="movie_name"> Harry Potter e a Pedra Filosofal </div>

            <div className="movie_type">
                <div className="language"> Dublado </div>
                <div className="room_movie"> Sala 08 </div>
                <div className="timetabl_movie"> 13:00h </div>
            </div>

        </Container_ticket>
    )
}

