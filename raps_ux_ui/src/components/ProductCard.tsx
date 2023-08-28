import React from "react";
import { useTranslation } from "react-i18next";
import { images } from "../utils/images";

interface ProductCardProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductCard: React.FC<ProductCardProps> = ({ setCartCount }) => {
  const { t } = useTranslation();

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1); // Actualiza el contador del carrito
  };

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
            <h2 className="card-title">{t("products.title.card")}</h2>
            <p>{t("products.title.description")}</p>
            <p className="text-green-600 font-semibold">${image.price.toFixed(2)}</p> {/* Muestra el precio */}
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={addToCart}>
                {t("products.title.button")}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
