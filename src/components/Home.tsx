import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/images";
import CarouselItem from "./CarouselItem";
import { useTranslation } from "react-i18next";


const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <CarouselItem />

      {/* Sección de Productos Destacados */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.slice(0, 3).map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={image.urls}
                  alt={image.alt_description}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {t("products.title.card")}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t("products.title.description")}
                </p>
                <p className="text-green-600 font-semibold">
                  ${image.price.toFixed(2)}
                </p>
                <Link to="/products">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300">
                    {t("products.title.details")}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
