import React, { Component } from 'react'
import './SignupForm.css'
export class SignupForm extends Component {
    closeForm=()=>{
        var SignuphiddenElements = document.querySelectorAll('.Signuphidden');
        SignuphiddenElements.forEach(element => {
            element.style.display='none'
        });
        document.querySelector('.SignupForm').style.width='0%'
    }
    render() {
        return (
            <div className='SignupForm flex'>
                <input className='Signuphidden' type="text" placeholder="MobileNumber"/>
                <input className='Signuphidden' type="text" placeholder="UserName"/>
                <input className='Signuphidden' type="text" placeholder="Your Password"/>
                <input className='Signuphidden' type="button" value="Signup"/>
                <h1 className='Signuphidden' onClick={()=>this.closeForm()}><i className="far fa-times-circle"></i></h1>
            </div>
        )
    }
}

export default SignupForm
