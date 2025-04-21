import { useEffect } from "react";
import Head from "next/head";

const GoogleTag = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-1DBVNSX5RX";
    script.async = true;
    // script2.src = "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    // script2.async = true;

    // Load the scripts after the initial rendering
    document.body.appendChild(script);
    document.body.appendChild(script2);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-1DBVNSX5RX");
      gtag("config", "AW-16451480682");

      gtag("config", "AW-16484054720/0Q_-CIK0v5sZEMDtmrQ9", {
        phone_conversion_number: "+1 (888) 338-6436",
      });
    };

    // Clean up the script element when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTag;
