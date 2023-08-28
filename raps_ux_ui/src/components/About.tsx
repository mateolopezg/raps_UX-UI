import React from "react";
import { images } from "../utils/images";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  let imageUrl = `url(${images[0].urls})`;

  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: imageUrl,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-gray-100">{t("about.title")}</h1>
          <p className="mb-5 font-semibold text-gray-100">{t("about.description1")}</p>
          <p className="mb-5 font-semibold text-gray-100">{t("about.description2")}</p>
          <p className="mb-5 font-semibold text-gray-100">{t("about.description3")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
