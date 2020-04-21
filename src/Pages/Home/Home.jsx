import React,{Component} from 'react'
import './Home.css'
import glass from '../imgs/glass.jpg'
import shoes from '../imgs/shoes.jpg'
import suit from '../imgs/suit.jpg'
import tie from '../imgs/tie.jpg'
import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav'
import Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Footer/Footer'
// import React, { Component } from 'react'

export class Home extends Component {
    navigate=(e)=>{
        var {id} = e.target
        this.props.history.push(`/Products/${id}`)
    }
    render() {
        return (
            <div className="home_cont_wrapper">    
                <div className="home_cont">
                    <div className="home_header">
                        <Header/>
                    </div>
                    <div className="home_nav">
                        <Nav/>
                    </div>
                    <div className="home_slider">
                        <Slider/>
                    </div>
                    <div className="home_package_heading flex">
                        <h1>Easy and Fastest Online Shopping Platform</h1>
                    </div>
                    <div className="home_packages flex">
                        <div className="package_box_small">
                            <img className='package_box_img_size' id='shoes' onClick={(e)=>{this.navigate(e)}} src={shoes} alt=""/>
                        </div>
                        <div className="package_box_big">
                            <img className='package_box_img_size' id='suit' onClick={(e)=>{this.navigate(e)}} src={suit} alt=""/>
                        </div>
                        <div className="package_box_small">
                            <img className='package_box_img_size' id='glass' onClick={(e)=>{this.navigate(e)}} src={glass} alt=""/>
                        </div>
                        <div className="package_box_big">
                            <img className='package_box_img_size' id='tie' onClick={(e)=>{this.navigate(e)}} src={tie} alt=""/>
                        </div>
                    </div>
                    <div className="home_footer">
                        <Footer/>
                    </div>
                </div>
            </div>    
                )
    }
}

export default Home

// export default function Home() {
//     return (
//         <div className="home_cont_wrapper">    
//             <div className="home_cont">
//                 <div className="home_header">
//                     <Header/>
//                 </div>
//                 <div className="home_nav">
//                     <Nav/>
//                 </div>
//                 <div className="home_slider">
//                     <Slider/>
//                 </div>
//                 <div className="home_package_heading flex">
//                     <h1>Easy and Fastest Online Shopping Platform</h1>
//                 </div>
//                 <div className="home_packages flex">
//                     <div className="package_box_small">
//                         <img className='package_box_img_size' id='shoes' src={shoes} alt=""/>
//                     </div>
//                     <div className="package_box_big">
//                         <img className='package_box_img_size' id='suit' src={suit} alt=""/>
//                     </div>
//                     <div className="package_box_small">
//                         <img className='package_box_img_size' id='glass' src={glass} alt=""/>
//                     </div>
//                     <div className="package_box_big">
//                         <img className='package_box_img_size' id='tie' src={tie} alt=""/>
//                     </div>
//                 </div>
//                 <div className="home_footer">
//                     <Footer/>
//                 </div>
//             </div>
//         </div>    
//     )
// }
