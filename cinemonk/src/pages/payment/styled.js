import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-image: url(assets/images/background.png);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1359px 800px;

.header {
    display: flex;
    align-items: center;
}

.logo-title {
    display: flex;
    align-items: center;

    margin-left: 3em;
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
    margin-left: 10em;

    background-color: #AA0A0A;

    width: 11.6em;
    height: 25em;

    border-radius: 5px 5px 5px 0px;
}

.poster-image {
    margin-top: 0.2em;
}

.poster-image img {
    width: 180px;
    height: 300px;
}

.film-title {
    margin-top: 0.3em;
    margin-left: 1em;
    
    font-size: 17px;
    font-family: Share-Tech;
    color: #FFCA76;
}

.film-language {
    margin-top: 0.3em;
    
    font-size: 15px;
    font-family: Share-Tech;
    color: #FFF;
}

.movie-rating {
    margin-top: 0.2em;
    
    font-size: 15px;
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
    margin-left: 12em;
    
    background-color: #AA0A0A;

    border-radius: 5px;

    width: 30em;
    height: 15em;
}

.seats-box {
    margin-left: 1em;
}

.seat-text {
    margin-top: 0.7em;
    
    font-size: 25px;
    font-family: Spartan;
    color:#FFB540;
}

.seat-ticket-box1 {
    display: flex;

    margin-top: 1.5em;
}

.seat-ticket-box {
    display: flex;
}

.seat {
    font-size: 13px;
    font-family: Spartan;
    color:#FFF;
}

.order-text {
    margin-top: 0.7em;
    
    font-size: 25px;
    font-family: Spartan;
    color:#FFB540;
}

.select-tickett select {
    margin-left: 1.3em;

    border-radius: 25px;

    font-size: 15px;
    font-family: Roboto-Regular;
    color:#4F4F4F;
}

.select-ticket select {
    margin-left: 1em;
    
    border-radius: 25px;

    font-size: 15px;
    font-family: Roboto-Regular;
    color:#4F4F4F;
}

option {
    font-size: 15px;
    font-family: Roboto-Regular;
    color:#4F4F4F;
}

.ticket-box {
    display: flex;
}

.half-ticket {
    font-size: 13px;
    font-family: Spartan;
    color:#FFF;
}

.entire-ticket {
    font-size: 13px;
    font-family: Spartan;
    color:#FFF;
}

.half-ticket-number {
    margin-left: 1.4em;
    
    font-size: 13px;
    font-family: Spartan;
    color:#FFF;
}

.entire-ticket-number {
    margin-left: 0.5em;
    
    font-size: 13px;
    font-family: Spartan;
    color:#FFF;
}

.total-payment {
    font-size: 15px;
    font-family: Spartan;
    color:#FFF;
}
`

export { Container }