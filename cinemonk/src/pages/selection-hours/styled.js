import styled from "styled-components";

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

.hours-box {
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-left: 10em;
}

.hours-cima-box {
    display: flex;
}

.a {
    margin-right: 2em;
}

.hours-baixo-box {
    display: flex;

    margin-top: 1em;
}
`

export {Container}