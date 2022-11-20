import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './DCPCR/Home';
import FindService from './DCPCR/FindService';
import DisabilityInfo from './DCPCR/DisabilityInfo';
import EssentialDocs from './DCPCR/EssentialDocs';
import Resources from './DCPCR/Resources';
import ScreenReaderAccess from './DCPCR/ScreenReaderAccess';
import Base from './DCPCR/Base'
import TopMenu from './DCPCR/TopMenu'
import ShowResults from './DCPCR/ShowResults';

const Routes=()=>{
    return(
        <BrowserRouter>
            <TopMenu/>
            
        <Base/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/findservice" exact component={FindService}/>
                <Route path="/disabilityinfo" exact component={DisabilityInfo}/>
                <Route path="/essentialdocs" exact component={EssentialDocs} />
                <Route path="/resources" exact component={Resources} />
                <Route path="/screenreaderaccess" exact component={ScreenReaderAccess} />
                <Route path="/showresults" exact component={ShowResults} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;