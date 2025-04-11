import React from "react";
import Head from "next/head";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";
import Undercuttingbanner from "./components/shared/Undercuttingbanner";
import { phoneNumber } from "@/constant/headerConstant";
import SearchForm from "./components/shared/Searchform";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>{"Expedia"}</title>
      </Head>

      <div className="mob_section mt-5">
        <div className="air_spacial_phone_view">
          <Link href={`tel:${phoneNumber}`}>
            <div className="air_spacial_main">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="air_logo_area">
                      <LazyImage
                        className="logo-img mb-2 mt-2"
                        alt="ex"
                        src={`/expedia.png`}
                        layout="responsive"
                      />
                    </div>
                    <div className="air_spacial_middle">
                      <h4>Vuelos Baratos Boleto de avión</h4>
                      <h6>
                        <LazyImage src={`/plane_new.png`} layout="responsive" />
                      </h6>
                    </div>
                    <div className="list_ii">
                      <ul class="toll_booking">
                        <li>
                          <i
                            className="fa fa-check-square"
                            aria-hidden="true"
                          ></i>{" "}
                          Nueva reserva 100 $ de descuento
                        </li>
                      </ul>
                      <h4 className="mt-3">Todas las rutas Vuelos Baratos</h4>
                      <div className="banner_number mt-5 pb-5">
                        <p>
                          <i className="fas fa-phone-alt"></i>
                          {phoneNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <SearchForm reset={true} backGroundImage={"/slider.jpg"} />

      <div className="container-xl inner-page">
        <div className="col-12 mt-5">
          <h2>We also provide support for Expedía customers</h2>

          <p>
            We are pasajebaratos.com‘, an airlines reservations agency. We also
            provide support for Expedia customers and we help you to book
            Un-published airlines Fares for New Reservations, Airlines Ticket
            Changes, Airlines Ticket Cancellations & Customer Service with no
            hold time over the call. Reason of supporting Expedia Customers is a
            long time hold on Expedia Support Desk, We want to save your time
            infact you pay something to Expedia for their services so you pay us
            the same if we solve your issues. We Assure that you can call us now
            to get an Agent Available. We have Major airlines fares and discount
            deals on Domestic and International flights. You can contact us and
            call for 24/7 Support. You can call for Tickets Booking, Manage
            Booking, Ticket Cancellation, and Customer Service. We have Phone
            Only Offers and call answer in Seconds. We provide amazing flight
            deals at the last minute on all airlines. You can add travelers. We
            are now available as a travel agency and we also help customers on
            behalf of other travel agencies like Expedía but please note that we
            are not affiliate with other travel agencies and airlines. You can
            call us now for Exclusive Fare Deals.
            <br />
            Our target audience are people who are looking for Expedía Support
            and un-published fares and new reservations, changes, cancellations
            & customer service. Our unique selling points are over the call for
            you with no hold time and our 24/7 customer support.
          </p>
          <br />

          <h2>
            As a travel agency we try to help air travelers for book, manage,
            cancel their flight.
          </h2>
          <h5>
            <i>Best search terms to find us on google search engine.</i>
          </h5>
        </div>
      </div>
    </>
  );
};

export default About;
