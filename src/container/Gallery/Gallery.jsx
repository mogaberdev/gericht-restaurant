import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {

  const pictures = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scrollRef = useRef()
  const scroll = (direction) => {
    const {current} = scrollRef;

    if( direction === "left"){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallary</h1>
      <p className='p__opensans' style={{color: "#AAA", marginTop: "2rem"}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>

    <div className="app__gallery-images">
      <div className='app__gallery-images_container' ref={scrollRef}>
        {pictures.map((picture, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={picture} alt="gallery"/>
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>
)
};

export default Gallery;
