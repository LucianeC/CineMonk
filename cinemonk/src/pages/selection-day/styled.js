import styled from "styled-components";

const Container_selection_day = styled.div`
    background-image: url(assets/images/background.png);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1399px 800px;

    padding-top: 2em;



    .message {
        color: #e1e1e1;
        font-size: 40px;
        font-family: Share-Tech;

        text-align: center;
    }


    .box_selection-f2 {
        display: flex;
        flex-direction: row;

        justify-content: center !important;

        padding-top: 4.25em;
        padding-bottom: 6.6em;
    }


    .box_little {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        width: 700px;
    }
`

export {Container_selection_day}