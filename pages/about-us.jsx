import React from "react";
import Head from "next/head";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber } from "@/constant/headerConstant";

const About = () => {
  return (
    <>
      <Head>
        <title>{"Sobre Nosotras"}</title>
      </Head>
      <Breadcrumb title={"Sobre Nosotras"} />

      <div className="container">
          <div className="row explore-main mt-5">

        <div className="col-md-3 mb-4">
        <div className="ccontent">
       <span className="why_chose">
        <LazyImage width={80} height={80} src="/scure-1.png" /></span>
        <h3>Ahorrar dinero</h3>
        <p>Ahorro de dinero y ofertas especiales llamando <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p></div></div>

				<div className="col-md-3 mb-4">
        <div className="ccontent">
        <span className="why_chose">
        <LazyImage width={80} height={80} src="/price-icon-new.png" /></span>
        <h3>Promesa de igualación de precios</h3>
        <p>Encuentre nuestro precio más bajo a destinos en todo el mundo, ¡garantizado!</p></div></div>

				<div className="col-md-3 mb-4">
        <div className="ccontent">
        <span className="why_chose">
        <LazyImage width={80} height={80} src="/easy-icon.png" /></span>
        <h3>Fácil de usar</h3>
        <p>Desde que reserva su vuelo hasta que completa su viaje.</p></div></div>

        <div className="col-md-3 mb-4">
        <div className="ccontent">
        <span className="why_chose">
        <LazyImage width={80} height={80} src="/like-icon.png" /></span>
        <h3>Ofertas en vivo</h3>
        <p>A la gente le encantan nuestras ofertas, ¡a ti también te encantarán! Síguenos en las redes sociales</p></div></div>
                      
               
                </div>
             
            
          </div>

      <div className="container-xl inner-page">
        <div className="col-12">
          <h2>Sobre Nosotras</h2>
          <hr />
          <p>boletosyofertas es una parte reconocida del sector de viajes y hotelería de Asia. Nuestro motivo es hacer que todas sus necesidades relacionadas con los viajes sean lo más fluidas posible a través de nuestros socios comerciales y tecnología de clase mundial. Somos el portal en línea de más rápido crecimiento que brinda increíbles soluciones de alojamiento que ofrecen a nuestros clientes una amplia selección de ofertas de vuelos y hoteles. Nuestro equipo trabaja 24 horas al día, 7 días a la semana para satisfacer tus expectativas en cuanto a hoteles y otras actividades de ocio que se ajusten a tu presupuesto y se ajusten al horario indicado. Entendemos que hoy en día viajar es algo que nadie puede evitar, ya sea por trabajo, investigación, obligaciones o diversión.
          </p>
          <p>Con la ayuda de nuestra tecnología de punta y un equipo sistemático y considerado de expertos en servicios de alojamiento, boletosyofertas ofrece a sus clientes un gran beneficio al realizar sus reservas con los servicios del hotel en toda Asia. ¡Nos hemos asociado con los mejores de nuestra industria para brindarle ofertas y tratos inigualables que lo dejarán fascinado y le brindarán las vacaciones de sus sueños! Por lo tanto, con nosotros no tendrás ningún sueño que no puedas cumplir cuando se trata de viajar solo o con tu encantadora compañía. Tenemos todo lo que necesita, desde un vuelo de último minuto para llegar a la boda de su prima, asistir a la ceremonia de graduación de su hija, un viaje juvenil tan esperado con sus compañeros de la universidad o simplemente unas vacaciones serenas y elegantes en un resort con su persona especial y creando recuerdos. Apreciarás toda tu vida por delante. Viajamos por el mundo pero siempre nos quedamos en el mejor lugar y lo hacemos funcionar.</p>
        </div>
      </div>
    </>
  );
};

export default About;
