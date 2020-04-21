import React, { Component } from 'react'
import './LoginForm.css'
export class LoginForm extends Component {
    closeForm=()=>{
        var LoginhiddenElements = document.querySelectorAll('.Loginhidden');
        LoginhiddenElements.forEach(element => {
            element.style.display='none'
        });
        document.querySelector('.LoginForm').style.width='0%'
    }
    render() {
        return (
            <div className="LoginForm flex">
                <input className='Loginhidden' type="text" placeholder="Your Email Or MobileNumber"/>
                <input className='Loginhidden' type="text" placeholder="Your Password"/>
                <input className='Loginhidden' type="button" value="Signin"/>
                <h1 className='Loginhidden' onClick={()=>this.closeForm()}><i className="far fa-times-circle"></i></h1>
            </div>
        )
    }
}

export default LoginForm
