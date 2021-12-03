import styled from "styled-components";

const Container_ticket = styled.div`
    

    background-image: url(../../../assets/images/background.png);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 1359px 800px;


    .ticket_information_basic {
        display: flex;
        flex-direction: row;

        padding-bottom: 0.5em;
    }


    .armchair .ticket_type .ticket_identification {
        color: #960404;
        font-size: 18px;
        font-family: Share-Tech;

        text-transform: uppercase;
    }


    .date_time {
        display: flex;
        flex-direction: row;

        padding-bottom: 0.8em;
    }


    .date .time {
        color: #373737;
        font-size: 12px;
        font-family: Share-Tech;
    }


    .movie_name {
        color: #000000;
        font-size: 20px;
        font-family: Share-Tech;

        padding-bottom: 1em;
    }


    .movie_type {
        display: flex;
        flex-direction: row;
    }

    
    .language .room_movie  .timetable_movie {
        color: #960404;
        font-size: 18px;
        font-family: Share-Tech;
    }
`

export {Container_ticket}