import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './DCPCR/Home';
import FindService from './DCPCR/Home';
import DisabilityInfo from './DCPCR/Home';
import EssentialDocs from './DCPCR/Home';
import Resources from './DCPCR/Home';

const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/findtheservice" exact component={FindService}/>
                <Route path="/disabilityinfo" exact component={DisabilityInfo}/>
                <Route path="/essentialdocs" exact component={EssentialDocs} />
                <Route path="/resources" exact component={Resources}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;