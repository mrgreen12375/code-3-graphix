import React from "react";
import Water_bottle from '../../assets/product_images/water_bottle.png'
import Tumbler from '../../assets/product_images/tumbler.png'
import Travel_mug from '../../assets/product_images/travel_mug.png'
import Beverage_holder from '../../assets/product_images/beverage_holder.png'
import Coaster from '../../assets/product_images/coaster.png'
import Flask from '../../assets/product_images/flask.png'
import Plaque from '../../assets/product_images/plaque.png'
import Sign from '../../assets/product_images/sign.png'
import Ornament from '../../assets/product_images/ornament.png'
import Bottle_openers from '../../assets/product_images/bottle_openers.png'

function Product() {
  return (
    <main>
      <h1 className="center">Product</h1>
      <div className="product">
        {itemData.map((item) => (
          <div key={item.img}>
            <h3 className="center">{`${item.title}`}</h3>
            <img className="productImage"
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <div className="price">
              <p>{`${item.price}`}</p>
              <a rel="noreferrer" href={`https://${item.view}`} target='_blank'>View</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Product;

const itemData = [
  {
    img: Water_bottle,
    title: 'Water Bottle',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Tumbler,
    title: 'Tumbler',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Travel_mug,
    title: 'Travel Mug',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Beverage_holder,
    title: 'Beverage Holder',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Coaster,
    title: 'Coaster',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Flask,
    title: 'Flask',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Plaque,
    title: 'Plaque',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Sign,
    title: 'Sign',
    price: '$19.99',    
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Ornament,
    title: 'Ornament',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
  {
    img: Bottle_openers,
    title: 'Bottle Openers',
    price: '$19.99',
    view: 'browse.jdsindustries.com/main.php?r=frontEnd&view=shop&jds-category1=15&jds-category1-desc=Drinkware',
  },
];