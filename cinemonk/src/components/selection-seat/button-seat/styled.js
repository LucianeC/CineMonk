import styled from "styled-components";

const ButtonSeat = styled.div`

button{
        
        color: #767676;
        background: radial-gradient(circle, #f4f4f4 0%, #c1c1c1 100%);
        font-family: Roboto;
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
}
`
export {ButtonSeat}