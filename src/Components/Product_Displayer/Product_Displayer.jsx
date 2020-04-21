import React, { Component } from 'react'
import './Product_Displayer.css'
export class Product_Displayer extends Component {
    render() {
        return (
            <div className="Product_displayer_wrapper flex">
                <div className="prdocut_displayer flex">
                    <div className="product_display_box flex-col">
                        <div className="product"></div>
                        <div className="product-price flex"><h1>PRICE</h1></div>
                    </div>
                    <div className="product_display_box flex-col">
                        <div className="product"></div>
                        <div className="product-price flex"><h1>PRICE</h1></div>
                    </div>
                    <div className="product_display_box flex-col">
                        <div className="product"></div>
                        <div className="product-price flex"><h1>PRICE</h1></div>
                    </div>
                    <div className="product_display_box flex-col">
                        <div className="product"></div>
                        <div className="product-price flex"><h1>PRICE</h1></div>
                    </div>
                    <div className="product_display_box flex-col">
                        <div className="product"></div>
                        <div className="product-price flex"><h1>PRICE</h1></div>
                    </div>
                    <div className="product_display_box flex-col">
                        <div className="product"></div>
                        <div className="product-price flex"><h1>PRICE</h1></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_Displayer
