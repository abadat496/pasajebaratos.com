import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { phoneNumber, popupImage } from "@/constant/headerConstant";
import { flights } from "@/constant/flight";
import LazyImage from "../ui/LazyImage";

const Homepop = () => {
  const [hide, setHide] = useState(true);
  const handleClose = () => setHide(true);
 
  const router = useRouter();
 
 
  useEffect(() => {
     if (router.pathname === '/' ) {
      setInterval(() => {
        setHide(false);
      }, 3000);
     } else {
      setHide(true);
    }
  }, [router]);



  return (
   <div className="pupupnone">
      <div
        className="modal fade show custompopup"
        aria-modal="true"
        style={{ display: hide ? "none" : "block" }}
      >
       <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content pt-0">
							<div className="modal-footer border-0">
								<button type="button " className="btn btn-secondary btnModal" onClick={handleClose} data-bs-dismiss="modal"><i className="fa fa-close " aria-hidden="true"></i></button>
							</div>
							<div className="modal-body class-modal">
		  <div className="pop-up-new-sec">
			<section className="banner-view2">
			  <a href={`tel:${phoneNumber}`}>
				<div className="container">
				  <div className="col-md-4 bg_dark_box pop-up-content-box">
					<h2>Llame al mostrador de reservas de aerolíneas</h2>
				  
					<h1> 24/7 reservations &amp; support </h1>
					<ul className="list-view-items">
					  <li> Tickets Booking </li>
					  <li> Manage Booking </li>
					  <li> Cancellation </li>
					  <li> Customer Service </li>
					  <li> Changes </li>
					</ul>
					 
					  <LazyImage
						className="plane-image"
						alt="plane"
						src={`/plane2.jpg`}
						layout="responsive"
					  />
					
					<LazyImage
					  className="calling-cus-img"
					  src={`/call.png`}
					  alt="calling-cus"
					/>
					<div className="exbt_cl">
					  <h5>
						<i className="fa-solid fa-phone-volume"></i>
						<span> Phone Only Offers </span>
						{phoneNumber}
					  </h5>
					  <h3> Call Answer in Seconds</h3>
					</div>
				  </div>
				</div>
			  </a>
			</section>
		  </div>
		</div>
						</div>
        </div>
      </div>
    </div>
  );
};

export default Homepop;
