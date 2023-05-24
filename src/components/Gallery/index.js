import React from "react";
import Thermos_nurse from '../../assets/gallery_images/thermos - nurse.png'
import Thermos_to_the_moon from '../../assets/gallery_images/thermos - I love you to the moon.png'
import Thermos_chile from '../../assets/gallery_images/thermos - chile.png'
import Thermos_beth_dutton from '../../assets/gallery_images/thermos - beth dutton.png'
import Thermos_badge from '../../assets/gallery_images/thermos - badge.png'
import Cup_math from '../../assets/gallery_images/cup - math.png'
import Cup_fire_chief from '../../assets/gallery_images/cup - fire chief.png'
import Glass_cup_911_tribute from '../../assets/gallery_images/glass cups - 911 tribute.png'
import Glass_cup_wedding_glass from '../../assets/gallery_images/glass cup - wedding champaine glass.png'
import Mug_spookie from '../../assets/gallery_images/mugs - spookie sisters.png'
import Mug_mommy from '../../assets/gallery_images/mugs - mommy.png'
import Mug_code3graphix from '../../assets/gallery_images/mugs - code3graphix.png'
import Can_holder_we_the_people from '../../assets/gallery_images/can holder - we the people.png'
import Can_holder_sahaurita from '../../assets/gallery_images/can holder - sahaurita.png'
import Flask_simple_man from '../../assets/gallery_images/flask - simple man.png'
import Ornament_christmas_names from '../../assets/gallery_images/ornament - christmas family names.png'
import Ornament_green_snowflake from '../../assets/gallery_images/ornament - green snowflake.jpg'
import Ornament_snowman from '../../assets/gallery_images/ornament - snowman.jpg'
import Sign_announcement from '../../assets/gallery_images/sign - birth announcement.png'
import Coster_stone from '../../assets/gallery_images/stone coster - green valley.png'
import Bottle_opener_midtown from '../../assets/gallery_images/bottle opener.png'
import Bottle_opener_midtown2 from '../../assets/gallery_images/bottle opener 2.png'
import Poker_chip_bounty from '../../assets/gallery_images/poker chips - bounty.png'
import Code_3 from '../../assets/gallery_images/Code 3 Graphix Logo.png'

function Gallery() {

  return (
    <main>
      <h1 className="center">Gallery</h1>
      <div className="gallery">
        {itemData.map((item) => (
          <div key={item.img}>
            <img className="galleryImage"
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;

const itemData = [
  {
    img: Thermos_nurse,
    title: 'Thermos - Nurse',
  },
  {
    img: Thermos_to_the_moon,
    title: 'Thermos - I love you to the moon',
  },
  {
    img: Thermos_chile,
    title: 'Thermos - Chile',
  },
  {
    img: Thermos_beth_dutton,
    title: 'Thermos - Beth Dutton',
  },
  {
    img: Thermos_badge,
    title: 'Thermos - Badge',
  },
  {
    img: Cup_math,
    title: 'Cup - Math',
  },
  {
    img: Cup_fire_chief,
    title: 'Cup - Fire Chief',
  },
  {
    img: Glass_cup_911_tribute,
    title: 'Glass Cup - 911 Tribute',
  },
  {
    img: Glass_cup_wedding_glass,
    title: 'Glass Cup - Wedding Champaine Glass',
  },
  {
    img: Mug_spookie,
    title: 'Mug - Spookie',
  },
  {
    img: Mug_mommy,
    title: 'Mug - Mommy and Daddy to be',
  },
  {
    img: Mug_code3graphix,
    title: 'Mugs - Code3Graphix',
  },
  {
    img: Can_holder_we_the_people,
    title: 'Can Holder - We the people',
  },
  {
    img: Can_holder_sahaurita,
    title: 'Can Holder - Sahaurita',
  },
  {
    img: Flask_simple_man,
    title: 'Flask - Simple Man',
  },
  {
    img: Ornament_christmas_names,
    title: 'Ornament - Christmas Family Names',
  },
  {
    img: Ornament_green_snowflake,
    title: 'Ornament - Green Snomflake',
  },
  {
    img: Ornament_snowman,
    title: 'Ornament - Snowman',
  },
  {
    img: Sign_announcement,
    title: 'Sign - Birth Announcement',
  },
  {
    img: Coster_stone,
    title: 'Coster - Green Valley',
  },
  {
    img: Bottle_opener_midtown,
    title: 'Bottle Opener - Midtown',
  },
  {
    img: Bottle_opener_midtown2,
    title: 'Bottle Opener - Midtown2',
  },
  {
    img: Poker_chip_bounty,
    title: 'Poker Chip - Bounty',
  },
  {
    img: Code_3,
    title: 'Code 3 Graphix Logo',
  },
];