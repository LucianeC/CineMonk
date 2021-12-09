import { Container } from './styled'
import CineMonk from '../../components/CineMonk-logo'
import ButtonPayment from '../../components/button-payment'

export default function Index() {
    return (
        <Container>
            <div className="header">
                <CineMonk />

                <div className="description">Selecione a melhor opção de pagamento</div>
            </div>

        
        <div className="container-body">
            <div className="film-poster-box">
                <div className="poster-image"><img src="assets/images/movie-cover-large.png" alt="" /></div>
                <div className="film-title">Harry Potter e a Pedra Filosofal</div>
                <div className="film-language">Legendado e Dublado</div>
                <div className="movie-rating">Classificação: +12</div>
            </div>

            <div className="payment-conclusion-box">
                <div className="payment-box">
                    <div className="seats-box">
                        <div className="seat-text">Lugares</div>

                        <div className="seat-ticket-box1">
                            <div className="seat">A1</div>
                            <div className="select-tickett">
                                <select name="ticket" id="ticket">
                                    <option value="half">Meia</option>
                                    <option value="entire">Inteira</option>
                                </select>
                            </div>
                        </div>

                        <div className="seat-ticket-box">
                            <div className="seat">A2</div>
                            <div className="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="half">Meia</option>
                                    <option value="entire">Inteira</option>
                                </select>
                            </div>
                        </div>

                        <div className="seat-ticket-box">
                            <div className="seat">A3</div>
                            <div className="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="entire">Inteira</option>
                                    <option value="half">Meia</option>
                                </select>
                            </div>
                        </div>

                        <div className="seat-ticket-box">
                            <div className="seat">A4</div>
                            <div className="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="entire">Inteira</option>
                                    <option value="half">Meia</option>
                                </select>
                            </div>
                        </div>

                        <div className="seat-ticket-box">
                            <div className="seat">A5</div>
                            <div className="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="entire">Inteira</option>
                                    <option value="half">Meia</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="line"><img src="assets/images/Line 1.png" alt="" /></div>

                    <div className="order-box">
                        <div className="order-text">Pedido</div>
                        <div className="ticket-box1">
                            <div className="half-ticket">Ingressos Meia:</div>
                            <div className="half-ticket-number">02</div>
                        </div>
                        <div className="ticket-box">
                            <div className="entire-ticket">Ingressos Inteira:</div>
                            <div className="entire-ticket-number">03</div>
                        </div>
                        <div className="total-payment">Total: R$ 100,00</div>
                    </div>
                </div>

                <ButtonPayment />
            </div>
        </div>
        </Container>
    )
}