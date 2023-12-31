import React, {useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import cerdito from "../Assets/img/cerdito.png";
import wulogo from "../Assets/img/wulogo.png";
import iconobu from "../Assets/img/icono-BU.png";
import googleplay from "../Assets/img/googleplay.png";
import apple from "../Assets/img/appstore.png";
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
          <div class="app">
            <p>
              <span id="classSpanParticipar">
                Si aún no tienes tu cuenta de ahorro
              </span>
              <br />
              Descarga la APP Banco Unión y ábrela gratis
            </p>
            <br />
            <div className="row">
            <a href="https://apps.apple.com/co/app/banco-uni%C3%B3n-colombia/id1541850571">
              <img src={apple} id="appleButton" alt="" className="col-6 img-app" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.girosyfinanzas.omni&hl=es_CO&gl=US&pli=1">
              <img
                src={googleplay}
                alt=""
                className="col-6 img-app "
                style={{ padding: "0rem" }}
              />
              </a>
            </div>
          </div>
          <div class="Separador">
            <div className="line"></div>
          </div>
          <div class="registro">
            <p>
              <span id="classSpanParticipar">
                Si ya tienes tu Cuenta de ahorro
              </span>
              <br />
              Regístrate e inscribe tu cuenta para participar
            </p>
            <br />
            <button className="botonStyle" onClick={handleShow}>
              Registrarme
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
                  Cuenta de Ahorros Banco Unión.
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
                <span style={{ color: "#00A0E3" }}>Cuenta de Ahorros</span> a
                través de:{" "}
              </p>
              <ul>
                <li className="textoOportunidades">
                  Nuestro portal web{" "}
                  <span style={{ color: "#00A0E3" }}>www.bancounion.com</span>{" "}
                </li>
                <li className="textoOportunidades">
                  Nuestra línea nacional <br id="brvisual" />
                  <span style={{ color: "#00A0E3" }}>01 8000 111 999</span>{" "}
                </li>
                <li className="textoOportunidades">Directo a la cuenta</li>
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
                Red de Oficinas a <span style={{ color: "#00A0E3" }}>nivel nacional</span>{" "} 
              </p>
              <ul>
                <li className="textoOportunidades">
                  Informar al asesor de <span style={{ color: "#00A0E3" }}>Banco Unión </span>{" "} en ventanilla su deseo de abonar el giro en la cuenta.{" "}
                  
                </li>
                <li className="textoOportunidades">
                Informar el nombre de la persona y el país desde donde envían el dinero con el<span style={{ color: "#00A0E3" }}> código MTCN. </span>{" "} 
                </li>
                <li className="textoOportunidades">Presentar documento de identidad.</li>
              </ul>
            </div>
          </div>
          <br /> <br />
          {/*<button className="btnConoce">Conoce más aquí</button>*/}
          <span id="textTerminos">
            *Aplican Términos y Condiciones. Imágenes de referencia.
          </span>
          <div id="containerSpace"></div>
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
