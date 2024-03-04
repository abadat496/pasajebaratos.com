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

     
      
      <div className="container">
          <div className="row explore-main mt-5">

        <div className="col-md-3 mb-4">
        <div className="ccontent">
       <span className="why_chose">
        <LazyImage width={80} height={80} src="/scure-1.png" /></span>
        <h3>Ahorrar dinero</h3>
        <p>Ahorro de dinero y ofertas especiales llamando <a href="{`tel:${phoneNumber}`}">{phoneNumber}</a></p></div></div>

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



      <div className="hotelmain mt-4">
      <div className="container">
        <div className="row explore-main">
          <div className="col-sm-12">
            <h2>Hoteles destacados</h2>
            <p className="mb-4">Estos atractivos destinos han sido elegidos solo para usted.</p>
          </div>

          <div className="col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/ho1.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <p className="text-center"><strong>Sheraton Vistana Resort Villas, Lake Buena Vista/Orlando</strong><br></br> <i className="fa-solid fa-location-dot"></i> 8800 Vistana Centre Drive, Orlando, FL - Disney Area - Lake Buena Vista East</p>
            </div>
          </div>

          <div className="col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/ho2.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <p className="text-center"><strong>DoubleTree by Hilton Hotel Orlando at SeaWorld</strong><br></br> <i className="fa-solid fa-location-dot"></i> 10100 International Drive, Orlando, FL - Intl. Drive - Convention Center - Sea World</p>
            </div>
          </div>


          <div className="col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/ho3.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <p className="text-center"><strong>Holiday Inn Resort Orlando Suites - Waterpark</strong><br></br> <i className="fa-solid fa-location-dot"></i> 14500 Continental Gateway, Orlando, FL - Disney Area - Lake Buena Vista East</p>
            </div>
          </div>



          <div className="col-sm-3 mb-4">
            <div className="hotel">
          <LazyImage
            src={"/ho4.jpg"} 
            className="card-LazyImage"
            layout="responsive"
            />
            <p className="text-center"><strong>Super 8 by Wyndham Orlando International Drive</strong><br></br> <i className="fa-solid fa-location-dot"></i> 5900 American Way, Orlando, FL - Universal Orlando Area - Intl. Drive North</p>
            </div>
          </div>


          </div>
          </div>
          </div>



      <div className="container-xl">
        <div className="row explore-main mt-5">
          <div className="col-sm-12">
            <h2>Tours populares</h2>
            <p className="mb-4">Hemos seleccionado algunas de las mejores ubicaciones en todo el mundo para usted.</p>
          </div>

            <div className="col-sm-4 flirightbox mb-4">
                <a href="#">
                  <div className="card">
                    <LazyImage
                      src="/d1.jpg"
                      alt="French Riviera"
                      layout="responsive"
                    />
                    <div className="card-img-overlay">
                    <h6 className="card-title">Spectaculars Of The Nile 3 Nights</h6>
                    <h5>Nile Egypt</h5>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-4 flirightbox mb-4">
                <a href="#">
                  <div className="card">
                    <LazyImage
                      src="/d2.jpg"
                      alt="French Riviera"
                      layout="responsive"
                    />
                    <div className="card-img-overlay">
                    <h6 className="card-title">6 Days Around Thailand</h6>
                    <h5>Thailand</h5>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-4 flirightbox mb-4">
                <a href="#">
                  <div className="card">
                    <LazyImage
                      src="/d3.jpg"
                      className="card-LazyImage"
                      alt="Dubai"
                      layout="responsive"
                    />
                    <div className="card-img-overlay">
                    <h6 className="card-title">Sydney and Bondi Beach Explorer</h6>
                    <h5>Sydney</h5>
                    </div>
                  </div>
                </a>
              </div>


              <div className="col-sm-4 flirightbox mb-4">
                <a href="#">
                  <div className="card">
                    <LazyImage
                      src="/d4.jpg"
                      className="card-LazyImage"
                      alt="Dubai"
                      layout="responsive"
                    />
                    <div className="card-img-overlay">
                    <h6 className="card-title">Dubai & the Desert - Dubai Combo Package </h6>
                      <h5>Dubai</h5>
                    </div>
                  </div>
                </a>
              </div>

             

              <div className="col-sm-4 flirightbox mb-4">
                <a href="#">
                  <div className="card">
                    <LazyImage
                      src="/d5.jpg"
                      className="card-LazyImage"
                      alt="Dubai"
                      layout="responsive"
                    />
                    <div className="card-img-overlay">
                    <h6 className="card-title">Planeta Hollywood Resort </h6>
                      <h5>Hollywood</h5>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-4 flirightbox mb-4">
                <a href="#">
                  <div className="card"> 
                    <LazyImage
                      src="/d6.jpg"
                      className="card-LazyImage"
                      alt="Dubai"
                      layout="responsive"
                    />
                    <div className="card-img-overlay">
                    <h6 className="card-title">Stunning Dubai </h6>
                      <h5>Dubai</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
      



        <section className="newsubs">
      <div className="container">
      <div className="row">
         <div className="col-md-4">
        <div className="ccontent">
       <span className="_sprite">
        <LazyImage width={80} height={80} src="/ticket-icon-1.png" /></span><h2>Con ofertas atractivas, ofrecemos reservas de vuelos sencillas y cómodas.</h2></div></div>

				<div className="col-md-4 mb-4">
        <div className="ccontent">
        <span className="_sprite">
        <LazyImage width={80} height={80} src="/deal-icon.png" /></span><h2>Prometemos reservas de hotel, paquetes de vacaciones y boletos de avión económicos.</h2></div></div>

				<div className="col-md-4 mb-4">
        <div className="ccontent">
        <span className="_sprite">
        <LazyImage width={80} height={80} src="/service-icon.png" /></span><h2>Obtén ayuda en todo momento para cualquier duda relacionada con viajes. Nos encanta ayudarte.</h2></div></div>
                      
               
                </div>
                </div>
                 </section>
      
 

         <div className="container-xl">
        <div className="row explore-main mt-5">
          <div className="col-sm-12">
            <h2 className="mb-4">Sobre Nosotros</h2>
            <p>boletosyofertas es una parte reconocida del sector de viajes y hotelería de Asia. Nuestro motivo es hacer que todas sus necesidades relacionadas con los viajes sean lo más fluidas posible a través de nuestros socios comerciales y tecnología de clase mundial. Somos el portal en línea de más rápido crecimiento que brinda increíbles soluciones de alojamiento que ofrecen a nuestros clientes una amplia selección de ofertas de vuelos y hoteles. Nuestro equipo trabaja 24 horas al día, 7 días a la semana para satisfacer tus expectativas en cuanto a hoteles y otras actividades de ocio que se ajusten a tu presupuesto y se ajusten al horario indicado. Entendemos que hoy en día viajar es algo que nadie puede evitar, ya sea por trabajo, investigación, obligaciones o diversión.</p>
          </div>

      

          </div>
          </div>


          
        
    </>
  );
};

export default Home;
