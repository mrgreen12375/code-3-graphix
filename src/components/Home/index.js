import React from "react";
import { Link } from 'react-router-dom';
import Water_bottle from '../../assets/product_images/water_bottle.png'
import Tumbler from '../../assets/product_images/tumbler.png'
import Travel_mug from '../../assets/product_images/travel_mug.png'
import Beverage_holder from '../../assets/product_images/beverage_holder.png'
import Coaster from '../../assets/product_images/coaster.png'
import Flask from '../../assets/product_images/flask.png'
import Plaque from '../../assets/product_images/plaque.png'
import Sign from '../../assets/product_images/sign.png'
import Bottle_openers from '../../assets/product_images/bottle_openers.png'

function Home() {

  return (
    <main className="home">
      <h1>Custom Lazer Engraving</h1>
      <h2>Awards+Recognition+Gifts+Signs+More</h2>
      <p>Laser engraving is a process that vaporizes materials into fumes to engrave permanent, deep marks. The laser beam acts as a chisel, incising marks by removing layers from the surface of the material. The laser hits localized areas with massive levels of energy to generate the high heat required for vaporization.</p>
      <div className="steps">
        <div className="steps">
          <h3>Step</h3><h2>1</h2><div><p>Choose the item you would like engraved</p><Link className="stepLink" to='/product'>Product</Link></div>
        </div>
        <div className="steps">
          <h3>Step</h3><h2>2</h2><div><p>Contact our laser engraving technician</p><Link className="stepLink" to='/contact'>Contact</Link></div>
        </div>
        <div className="steps">
          <h3>Step</h3><h2>3</h2><div><p>Make your payment</p><Link className="stepLink" to='https://www.paypal.com/us/home' target={"_blank"}>Pay</Link></div>
        </div>
      </div>
      <div className="slideShow">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="slideImage" src={Water_bottle} alt='Water Bottle'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Tumbler} alt='Tumbler'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Travel_mug} alt='Travel Mug'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Beverage_holder} alt='Beverage Holder'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Coaster} alt='Coaster'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Flask} alt='Flask'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Plaque} alt='Plaque'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Sign} alt='Sign'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Bottle_openers} alt='Bottle Openers'/>
            </div>


            <div className="slide">
              <img className="slideImage" src={Water_bottle} alt='Water Bottle'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Tumbler} alt='Tumbler'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Travel_mug} alt='Travel Mug'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Beverage_holder} alt='Beverage Holder'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Coaster} alt='Coaster'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Flask} alt='Flask'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Plaque} alt='Plaque'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Sign} alt='Sign'/>
            </div>
            <div className="slide">
              <img className="slideImage" src={Bottle_openers} alt='Bottle Openers'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  
  export default Home;