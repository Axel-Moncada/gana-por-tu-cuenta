import React from "react";
import "../css/intro.css";

import imgbanner from "../Assets/img/bannerimg.png";
import separador from "../Assets/img/linea-separador.png";
import premiodet from "../Assets/img/premio.png";
import celular from "../Assets/img/cel1.png";
import chat from "../Assets/img/boton blanco chateo 1.png";
//import flecha from "../Assets/img/flecha.png"

export const IntroLanding = () => {
  return (
    <div>
      <div className="welcomelanding">
        <div className="contentwelcome">
          <img className="imgBannerIntro" src={imgbanner} alt="imagen banner" />
          <div class="Containerpremios">
            <div class="texto1">
              {" "}
              <span>Participa por</span>{" "}
            </div>
            <div class="Separador">
              {" "}
              <img src={separador} alt="Separador" id="imgSeparador" />{" "}
            </div>

            <div class="imgPremio">
              {" "}
              <img
                src={premiodet}
                alt="premio detalles"
                height="100%"
                id="imgCarroPremio"
              />{" "}
            </div>
          </div>
          <div className="containerFootBanner">
            <span style={{ margin: "auto", color: "white" }}>
              Con tu{" "}
              <b style={{ color: "#FFE200", fontFamily: "latoBold" }}>
                Cuenta de Ahorros Banco Unión
              </b>{" "}
            </span>
          </div>
          <img src={celular} alt="imgcel" id="celularimg" />
        </div>
      </div>
      <div id="chatcontainer">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B573183349462&text&type=phone_number&app_absent=0"
          target="_blank" rel="noreferrer"
        >
          <img src={chat} alt="imgchat" id="chatImg" />
        </a>
      </div>
    </div>
  );
};
