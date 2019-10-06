import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home=lazy(()=>import('./home'));
const LoginPage=lazy(()=>import('./login'));
const Accountcreation=lazy(()=>import('./accountcreation'));
const routing=(
        <Router>
                <Switch>
                    <Suspense fallback={<div></div>}>
                        <Route exact path="/creataccount" component={LoginPage}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/" component={Accountcreation}/>
                    </Suspense>
                </Switch>
        </Router>
        
);
ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
