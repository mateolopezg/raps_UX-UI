// components/About.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-12 my-20 m-5">
      <div className="container mx-auto font-semibold">
        <h2 className="text-3xl  text-center mb-6">
          {t("about.title")}
        </h2>
        <p className="text-center text-gray-700 leading-relaxed">
          {t("about.description1")}
        </p>
        <p className="text-center text-gray-700 leading-relaxed mt-4">
          {t("about.description2")}
        </p>
        <p className="text-center text-gray-700 leading-relaxed mt-4">
          {t("about.description3")}
        </p>
      </div>
    </section>
  );
};

export default About;
