import React,{useState,useEffect } from "react";
import Navbar from "./navbar.jsx";
import axios from "axios";
import Login from './login.jsx';
import img from './bulb.png'

function Home() {
      const [img,setimg]=useState([]);

useEffect(()=> {
      console.log("button");
        //axios.post(`http://localhost:27017/`,{ "title":{img} }).then(res=>{
            axios.get(`http://localhost:4000/posts`).then( res=>{
                      console.log(res);
                         }).catch(err=>{console.log(err)})
       // }).catch(err=>{console.log(err)})
        
      }
);
return(
            <Navbar/>
);
}
export default Home;