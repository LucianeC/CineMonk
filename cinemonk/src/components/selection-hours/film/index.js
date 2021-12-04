import { Container } from './styled'

export default function Film(props) {
    return (
        <Container>
            <div className="imagem"> <img src={props.img} alt="" /></div>
            
            <div className="conteudo">
            <div className="titulo"> {props.title} </div>
            <div className="descricao"> {props.description} </div>
            <div className="classificacao"> {props.classification} </div>
            </div>
        </Container>
    )
}