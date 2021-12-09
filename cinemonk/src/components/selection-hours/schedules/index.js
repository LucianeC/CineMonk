import { Container } from "./styled"

export default function Schedules(props) {
    return (
        <Container>
            <div className="theater"> {props.film_theater} </div>
            <div className="hour"> {props.film_hour} </div>
            <div className="language"> {props.film_language} </div>
        </Container>
    )
} 