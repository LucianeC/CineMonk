import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Conclusion from './pages/conclusion';
import Seat from './pages/selection-seat';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/conclusion" exact={true} component={Conclusion} />
                <Route path="/selction-seat" exact={true} component= {Seat} />
            </Routes>
        </BrowserRouter>
    )
}   