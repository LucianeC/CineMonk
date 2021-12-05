import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Conclusion from './pages/conclusion';
import Seat from './pages/selection-seat';
import Home from './pages/home';
import Hours from './pages/selection-hours';
import Payment from './pages/payment';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/conclusion" exact={true} element={<Conclusion/>} />
                <Route path="/selection-seat" exact={true} element={<Seat/>} />
                <Route path="/" exact={true} element={<Home/>} />
                <Route path="selection-hours" exact={true} element={<Hours />} />
                <Route path="payment" exact={true} element={<Payment/>} />
            </Routes>
        </BrowserRouter>
    )
}   