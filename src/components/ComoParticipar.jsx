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
            regístrate aquí
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

              Actividad válida para todos clientes personas naturales, mayores de edad, que tengan domicilio en Colombia. Durante la vigencia del promocional participan todos los clientes con cuenta de Ahorro Banco Unión que aumenten el saldo de su cuenta de Ahorro (Se asignará una oportunidad por cada $50.000 que aumente en el saldo de la Cuenta de Ahorro Banco Unión); y/o también por cada giro Western Union abonado a la Cuenta de Ahorro de Banco Unión. (Se asignará una oportunidad por cada giro WESTERN UNION abonado en la cuenta de ahorros de Banco Unión). La promoción inicia el 20 de agosto y termina el 20 de diciembre de 2024. Los clientes participantes tendrán la posibilidad de ganar: 2 Bonos de viaje de cinco millones de pesos. Un cliente solo podrá ganar un bono. (El sorteo de estos premios se llevará a cabo el martes 08 de octubre de 2024, a las 2:00 p.m.  y lunes 23 de diciembre de 2024, a las 10:30 a.m.  cada bono se sorteará de manera individual) – 1 Carro Nissan March 1.6L Sense Connect, Modelo 2023 (El sorteo de este premio se llevará a cabo el lunes 23 de diciembre de 2024, a las 10:30 a.m. en el Edificio de Dirección General de Banco Unión S.A., en la Calle 4 # 27 - 52, Piso 3, (Dirección de Captaciones). Aplican términos y condiciones, los cuales pueden ser consultados detalladamente en 
https://www.bancounioncomunicaciones.com/ganaportucuenta/
 
 
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
