import styled from "styled-components";

const Container_conclusion = styled.div`
    background-image: url(assets/images/background.png);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1399px 800px;

    color: #e1e1e1;

    padding-bottom: 3em;



    .f1-message {
        display: flex;
        flex-direction: column;

        text-align: center;
    }



    .message {
        color: #e1e1e1;
        font-size: 30px;
        font-family: Share-Tech;
    }



    .Tickets {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }



    .menu_button button {
        color: #767676;
        background: radial-gradient(circle, #f4f4f4 0%, #c1c1c1 100%);
        font-family: Roboto-Bold;
        font-size:24px;

        text-align: center;
        text-decoration: none;

        position: relative; 
        cursor: pointer;     

        border: none;
        border-radius: 3em;

        width: 4.8em;
        height: 4.8em;
        &:hover {
            transform: scale(1.2);;
        }

        right: -50em;
    }
`

export {Container_conclusion}