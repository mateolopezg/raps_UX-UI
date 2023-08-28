import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../utils/images";

const CarouselItem: React.FC = () => {
  return (
    <div className="carousel w-full mx-auto my-9">
      <Carousel
        showThumbs={false}
        emulateTouch
        showArrows
        swipeable
        interval={1500} // Slide every 1.5 seconds
        infiniteLoop // Loop back to the beginning when reaching the end
      >
        {images.map((image) => (
          <div key={image.id} className="carousel-item">
            <img
              className="w-80 h-80 object-cover mx-auto my-4 rounded-xl"
              src={image.urls}
              alt={image.alt_description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
