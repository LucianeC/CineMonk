import { BrowserRounter, Switch, Route } from "react-router-dom";
import Conclusion from './pages/conclusion';
import Seat from '.pages/selection-seat';


export default function Routes() {
    return (
        <BrowserRounter>
            <Switch>
                <Route path="/conclusion" exact={true} component={Conclusion} />
                <Route path="/selction-seat" exact={true} component= {Seat} />
            </Switch>
        </BrowserRounter>
    )
}