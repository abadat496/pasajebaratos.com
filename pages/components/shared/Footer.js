import React, { useEffect, useState } from "react";
import Link from "next/link";
import { callIcon, phoneNumber } from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";

const Footer = ({ langData }) => {
  
  return (
    <>
   


      <div className="container-fluid footer-bg pb-5 pt-5 mt-5">
        <div className="container-lg">
          <div className="row">

          <div className="col-12 col-sm-12 col-lg-6 col-xl-6 mt-4 top-margin">
              <h6>{langData?.Disclaimer} :</h6>
              <p>{langData?.Disclaimer1}
                <br></br>
                {langData?.Disclaimer2}
              </p>
            
            </div>



            <div className="col-12 col-sm-6 col-lg-3 col-xl-3 top-margin">
              <h6>{langData?.quickLink}</h6>
              <ul>
                {langData?.quickLinks?.map((link, index) => (
                  <li key={index}> 
                    <Link href={`${link.path}`}> <i className="fa-solid fa-arrow-right"></i> {link.label}</Link>
                  </li>
                ))}
              </ul>
              
            </div>


            <div className="col-12 col-sm-6 col-lg-3 col-xl-3 top-margin">
            <h6>{langData?.contactInfo}</h6>
              <ul>
                 <li><a href={`tel:${phoneNumber}`}><i className="fa-solid fa-phone-volume"></i> {phoneNumber}</a></li>
                 <li><a href="mailto:Support@flyhelpdesk.com"><i className="fa-regular fa-envelope"></i> Support@flyhelpdesk.com</a></li>

                 <li><i className="fa-solid fa-map-location-dot"></i> 306 alvin road , Glen Col - 4532  USA</li>
              </ul>
              
            </div>

           
               

           

            <div className="col-12 col-lg-4">
            <div className="payment_icon">
              <ul>
              <li><LazyImage 
                src="/icons-p10.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>
              <li><LazyImage 
                src="/icons-p7.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>

              <li><LazyImage 
                src="/icons-p11.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>


                <li><LazyImage 
                src="/icons-p12.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>


                <li><LazyImage 
                src="/icons-p9.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>


                <li><LazyImage 
                src="/icons-p8.png"
                className="img-fluid"
                alt=""
                imageSizes={32}
                width={50}
                height={30}
              /></li>

              </ul>
              </div>
          </div>
           {/* <div className="col-12 col-lg-3">
         <Link href={"#"}>
          <LazyImage 
                src="/trustpilot.png"
                className="img-fluid trst"
                alt=""
                imageSizes={32}
                width={128}
                height={22}
              /> 
</Link>
               
          </div> */}

        

          </div>
        </div>
      </div>




      <div className="container-fluid footer-bottom">
        <div className="container-lg footer-border">
          <div className="row">
            <div className="col-12 col-lg-12">
              <p>Derechos de autor &copy; 2024 pasajebaratos.com. Reservados todos los derechos. (PARENT COMPANY :  Skyflydeals Private Limited - skyflydeals.com)</p>
            </div>  
            

           

          </div>
        </div>
      </div>

      <div className="fixed-bottom call-bg d-block d-md-block d-lg-none">
        <Link href={`tel:${phoneNumber}`} >
          {/* <p>Llama ahora</p> */}
          <h4><i class="fa-solid fa-phone-volume iconleft blink"></i> {phoneNumber}</h4>
        </Link>
      </div>



    </>
  );
};

export default Footer;
