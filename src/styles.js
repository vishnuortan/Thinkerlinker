import styled from 'styled-components';

export const Navigate=styled.nav`
height:50px;
width:100%;
border-bottom:1px solid lightgray;
left:0;
top:0;
position:absolute;
padding-top:8px;
backgroud-color:white;
`;

export const Homelink=styled.div`
font-size:150%;
font-family:"Comic Sans MS", cursive, sans-serif;
margin-left:30px;
position:absolute;
color:SlateBlue;
`;

export const Button=styled.button`
width:150px;
height:40px;
font-size:120%;
font-family:"Comic Sans MS", cursive, sans-serif;;
background-color:white;
border:1.5px solid SlateBlue;
border-radius:5px;
position:absolute;
outline:none;
:hover{
    transform:scale(1.05);
}
`;

export const Login=styled(Button)`
margin-left:900px;
`;

export const Signup=styled(Button)`
margin-left:1080px;
`;

export const Search=styled.div`
width:342px;
height:36px;
margin-left:400px;
position:absolute;
border:0.11em solid SlateBlue;
border-radius:5px;
`;

export const Searchicon=styled.div`
width:40px;
height:32px;
position:absolute;
font-size:140%;
padding-top:4px;
background:lightgray;
text-align:center;
border-radius:5px 0px 0px 5px;
`;

export const Searchbar=styled.input.attrs(()=>({
    type:'text',
    placeholder:'search..'
}))`
padding-left:45px;
width:292px;
height:34px;
font-family:"Comic Sans MS", cursive, sans-serif;
font-size:140%;
border:none;
outline:none;
border-radius:5px;
`;

export const Loginholder=styled.div`
    width:100%;
    height:100%;
`;
export const Loginwrapper=styled.div`
    width:100.1%;
    height:567px;
    background-color:black;
    opacity:0.5;    
    position:absolute;
    top:59px;
    left:-1px;
`;

export const Logincontainer=styled.div`
    height:500px;
    width:500px;
    top:90px;
    left:800px;
    background-color:Beige;
    position:absolute;
    border:1.5px solid black;
    border-radius:5px;
`;

export const Username=styled.input.attrs(()=>({
    type:'text',
}))`
    padding-left:10px;
    width:350px;
    margin-top:10px;
    height:45px;
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-left:70px;
    border:1.5px solid black;
    border-radius:3px;
`;

export const Password=styled.input.attrs(()=>({
    type:'password',
}))`
    padding-left:10px;
    width:350px;
    margin-top:10px;
    height:45px;
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-left:70px;
    border:1.5px solid black;
    border-radius:3px;
`;

export const Toggle=styled.div`
    margin-left:900px;
    width:150px;
    position:absoulte;
`;

export const Togglemode=styled.div`
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    position:absolute;
    margin-left:50px;
`;

export const Toggleicon=styled.div`
    font-size:220%;
`;

export const Login1=styled.a`
font-size:150%;
font-family:"Comic Sans MS", cursive, sans-serif;
margin-left:250px;
position:absolute;
color:black;
`;

export const Login2=styled.a`
font-size:150%;
font-family:"Comic Sans MS", cursive, sans-serif;
margin-left:500px;
position:absolute;
color:black;
`;

export const Login3=styled.a`
font-size:150%;
font-family:"Comic Sans MS", cursive, sans-serif;
margin-left:680px;
position:absolute;
color:black;
`;

export const Login_dis_wrapper=styled.div`
top:119px;
height:500px;
width:770px;
position:absolute;
`;

export const Login_dis_head=styled.div`
    color:white;
    font-family:"Comic Sans MS", cursive, sans-serif;
    font-size:400%;
    position:absolute;
    left:50px;
`;

export const Login_Discription=styled.pre`
    left:60px;
    top:80px;
    color:white;
    font-family:"Comic Sans MS", cursive, sans-serif;
    font-size:270%;
    position:absolute;
`;

export const Login_name=styled.div`
    width:100%;
    text-align:center;
    font-size:250%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    position:absolute;
`;

export const Fieldname=styled.div`
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
`;

export const User=styled(Fieldname)`
    margin-top:90px;
    margin-left:70px;
`;

export const Pass=styled(Fieldname)`
    margin-left:70px;
    margin-top:20px;
`;

export const Login_button=styled.button`
    margin-left:130px;
    margin-top:45px;
    width:250px;
    height:50px;
    font-family:"Comic Sans MS", cursive, sans-serif;
    font-size:150%;
    padding-top:5px;
    background-color:MediumSeaGreen;
    color:white;
    outline:none;
    border:2px solid MediumSeaGreen;
    border-radius:5px;
    :hover{
        transform:scale(1.05);
    }
`;

export const Account_create=styled.div`
    margin-top:25px;
    font-size:130%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-left:100px;
`;
export const Create_link=styled.div`
    color:SlateBlue;
    display:inline-block;
`;

export const Account_Wrapper=styled.div`
    width:100%;
    height:1250px;
`;
export const Account_details=styled.div`
    width:70%;
    height:1250px;
    margin-left:15%;
    margin-top:60px;
    background-color:Beige;
`;
export const Account_content=styled.div`
    width:65%
    height:80%;
    margin-left:20%;
    
`;
export const Account_name=styled.div`
     font-size:300%;
     font-family:"Comic Sans MS", cursive, sans-serif;  
     text-align:center;
     padding-top:30px;
`;

export const Account_Username=styled.div`
    font-size:120%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-top:70px;
`;

export const Account_others=styled.div`
    font-size:120%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    margin-top:40px;
`;


export const Password_field=styled.input.attrs(()=>({
    type:'password',
    name:'password',
}))`
    padding-left:10px;
    width:550px;
    margin-top:10px;
    height:55px;
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    border:1.5px solid black;
    border-radius:3px;
`;

export const Username_field=styled.input.attrs(()=>({
    type:'text',
    name:'display_name',
}))`
    padding-left:10px;
    width:550px;
    margin-top:10px;
    height:55px;
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    border:1.5px solid black;
    border-radius:3px;
`;

export const ConfirmPassword_field=styled.input.attrs(()=>({
    type:'password',
    name:'confirm',
}))`
    padding-left:10px;
    width:550px;
    margin-top:10px;
    height:55px;
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    border:1.5px solid black;
    border-radius:3px;
`;

export const Email_field=styled.input.attrs(()=>({
    type:'text',
    name:'email',
}))`
    padding-left:10px;
    width:550px;
    margin-top:10px;
    height:55px;
    font-size:150%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    border:1.5px solid black;
    border-radius:3px;
`;

export const Dp_wrapper=styled.div`
    margin-top:15px;
    margin-left:70px;
    height:300px;
    width:300px;
    border:1.5px solid black;
    background-color:white;
`;

export const Dp=styled.img`
    height:299px;
    width:298px;
    padding-left:1px;
`;

export const Create_button=styled.button`
    margin-left:100px;
    margin-top:70px;
    width:350px;
    height:55px;
    font-family:"Comic Sans MS", cursive, sans-serif;
    font-size:180%;
    padding-top:2px;
    background-color:tomato;
    color:white;
    outline:none;
    border:1.5px solid tomato;
    border-radius:5px;
    :hover{
        transform:scale(1.02);
    }
`;

export const Error=styled.div`
    width:400px;
    height:30px;
    margin-top:-25px;
    margin-left:30px;
    color:red;
    font-family:"Comic Sans MS", cursive, sans-serif;
    background-color:white;
    padding-top:5px;
    text-align:center;
    position:absolute;
    border:1.5px solid black;
`;
export const Login_error=styled.div`
    width:300px;
    color:red;
    margin-left:120px;
    font-size:120%;
    margin-top:5px;
    position:absolute;
    font-family:"Comic Sans MS", cursive, sans-serif;
`;

export const Img=styled.img`
    width:500px;
    height:500px;
    position:absolute;
`;

export const Uploadfile=styled.input.attrs(()=>({
    type:'file',
    name:'upload',
    accept:"image/png, image/jpeg",
}))`
    margin-left:80px;
    margin-top:20px;
    font-size:110%;
    font-family:"Comic Sans MS", cursive, sans-serif;
    outline:none;
    ::-webkit-file-upload-button {
        font-size:110%;
        font-family:"Comic Sans MS", cursive, sans-serif;
        background-color:white;
        width:150px;
        height:40px;
        border:1.5px solid black;
      }
`;