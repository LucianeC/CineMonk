import { BoxSeats } from "./styled"

export default function boxSeats(){
    return(
        <BoxSeats>
            <div className="container-box">
                <div className="H-G-F">
                    <div className="H">
                        <div className= "lyrics"> H </div>
                        <div className="P1H"> <img className="seat" src="/assets/images/armchair-blue.png" alt=""/></div>
                        <div className="P2H"> <img className="seat" src="/assets/images/armchair-blue.png" alt=""/></div>
                        <div className="P3H"> <img className="seat" src="/assets/images/armchair-blue.png" alt=""/></div>
                    </div>
                    <div className="G">
                        <div className= "lyrics"> G </div>
                        <div className="P1G"></div>
                        <div className="P2G"></div>
                        <div className="P3G"></div>
                    </div>
                    <div className="F">
                        <div className= "lyrics"> F </div>
                        <div className="P1F"></div>
                        <div className="P2F"></div>
                        <div className="P3F"></div>
                    </div>
                </div>
                <div className="E-D-C-B">
                    <div className="E">
                        <div className= "lyrics"> E </div>
                        <div className="P1E"></div>
                        <div className="P2E"></div>
                        <div className="P3E"></div>
                    </div>
                    <div className="D">
                        <div className= "lyrics"> D </div>
                        <div className="P1D"></div>
                        <div className="P2D"></div>
                        <div className="P3D"></div>
                    </div>
                    <div className="C">
                        <div className= "lyrics"> C </div>
                        <div className="P1C"></div>
                        <div className="P2C"></div>
                        <div className="P3C"></div>
                    </div>
                    <div className="B">
                        <div className= "lyrics"> B </div>
                        <div className="P1B"></div>
                        <div className="P2B"></div>
                        <div className="P3B"></div>
                    </div>
                </div>
                <div className="A">
                <div className="A">
                    <div className= "lyrics"> A </div>
                        <div className="P1A"></div>
                        <div className="P2A"></div>
                        <div className="P3A"></div>
                </div>
                </div>
            </div>
        </BoxSeats>
    )
}