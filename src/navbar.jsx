import React,{useState } from "react";
import './fonts/css/font-awesome.css';
import {Homelink,Navigate,Login,Search,Searchicon,Searchbar,Toggle,Togglemode,Toggleicon} from './styles.js'

function Navbar() {
    const [toggle,settoggle]=useState(false);
return(
    <div id="root">
        <Navigate>
            <Homelink>thinkerlinker<i class="fa fa-lightbulb-o"></i></Homelink>
            <Search><Searchicon><i class="fa fa-search"></i></Searchicon><Searchbar></Searchbar></Search>
            {toggle && <Toggle><Togglemode>public</Togglemode><Toggleicon onClick={()=>settoggle(false)}><i class="fa fa-toggle-off" aria-hidden="true"></i></Toggleicon></Toggle>}
            {!toggle && <Toggle><Togglemode>private</Togglemode><Toggleicon onClick={()=>settoggle(true)}><i class="fa fa-toggle-on" aria-hidden="true"></i></Toggleicon></Toggle>}    
        </Navigate>
    </div>
);
}

export default Navbar;