import React,{useState} from "react";
import './fonts/css/font-awesome.css';
import  Login_navbar  from './loginnavbar.js'
import {Img,Loginholder,Loginwrapper,Logincontainer,Login_dis_wrapper,Login_dis_head,Login_Discription,Login_name,User,Pass,Username,Password,Login_button,Account_create,Create_link,Login_error} from './styles.js';
import {Link} from "react-router-dom";
import axios from "axios";
import img from "./bulb.png";
import base64 from 'base-64';

export default function LoginPage(){
    const [error,seterror]=useState(false);
    const [img1,setimg1]=useState();
    const [login,setlogin]=useState({username:'',password:''});

    const clear=()=>{
        seterror(false);
    }

    const username=(e)=>{
        console.log("enter");
        let value=e.target.value;
        setlogin({...login,username:value});
    }

    const password=(e)=>{
        let str=e.target.value;
		let upperCaseLetters = /[A-Z]/g;
		let numbers = /[0-9]/g;
		let special=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if(str.length>7){
			let c1=false;
			let c2=false;
			let c3=false;
			if(str.match(upperCaseLetters)){c1=true}
			if(str.match(numbers)){c2=true}
			if(str.match(special)){c3=true}
			if(c1 && c2 && c3)
                setlogin({...login,password:str});
            else
                setlogin({...login,password:''});
        }
    }

    const submit=(e)=>{
        let username=login.username;
        let password=login.password;
        let encoded = base64.encode(img);
        let decoded = base64.decode(encoded);
        console.log(encoded);
        setimg1(decoded);

        //axios.post(`http://localhost:4000/profile`,{"name":"vishnu"}).then(res=>{
          //  console.log(res);
        //}).catch(err=>{console.log(err);})
        if(username.length>5 && password.length!=0){
        

         axios.get(`http://localhost:4000/profile?username=${username}&password=${password}`).then(res=>{
             console.log(res.data);
             if(res.data.length==0){
                 seterror(true);
             }
            else
                console.log('logged in');
            }).catch(err=>{console.log(err);})
        }
        else
            seterror(true);
    }
    return(
        <Loginholder id="root">
            <Login_navbar />
            <Loginwrapper/>
                <Login_dis_wrapper>
                    <Login_dis_head>Built for Developers</Login_dis_head>
                     <Login_Discription>         tinkerlinker is platform <br/>for developers to contribute <br/>support,share ideas and interact <br/>with other developers  </Login_Discription>
                </Login_dis_wrapper>
                
                <Logincontainer>
                    <Login_name>Sign in</Login_name>
                    <User>username</User><Username onBlur={username} onFocus={clear}/>
                    <Pass>password</Pass><Password onBlur={password} onFocus={clear}/>
                    {error && <Login_error>Invalid username or password</Login_error>}
                    <Login_button onClick={submit}>login</Login_button>
                    <Img src={img1}/>
                    <Account_create>Dont have account?<Link to='/createaccount'><Create_link>Create account</Create_link></Link></Account_create>
                </Logincontainer>
        </Loginholder>
    );
}