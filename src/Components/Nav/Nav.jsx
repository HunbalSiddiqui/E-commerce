import React, { Component } from 'react'
import './Nav.css'
import {withRouter} from 'react-router-dom'
export class Nav extends Component {
    
    openForm=(formId)=>{
        var SignuphiddenElements = document.querySelectorAll('.Signuphidden');
        var LoginhiddenElements = document.querySelectorAll('.Loginhidden');
        if(formId==='signin')
        {
            //closing previously openend slider (bug fixed)
            SignuphiddenElements.forEach(element => {
                element.style.display='none'
            });
            document.querySelector('.SignupForm').style.width='0%'
            document.querySelector('.LoginForm').style.width='100%'

            setTimeout(() => {
                LoginhiddenElements.forEach(element => {
                    element.style.display='block'
                });
            }, 500);

        }
        else if(formId==='signup'){
            //closing previously opened (bug fixed)
            LoginhiddenElements.forEach(element => {
                element.style.display='none'
            });
            document.querySelector('.LoginForm').style.width='0%'
            document.querySelector('.SignupForm').style.width='100%'
            setTimeout(() => {
                SignuphiddenElements.forEach(element => {
                    element.style.display='block'
                });
            }, 500);
        }
    }
    navigate=()=>{
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div className='Nav flex'>
                <div className="item flex" id='signin' onClick={()=>{this.openForm('signin')}}><h2><i className="far fa-user"></i> Signin</h2></div>
                <div className="item flex" id='signup' onClick={()=>{this.navigate()}}><h2><i class="fas fa-home"></i> Home</h2></div>
                <div className="item flex" id='signup' onClick={()=>{this.openForm('signup')}}><h2><i className="fas fa-user-plus"></i> Signup</h2></div>
            </div>
        )
    }
}

export default withRouter(Nav)
