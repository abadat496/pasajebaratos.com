import React from "react";
import Head from "next/head";
import SearchForm from "./components/shared/Searchform";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber, website } from "@/constant/headerConstant";

const Home = () => {
  return (
    <>
      <Head>
        <title>{website}</title>
      </Head>
      <SearchForm reset={true} backGroundImage={"/slider.jpg"} />

     
      <div className="whychose pt-5 pb-5">
      <div className="container">
      <div className="row explore-main">
      <div className="col-sm-12 text-center">
       <h2>¿Por qué elegir Pasajes Baratos?</h2>
        <p className="mb-4">Prepárese para explorar los diversos lugares del mundo reservando vuelos económicos con nosotros.</p>
        </div>

        <div className="col-md-3 mb-4">
        <div className="ccontent">
       <span className="why_chose">
       <i class="fa fa-usd fs-1"></i></span>
        <h3>Buscar y guardar</h3>
        <p>Al dividir los costos de millas de operadores de una sola vez, puede tomar una medida increíble y ahorrar dinero.</p></div></div>

				<div className="col-md-3 mb-4">
        <div className="ccontent">
        <span className="why_chose">
        <i class="fa fa-umbrella fs-1"></i></span>
        <h3>Reserva Rápida</h3>
        <p>La forma más rápida y directa de gestionar su próximo vuelo es utilizando nuestro dispositivo de búsqueda.</p></div></div>

				<div className="col-md-3 mb-4">
        <div className="ccontent">
        <span className="why_chose">
        <i class="fa fa-suitcase fs-1"></i></span>
        <h3>Servicio de atención al cliente disponible las 24 horas</h3>
        <p>DNuestro equipo está aquí para ayudarle en cualquier momento del día.</p></div></div>

        <div className="col-md-3 mb-4">
        <div className="ccontent">
        <span className="why_chose">
        <i class="fa fa-headphones fs-1"></i></span>
        <h3>Reserva sencilla</h3>
        <p>Ofrecemos servicios de reserva de vuelos fáciles y agradables con atractivos descuentos.</p></div></div>
                      
        </div>
        </div>
        </div>




      <div className="hotelmain ">
      <div className="container">
        <div className="row explore-main">
          <div className="col-sm-12 text-center">
            <h2>Destinos Tanto Nacionales como en el Extranjero</h2>
            <p className="mb-4">Encuentre los precios más baratos para todos los vuelos nacionales e internacionales mientras explora una variedad de lugares exóticos.</p>
          </div>

          <div className="col-6 col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/c-8.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <h2 className="text-center">London</h2>
            </div>
          </div>

          <div className="col-6 col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/c-7.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <h2 className="text-center">Dubai</h2>
            </div>
          </div>


          <div className="col-6 col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/c-1.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <h2 className="text-center">Los Angeles</h2>
            </div>
          </div>



          <div className="col-6 col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/c-2.png"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <h2 className="text-center">France</h2>
            </div>
          </div>


          </div>
          </div>
          </div>



      <div className="center-bg">
      <div className="container">
        <div className="row explore-main">
          <div className="col-sm-12">
            <h3>Sobre Nosotros - Pasajebaratos.com</h3>
            <p className="mb-4 color-white">Pasajebaratos destaca como una entidad destacada en el ámbito de viajes y hotelería en Asia. Nuestra misión es facilitar al máximo todas las necesidades relacionadas con los viajes, gracias a nuestras sólidas alianzas comerciales y tecnología de vanguardia. Nos hemos convertido en el portal en línea de mayor crecimiento, proporcionando soluciones de alojamiento excepcionales que ofrecen a nuestros clientes una amplia variedad de ofertas en vuelos y hoteles.<br></br><br></br>

Con un equipo operativo las 24 horas del día, los 7 días de la semana, nos esforzamos por superar tus expectativas en términos de alojamiento y actividades de ocio, adaptándonos a tu presupuesto y horario. Reconocemos que viajar es una experiencia ineludible en la actualidad, ya sea por motivos laborales, investigativos, compromisos u ocio.
            </p>
          </div>
    
            </div>
          </div>
          </div>
      



        <section className="newsubs">
      <div className="container">
      <div className="row explore-main">
      <div className="col-sm-12 text-center">
       <h2>Comentarios de los clientes</h2>
       <p className="mb-4">Con nuestras ofertas de vuelos exclusivas, es hora de llegar a los lugares de tus sueños.</p>
          </div>

         <div className="col-md-4 mt-2">
        <div className="ccontent">
        <p>Descubrí que el sitio era muy fácil de usar y solicité mis vacaciones con ellos cuando llegaron a acuerdos sobre precios de aerolíneas. Estaba interesado y volvería a su sitio en el futuro.</p>
        <p><strong>David</strong> : Los Angeles</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="ccontent">
        <p>&quot;Como viajero habitual, he visto una buena cantidad de ofertas especiales en pasajes aéreos, pero nada iguala los increíbles ahorros que acabo de encontrar en Travelocity.</p>
        <p><strong>Charlotte</strong> : France</p>
        </div>
        </div>

        <div className="col-md-4 mt-2">
        <div className="ccontent">
        <p>¡Qué aventura tan increíble que he experimentado jamás! Una cena notable en el gol que nos permitió probar la fuerza de cada gol nos destruyó.</p>
        <p><strong>Ebadat Borna</strong> : New York</p>
        </div>
        </div>
                      
               
                </div>
                </div>
                 </section>
      
 



          
        
    </>
  );
};

export default Home;
