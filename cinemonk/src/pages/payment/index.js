import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="header">
            <div class="logo-title">
                <div class="logo"><img src="assets/images/ticket-logo.png" alt="" /></div>
                <div class="title">CineMonk</div>
            </div>

            <div class="description">Selecione a melhor opção de pagamento</div>
        </div>

        
        <div class="container-body">
            <div class="film-poster-box">
                <div class="poster-image"><img src="assets/images/movie-cover-large.png" alt="" /></div>
                <div class="film-title">Harry Potter e a Pedra Filosofal</div>
                <div class="film-language">Legendado</div>
                <div class="movie-rating">Classificação: +12</div>
            </div>

            <div class="payment-conclusion-box">
                <div class="payment-box">
                    <div class="seats-box">
                        <div class="seat-text">Lugares</div>

                        <div class="seat-ticket-box1">
                            <div class="seat">A1</div>
                            <div class="select-tickett">
                                <select name="ticket" id="ticket">
                                    <option value="half">Meia</option>
                                    <option value="entire">Inteira</option>
                                </select>
                            </div>
                        </div>

                        <div class="seat-ticket-box">
                            <div class="seat">A2</div>
                            <div class="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="half">Meia</option>
                                    <option value="entire">Inteira</option>
                                </select>
                            </div>
                        </div>

                        <div class="seat-ticket-box">
                            <div class="seat">A3</div>
                            <div class="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="entire">Inteira</option>
                                    <option value="half">Meia</option>
                                </select>
                            </div>
                        </div>

                        <div class="seat-ticket-box">
                            <div class="seat">A4</div>
                            <div class="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="entire">Inteira</option>
                                    <option value="half">Meia</option>
                                </select>
                            </div>
                        </div>

                        <div class="seat-ticket-box">
                            <div class="seat">A5</div>
                            <div class="select-ticket">
                                <select name="ticket" id="ticket">
                                    <option value="entire">Inteira</option>
                                    <option value="half">Meia</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="line"><img src="assets/images/line.svg" alt="" /></div>

                    <div class="order-box">
                        <div class="order-text">Pedido</div>
                        <div class="ticket-box">
                            <div class="half-ticket">Ingressos Meia:</div>
                            <div class="half-ticket-number">02</div>
                        </div>
                        <div class="ticket-box">
                            <div class="entire-ticket">Ingressos Inteira:</div>
                            <div class="entire-ticket-number">03</div>
                        </div>
                        <div class="total-payment">Total: R$ 100,00</div>
                    </div>
                </div>

                <div class="conclusion-button"><button>Concluir</button></div>
            </div>
        </div>
        </Container>
    )
}