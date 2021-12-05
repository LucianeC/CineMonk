import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #AA0A0A;
    max-width: 140px;

    .titulo{
        color: #FFCA76;
        font: 16px Share-Tech;

    }

    .descricao{
        color: #ffffff;
        font: 12px Share-Tech;
    }

    .classificacao{
        color: #ffffff;
        font: 12px Share-Tech;
    }

    .conteudo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 110px;
    }

`

export {Container}