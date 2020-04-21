import React, { Component } from 'react'
import './Products.css'
import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/Header'
import Product_Filter from '../../Components/Product_Filter/Product_Filter'
import Footer from '../../Components/Footer/Footer'
import Product_Displayer from '../../Components/Product_Displayer/Product_Displayer'
export class Products extends Component {
    render() {
        return (
            <div className="products_cont_wrapper">
                <div className="prodcuts_cont">
                    <div className="product_header">
                        <Header/>
                    </div>
                    <div className="product_nav">
                        <Nav/>
                    </div>
                    <div className="product_useage_filter">
                        <Product_Filter/>
                    </div>
                    <div className="products_display flex">
                        <Product_Displayer/>
                    </div>
                    <div className="product_footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products
