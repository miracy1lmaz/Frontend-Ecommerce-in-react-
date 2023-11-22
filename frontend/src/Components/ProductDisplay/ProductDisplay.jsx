import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_dull_icon.png"
import star_iconn from "../Assets/star_icon.png"

export default function ProductDisplay(props) {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="left">
            <div className="prodisimg">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="proright">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_iconn} alt="" />
              
            </div>
        </div>
    </div>
  )
}
