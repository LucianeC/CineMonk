import styled from "styled-components";

const ContainerSeat = styled.div`
    background-image: url('/assets/images/background.png');
    background-repeat: no-repeat;
    border: none;
    

.header{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 3em;
    
    }
.title-seat{
    font-size: 38px;
    font-family: Share-Tech ;
    color:rgba(225, 225, 225, 1);
    margin-left: 6em;
}

.contents{
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    justify-content:  flex-end;
        
    }  

.box-seats{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 9em;
    align-items: center;
    
    }

.containerButton{
    display: flex;
    

    margin-top: 25em;
    padding-left: 1em;
    }
`
export{ContainerSeat}