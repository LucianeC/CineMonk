import { Container } from './styled';
import Cinemonk from '../../components/CineMonk-logo';
import Film from '../../components/selection-hours/film';
import Schedules from '../../components/selection-hours/schedules';

export default function SelectionHours() {
    return (
        <Container>
            <div className="cabecalho">
                <Cinemonk />
                <div className="Titulo-pagina">Selecione o horário e o idioma</div>
            </div>
            <div className="conteudo">
                <div className="filme">
                    <Film
                        img="/assets/images/movie-cover.png"
                        title="Harry Potter e a pedra filosofal"
                        description="Legendado e dublado"
                        classification="Classificação +12"
                    />
                </div>
                <div className="horarios">
                    <Schedules />
                </div>
            </div>
            
        </Container>
    )
}