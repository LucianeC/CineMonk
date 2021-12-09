import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    margin-top: 3em;
    margin-left: 10.5em;

    background-color: #AA0A0A;

    width: 13em;
    height: 26em;

    border-radius: 5px 5px 5px 0px;

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
`

export {Container}