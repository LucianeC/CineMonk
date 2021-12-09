import { Container } from './styled'
import CineMonk from '../../components/CineMonk-logo'
import Film from '../../components/selection-hours/film'
import Schedules from '../../components/selection-hours/schedules'

export default function SelectionHours() {
    return (
        <Container>
            <div className="header">
                <CineMonk />

                <div className="description">Selecione o horário e o idioma</div>
            </div>

        
        <div className="container-body">
            <Film
                img="/assets/images/movie-cover-large.png"
                title="Harry Potter e a Pedra Filosofal"
                language="Legendado e Dublado"
                classification="Classificação: +12"
            />

            <div className="hours-box">
                <div className="hours-cima-box">
                    <div className="a">
                        <Schedules
                            film_theater="Sala 08"
                            film_hour="13:00"
                            film_language="Dublado"    
                        />
                    </div>
                        
                    <div className="a">
                        <Schedules
                            film_theater="Sala 09"
                            film_hour="13:15"
                            film_language="Legendado"    
                        />
                    </div>
                        
                    <Schedules
                        film_theater="Sala 10"
                        film_hour="13:30"
                        film_language="Dublado"    
                    />
                </div>
                
                <div className="hours-baixo-box">
                    <div className="a">
                        <Schedules
                            film_theater="Sala 08"
                            film_hour="16:15"
                            film_language="Legendado"    
                        />
                    </div>
                        
                    <div className="a">
                        <Schedules
                            film_theater="Sala 09"
                            film_hour="17:20"
                            film_language="Dublado"    
                        />
                    </div>
                        
                    <Schedules
                        film_theater="Sala 10"
                        film_hour="18:10"
                        film_language="Dublado"    
                    />
                </div>
            </div>
        </div>
        </Container>
    )
}