import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever ist dein Ziel für zeitlose Mode für die ganze Familie. Von eleganten Essentials für Damen und Herren bis hin zu bequemen Styles für Kinder – wir bieten hochwertige Qualität für jede Generation. Entdecke Mode, die bleibt.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">UNTERNEHMEN</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Über uns</li>
            <li>Lieferung</li>
            <Link to="/Impressum">
              <li>Impressum</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Kontaktieren Sie uns</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+49-3388-12345678</li>
            <li>kundenservice@forever-fashion.de</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright © 2026 Forever – Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  );
};

export default Footer;
