import React from "react";
import { images } from "../utils/images";

const ProductCard: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center my-10">
      {images.map((image) => (
        <div
          key={image.id}
          className="card card-compact w-96 bg-base-100 shadow-xl justify-self-center"
        >
          <figure>
            <img
              src={image.urls}
              alt={image.alt_description}
              className="w-80 h-80 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Macetas y plantas!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
