import React, { Component } from 'react'
import './Slider.css'
import s1 from '../imgs/s1.jpg'
import s2 from '../imgs/s2.jpg'
import s3 from '../imgs/s3.jpg'
import s4 from '../imgs/s4.jpg'
export class Slider extends Component {
    state={
        arr:[],
        index:0
    }
    componentDidMount() {
        const imgArr=[];
        imgArr.push(s1)
        imgArr.push(s2)
        imgArr.push(s3)
        imgArr.push(s4)
        this.setState((prevState)=>({
            arr:imgArr
        }))
        setTimeout(() => {
            this.continueSlider()
        }, 3000);
    }
    continueSlider=()=>{
        var {arr,index}=this.state
        if(index<arr.length-1){
            this.setState((prevState)=>({
                index:prevState.index+1
            }))
        }
        else{
            this.setState((prevState)=>({
                index:0
            }))
        }

        setTimeout(() => {
        this.continueSlider()
        }, 5000);
    }
    render() {
        var {arr,index}=this.state
        return (
            <div className="slider flex">
                <img className='slider_img_size' src={arr[index]} alt=""/>
            </div>
        )
    }
}

export default Slider
