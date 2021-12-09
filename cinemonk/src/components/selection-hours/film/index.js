import { Container } from './styled'

export default function Film(props) {
    return (
        <Container>
            <div className="poster-image"> <img src={props.img} alt="" /></div>
            <div className="film-title"> {props.title} </div>
            <div className="film-language"> {props.language} </div>
            <div className="movie-rating"> {props.classification} </div>
        </Container>
    )
}