import { Container_home } from './styled'
import Logo from "../../components/conclusion/CineMonk-logo-2/index";
import Button from "../../components/home/button_red/index";

export default function Home(){
    return (
        <Container_home>

            <Logo/>

            <div className="question"> O que você quer fazer? </div>

            <Button/>

        </Container_home>
    )
}

