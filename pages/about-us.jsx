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

      

      <div className="container-xl inner-page">
        <div className="col-12 mt-5">
          <h2>Sobre Nosotras</h2>
          
          <p>pasajebaratos destaca como una entidad destacada en el ámbito de viajes y hotelería en Asia. Nuestra misión es facilitar al máximo todas las necesidades relacionadas con los viajes, gracias a nuestras sólidas alianzas comerciales y tecnología de vanguardia. Nos hemos convertido en el portal en línea de mayor crecimiento, proporcionando soluciones de alojamiento excepcionales que ofrecen a nuestros clientes una amplia variedad de ofertas en vuelos y hoteles.
          </p>
          <p>Con un equipo operativo las 24 horas del día, los 7 días de la semana, nos esforzamos por superar tus expectativas en términos de alojamiento y actividades de ocio, adaptándonos a tu presupuesto y horario. Reconocemos que viajar es una experiencia ineludible en la actualidad, ya sea por motivos laborales, investigativos, compromisos u ocio.</p>
          <p>Gracias a nuestra tecnología avanzada y un equipo experto y dedicado en servicios de alojamiento, pasajebaratos ofrece a sus clientes beneficios significativos al realizar reservas en servicios hoteleros en toda Asia. Nos hemos asociado con los líderes de la industria para ofrecer ofertas y promociones incomparables que te dejarán asombrado y te brindarán las vacaciones de tus sueños.</p>
          <p>Con nosotros, no hay sueño de viaje que no puedas hacer realidad, ya sea un vuelo de último minuto para llegar a un evento importante, asistir a una ceremonia de graduación, un ansiado viaje con amigos de la universidad o unas vacaciones tranquilas y elegantes en un resort con tu ser querido, creando recuerdos que apreciarás toda tu vida. Exploramos el mundo, pero siempre nos aseguramos de quedarnos en los lugares más destacados y hacer que cada experiencia sea memorable.</p>
        </div>
      </div>
    </>
  );
};

export default About;
