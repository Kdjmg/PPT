import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        }
      },]
  };

  return (
    
    <div className="w-[87%] mx-auto m-8">
      <Slider {...settings}>
        <div className='px-2'>
          <img
            src="/pates.jpg"
            alt="Pâtes"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className='px-2'>
          <img
            src="/panini.jpg"
            alt="Panini"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className='px-2'>
          <img
            src="/tenders.jpg"
            alt="Poulet"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Ajoute d'autres images ici si nécessaire */}
      </Slider>
    </div>
  );
};
