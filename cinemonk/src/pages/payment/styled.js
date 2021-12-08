import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-image: url(assets/images/background.png);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1366px 700px;

    padding-bottom: 5.09em;

.header {
    display: flex;
    align-items: center;

    margin-top: 1em;
}

.logo-title {
    display: flex;
    align-items: center;

    margin-left: 3em;
}

.logo img {
    width: 60px;
    height: 60px;
}

.title {
    margin-left: 0.3em;
    
    font-size: 50px;
    font-family: Seoul-Hangang;

    color: rgba(240, 161, 36, 1);
}

.description {
    margin-left: 4em;
    
    font-size: 40px;
    font-family: Share-Tech;
    
    color: #E1E1E1;
    justify-content: center;
}

.container-body {
    display: flex;
}

.film-poster-box {
    display: flex;
    flex-direction: column;

    align-items: center;

    margin-top: 3em;
    margin-left: 10.5em;

    background-color: #AA0A0A;

    width: 13em;
    height: 26em;

    border-radius: 5px 5px 5px 0px;
}

.poster-image {
    margin-top: 0.2em;
}

.poster-image img {
    width: 200px;
    height: 300px;
}

.film-title {
    margin-top: 0.3em;
    margin-left: 1em;
    
    font-size: 19px;
    font-family: Share-Tech;
    color: #FFCA76;
}

.film-language {
    margin-top: 0.3em;
    
    font-size: 16px;
    font-family: Share-Tech;
    color: #FFF;
}

.movie-rating {
    margin-top: 0.2em;
    
    font-size: 16px;
    font-family: Share-Tech;
    color: #FFF;
}

.payment-conclusion-box {
    display: flex;
    flex-direction: column;
}

.payment-box {
    display: flex;
    justify-content: space-around;

    margin-top: 5em;
    margin-left: 10.5em;
    
    background-color: #AA0A0A;

    border-radius: 5px;

    width: 40em;
    height: 15em;

    opacity: 0.9;
}

.seats-box {
    margin-left: 1em;
}

.seat-text {
    margin-top: 0.7em;
    margin-left: 1em;
    
    font-size: 25px;
    font-family: Spartan;
    color:#FFB540;
}

.seat-ticket-box1 {
    display: flex;

    margin-top: 1.5em;
    margin-bottom: 0.3em;
}

.seat-ticket-box {
    display: flex;

    margin-bottom: 0.3em;
}

.seat {
    margin-top: 0.3em;
    
    font-size: 16px;
    font-family: Spartan;
    color:#FFF;
}

.order-text {
    margin-top: 0.7em;
    margin-left: 1em;
    
    font-size: 25px;
    font-family: Spartan;
    color:#FFB540;
}

.select-tickett select {
    margin-left: 1.3em;

    border-radius: 25px;

    width: 7em;

    font-size: 15px;
    font-family: Roboto-Regular;
    color:#4F4F4F;

    border: 1px solid black;
}

.select-ticket select {
    margin-left: 1em;
    
    border-radius: 25px;

    width: 7em;

    font-size: 15px;
    font-family: Roboto-Regular;
    color:#4F4F4F;

    border: 1px solid black;
}

option {
    font-size: 15px;
    font-family: Roboto-Regular;
    color:#4F4F4F;
}

.line {
    margin-top: 1.2em;
}

.line img {
    width: 0.5px;
    height: 200px;
}

.ticket-box1 {
    display: flex;

    margin-top: 1.5em;
}

.ticket-box {
    display: flex;
}

.half-ticket {
    margin-left: -1.2em;
    
    font-size: 16px;
    font-family: Spartan;
    color:#FFF;
}

.entire-ticket {
    margin-top: 0.5em;
    margin-left: -2.1em;
    
    font-size: 16px;
    font-family: Spartan;
    color:#FFF;
}

.half-ticket-number {
    margin-left: 1.4em;
    
    font-size: 16px;
    font-family: Spartan;
    color:#FFF;
}

.entire-ticket-number {
    margin-top: 0.5em;
    margin-left: 1.4em;
    
    font-size: 16px;
    font-family: Spartan;
    color:#FFF;
}

.total-payment {
    margin-top: 4.3em;
    margin-left: -1.3em;
    
    font-size: 19px;
    font-family: Spartan;
    color:#FFF;
}

Button {
    margin-top: 1em;
    margin-left: 29em;
}
`

export { Container }