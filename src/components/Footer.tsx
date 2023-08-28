import React from "react";
// @ts-ignore
import FeatherIcon from "feather-icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Columna de Redes Sociales */}
        <div className="flex items-center mb-4 md:mb-0">
          <a href="#" className="mr-4">
            <FeatherIcon icon="facebook" className="text-2xl" />
          </a>
          <a href="#" className="mr-4">
            <FeatherIcon icon="twitter" className="text-2xl" />
          </a>
          <a href="#" className="mr-4">
            <FeatherIcon icon="instagram" className="text-2xl" />
          </a>
        </div>
        
        {/* Columna de Información de Contacto */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Información de Contacto</h3>
          <p>Email: contacto@asas.cl</p>
          <p>Celular: + 56 9 1111  1111</p>
          <p>Horario de Atención:</p>
          <p>Lunes a Viernes 9:30 am – 7:30pm</p>
          <p>Fines de Semana y Feriados 9:30 am – 6:00pm</p>
        </div>
        
        {/* Columna de Sucursales */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sucursales</h3>
          <p>Strip Center Macul: Calle Macul Nº 22.222 Tienda Nº 6.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
