import React from "react";
import {Navigate,Homelink,Login1,Login2,Login3 } from "./styles.js"
import {Link} from "react-router-dom";

export default function Login_navbar(){
    return(
        <Navigate><Link to="/"><Homelink>thinkerlinker<i class="fa fa-lightbulb-o"></i></Homelink></Link><Login1 href="#">why thinkerlinker?</Login1>
                        <Login2 href="#">find buddies</Login2> <Login3 href="#">help</Login3>            
            </Navigate>
    );
}