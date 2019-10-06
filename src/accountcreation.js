import React,{useState} from "react";
import {Account_Wrapper,Account_name,Account_details,Account_content,Username_field,Password_field,Account_Username,Account_others,ConfirmPassword_field,Email_field,Dp,Dp_wrapper,Create_button,Error,Uploadfile} from './styles.js';
import Loginnavbar from "./loginnavbar.js"
import axios from "axios";
import back from './background.jpg'

export default function Accountcreation(){
    const [profile,setprofile]=useState({displayname:'',password:'',email:''});
    const [error,seterror]=useState({displayname_error:'',password_error:'',confirm_error:'',email_error:''})
    const [background,setbackground]=useState(back);
    const username=(e)=>{
        let value=e.target.value;
        if(value!=profile.displayname){
             if(value.length<6){
                 seterror({...error,displayname_error:'Display name atleast have 6 character'});
            }
            else{
                axios.get(`http://localhost:4000/profile?username=${value}`).then(res=>{
                    console.log(res.data);
                    if(res.data.length==0)
                        setprofile({...profile,displayname:value});
                    else
                        seterror({...error,displayname_error:'Display name is already exists'});
                }
                ).catch(err=>{
                    console.log(err);
                })
                
            }
        }
    }

    const password=(e)=>{
        let str=e.target.value;
		let upperCaseLetters = /[A-Z]/g;
		let numbers = /[0-9]/g;
		let special=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if(str.length<7){
			seterror({...error,password_error:'minimum 8 character'});
		}
		else if(str!=profile.password){
			let c1=false;
			let c2=false;
			let c3=false;
			if(str.match(upperCaseLetters)){c1=true}
			if(str.match(numbers)){c2=true}
			if(str.match(special)){c3=true}
			
			if(c1 && c2 && c3){
                setprofile({...profile,password:str});
            }
            else{
                seterror({...error,password_error:'must contain uppercase,number,special character'});
            }
		}	 
	 }
    
    const confirm=(e)=>{
       let confirm=e.target.value;
       if(confirm!=profile.password){
            seterror({...error,confirm_error:"password doesn't match"});
       }
    } 

    const email=(e)=>{
              let value=e.target.value;
              let email=/^([A-Za-z0-9_\-\.])+\@([gmail|hotmail])+\.(com)$/;
              if(value!=profile.email){
                if(!value.match(email)){
                    seterror({...error,email_error:'invalid email'});
                }
                else {
                    axios.get(`http://localhost:4000/profile?email=${value}`).then(res=>{
                        console.log(res.data);
                        if(res.data.length==0)
                            setprofile({...profile,email:value});
                        else
                            seterror({...error,email_error:'email-id is already taken'});
                    }
                    ).catch(err=>{
                        console.log(err);
                    })
                }
        }
    }
    const clear=(e)=>{
        let name=e.target.name;
        if(name=='display_name')
            seterror({...error,displayname_error:''});
        else if(name=='password')
             seterror({...error,password_error:''});
        else if(name=='confirm')
             seterror({...error,confirm_error:''});
        else if(name=='email')
             seterror({...error,email_error:''});
    }

    const picture=(e)=>{
        let value = e.target.value.replace("C:\\fakepath\\", "");
        console.log(value);
    }

    const create=()=>{
        if(error.displayname_error=='' && error.password_error=='' && error.confirm_error=='' && error.email_error==''){
            if(profile.username!=''&& profile.password!='' && profile.email!=''){
                let data={"username":profile.displayname,"password":profile.password,"email":profile.email};
                axios.post(`http://localhost:4000/profile`,data).then( res=>{
                      console.log("updated");
                         }).catch(err=>{console.log(err)})
            }
        }
    }

    return(
        <Account_Wrapper >
            <Loginnavbar/>
            <Account_details>
                <Account_name>Create your account</Account_name>
                <Account_content>
                   <Account_Username>Display name</Account_Username><Username_field onBlur={username} onFocus={clear}/>{error.displayname_error!=''&& <Error>{error.displayname_error}</Error>}
                   <Account_others>password</Account_others><Password_field onBlur={password} onFocus={clear}/>{error.password_error!='' && <Error>{error.password_error}</Error>}
                   <Account_others>confirm password</Account_others><ConfirmPassword_field onBlur={confirm} onFocus={clear}/>{error.confirm_error!='' && <Error>{error.confirm_error}</Error>}
                   <Account_others>Email id</Account_others><Email_field onBlur={email} onFocus={clear}/>{error.email_error!='' && <Error>{error.email_error}</Error>}
                   <Account_others>profile picture</Account_others><Dp_wrapper><Dp src={background}/></Dp_wrapper>
                   <Uploadfile onChange={picture}/>
                   <Create_button onClick={create}>Create Account</Create_button>
                </Account_content>
            </Account_details>
        </Account_Wrapper>  
    );
}