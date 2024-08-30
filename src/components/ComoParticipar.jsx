import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import cerdito from "../Assets/img/cerdito.png";
import wulogo from "../Assets/img/wulogo.png";
import iconobu from "../Assets/img/icono-BU.png";

import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import "../css/ComoParticipar.css";
import { useForm } from "react-hook-form";

export const ComoParticipar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let url = "http://localhost:3062/api/";
    let idDocumento = data.idDocumentoCliente;

    fetch(`${url}/${idDocumento}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.userExist !== true) {
          let url = "http://localhost:3062/api/";
          console.log("datos guardados " + JSON.stringify(data));
          // let url = "https://www.bancounioncomunicaciones.com/aguinaldomillonariobackend/api/";
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },

            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            });
        } else {
          /* document.getElementById("texto-validacion-formulario").style.display =
            "flex";
          alerta =
            "El No. de Giro ingresado ya fue utilizado. Por favor ingrese otro valor.";
          errorformularioTexto.innerText = alerta;*/
          console.log("El Cliente ya está registrado");
        }
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <div>
        <span id="comoParticiparTitulo">¿Cómo Participar?</span>

        <div class="gridParticipar">
        <div class="registro">
            <p>
              <span id="classSpanParticipar">
                Si tienes tu Cuenta de Ahorro
              </span>
             
            </p>
            
            <button className="botonStyle" onClick={handleShow}>
              regístrala aquí
            </button>
          </div>
          
         
          
        </div>
      </div>

      {/*COMO ACUMULAR OPORTUNIDADES*/}
      <div className="oportunidades">
        <h2 className="h2TituloOportunidades">
          ¿Cómo acumular más oportunidades?
        </h2>

        <div className="oportunidadescontent">
          <div className="row">
            <div className="col-md-3">
              <img src={cerdito} alt="imgmarrano" id="imglista" />
            </div>
            <div className="col-md-9">
              <p className="textoOportunidades">
                Por cada $50.000 que aumentes en el saldo de tu{" "}
                <span style={{ color: "#00A0E3" }}>
                  Cuenta de Ahorro Banco Unión.
                </span>{" "}
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 col-12">
              <img src={wulogo} alt="imglogowesternunion" id="imglista" />
            </div>
            <div className="col-md-9 col-12">
              <p className="textoOportunidades">
                <br id="brvisual" />
                Abonando tus Giros Western Union directo a tu{" "}
                <span style={{ color: "#00A0E3" }}>Cuenta de Ahorro</span> a
                través de:{" "}
              </p>
              <ul>
                <li className="textoOportunidades">
                  Nuestro portal web{" "}
                  <span style={{ color: "#00A0E3" }}> <a className="enlace" href="https://www.bancounion.com/wps/portal/bancounion" target="_blank" rel="noopener noreferrer" >  www.bancounion.com </a> </span>{" "}
                </li>
                <li className="textoOportunidades">
                  Nuestra línea nacional <br id="brvisual" />
                  <span style={{ color: "#00A0E3" }}>01 8000 111 999</span>{" "}
                </li>
                <li className="textoOportunidades">Abono de Giro directo a la Cuenta</li>
              </ul>
            </div>
          </div>
          <br />
          <br />

          <div className="row">

            <div className="col-md-3 col-12">
              <img src={iconobu} alt="imglogowesternunion" id="imglista" />
            </div>
            <div className="col-md-9 col-12">
              <p className="textoOportunidades">
                <br id="brvisual" />
                Red de Oficinas a <span style={{ color: "#00A0E3" }}>nivel nacional </span>{" "}
              </p>
              <ul>
                <li className="textoOportunidades">
                  Informa al asesor de <span style={{ color: "#00A0E3" }}>Banco Unión </span>{" "} en ventanilla tu deseo de abonar el Giro en la Cuenta.{" "}

                </li>
                <li className="textoOportunidades">
                  Informa el nombre de la persona y el país desde donde te envían el dinero con el<span style={{ color: "#00A0E3" }}> código MTCN. </span>{" "}
                </li>
                <li className="textoOportunidades">Presenta tu documento de identidad.</li>
              </ul>

             
            </div>
         
          </div>
          <br /> <br />
          {/*<button className="btnConoce">Conoce más aquí</button>*/}
          <span  id="textTerminos">
            <a href="https://www.bancounion.com/wps/wcm/connect/bancounion/1ab99043-5b13-4162-8e6e-99b92dfb42ed/TYC+PRUEBA.pdf?MOD=AJPERES&attachment=false&id=1720189662940" target="_blank" rel="noopener noreferrer"> *Aplican Términos y Condiciones.</a> Imágenes de referencia. 

          </span>
          <div id="containerSpace"></div>
          <p className="tycp">
              Aplican Términos y Condiciones 

ABSTRACT:  I. Nombre y razón social: Banco Unión S.A. NIT 860006797-9 – II. Nombre del Juego Promocional: Con Banco Unión Ganas por tu Cuenta – III. Quiénes pueden participar: en esta actividad pueden participar clientes personas naturales, mayores de edad, con domicilio en Colombia, que tengan Cuenta de Ahorros BANCO UNIÓN S.A. en estado activas y vigentes a la fecha de cada corte. No participan empleados de la compañía vinculados directamente o a través de temporal, ni los accionistas ni los vinculados de los accionistas, ni las cuentas de ahorro abiertas en las oficinas 201 o 76.  Los clientes participan de forma independiente con cada una de sus cuentas de ahorro. – IV. Vigencia del Juego Promocional: desde las 00:00 del día veinte (20) de agosto de 2024 hasta las 11:59 del día veinte (20) de diciembre de 2024 – V. Mecánica del Juego Promocional: un cliente tendrá la oportunidad de ganar por cada CINCUENTA MIL PESOS M/CTE ($50.000) que aumenten el saldo de su cuenta de ahorros. (el cálculo de oportunidades para participar en el sorteo por este ítem será: se tomará en cuenta el saldo de cada una de las cuentas de ahorros participantes en la promoción a la fecha de corte final y se establecerá la diferencia con el saldo a la fecha de corte inicial.  Esa diferencia, solo en los casos en que sea positiva, se dividirá por $50.000 y el numero resultante de la división corresponderá a la cantidad de oportunidades; sólo se tomará en cuenta el número entero resultante sin decimales), y /o por Cada Giro WESTERN UNION abonado a la Cuenta de Ahorros de BANCO UNIÓN S.A., a través de canales digitales o la red de oficinas a nivel nacional, el cálculo de oportunidades para participar en el sorteo por este ítem será: Se asignará una oportunidad a cada cliente por cada giro WESTERN UNION abonado en la cuenta de ahorros de BANCO UNIÓN S.A. de la que es titular, a través de los canales no presenciales y/o digitales y a través de la red de oficinas de Banco Unión a nivel nacional durante el corte respectivo de cada uno de los sorteos. Entiéndase por Canales digitales y/o no presenciales, portal transaccional www.bancounion.com , APP BANCO UNION, Contact Center 018000111999 y giro directo a la cuenta de ahorros de Banco Unión S.A. NIT 860006797-9 – VI. Fechas de Sorteos, hora y lugar donde se llevarán a cabo: los sorteos se llevarán a cabo en la Dirección General de BANCO UNIÓN S.A. NIT 860006797-9, ubicada en la Calle 4 # 27 – 52, barrio San Fernando, Santiago de Cali, el ocho (8) de octubre de 2024 a las 2:00 p.m., y el veintitrés (23) de diciembre de 2024 a las 10:30 a.m. - VII. Plan de Premios: Dos (2) Bonos de viaje, por valor de cinco millones de pesos M/CTE ($5.000.000) cada uno y un (1) carro NISSAN MARCH 1.6L "SENSE CONNECT" MEC D.ELECT AA RIM 15" LUJO 2A/bag B.C V.E RADIO TOUCH SCREEN MANOS LIBRES AUDIO TIMON EXPLORADORAS CAMARA REVERSA, MODELO 2023; premios que se entregarán a través de tres (03) sorteos. Los clientes participantes tendrán la oportunidad de ser uno de los tres (3) posibles ganadores de los tres (3) premios  - VIII Cobertura del Juego Promocional: Aplica únicamente en territorio colombiano para clientes con Cuenta de Ahorros Banco Unión S.A. NIT 860006797-9., en estado activas durante la vigencia de este juego promocional.  
              </p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} id="containerModal">
        <ModalHeader closeButton>
          <h2 id="textTitleModal">Ingresa tus datos</h2>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="containerForm">
              <span>Nombre</span>
              <input
                type="text"
                id="inputStyle"
                className="Nombre"
                {...register("nombreCliente", {
                  required: true,
                  maxLength: 60,
                })}
              />
              {errors.nombreCliente?.type === "required" && (
                <p
                  style={{
                    marginTop: "-1rem",
                    textAlign: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  Por favor ingrese su nombre
                </p>
              )}
              <span>Tipo Documento</span>
              <select
                name=""
                id="inputStyle"
                className="tipoDocumento"
                {...register("tipoDocumentoCliente", {
                  required: true,
                })}
              >
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjeria</option>
              </select>
              <span>Número Documento</span>
              <input
                type="number"
                pattern="[0-9]*"
                maxLength={10}
                name=""
                id="inputStyle"
                className="idDocumento"
                {...register("idDocumentoCliente", {
                  required: true,
                  maxLength: 15,
                  minLength: 3,
                })}
              />
              {errors.idDocumentoCliente?.type === "required" && (
                <p
                  style={{
                    marginTop: "-1rem",
                    textAlign: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  Por favor ingrese su número de documento de identidad
                </p>
              )}

              <br />
              <button type="submit" id="btnInscribirme">
                Inscribirme
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
