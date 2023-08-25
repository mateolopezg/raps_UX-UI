import React from "react";
import image1 from "../assets/planters1.jpg";
import image2 from "../assets/planters2.jpg";
import image3 from "../assets/planters3.jpg";
import image4 from "../assets/planters4.jpg";
import image5 from "../assets/planters5.jpg";
import image6 from "../assets/planters6.jpg";

interface ImageData {
  id: number;
  urls: string;
  alt_description: string;
}

const images: ImageData[] = [
  {
    id: 0,
    urls: image1,
    alt_description: 'description general planters 1'
  },
  {
    id: 1,
    urls: image2,
    alt_description: 'description general planters 2'
  },
  {
    id: 2,
    urls: image3,
    alt_description: 'description general planters 3'
  },
  {
    id: 3,
    urls: image4,
    alt_description: 'description general planters 4'
  },
  {
    id: 4,
    urls: image5,
    alt_description: 'description general planters 5'
  },
  {
    id: 5,
    urls: image6,
    alt_description: 'description general planters 6'
  }
];

const CarouselItem: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center mx-48">
      {images.map((image) => (
        <div key={image.id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={image.urls}
              alt={image.alt_description}
              className="w-80 h-80 object-cover mx-auto my-4 rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselItem;
