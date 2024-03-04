import { useEffect } from "react";
import Head from "next/head";

const GoogleTag = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16451480682";
    script.async = true;
    // Load the scripts after the initial rendering
    document.body.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      // gtag("config", "G-L7W0F3WF5V");
      gtag("config", "AW-16451480682");

      gtag('config', 'AW-16451480682/aMQ4CL_AhZIZEOrY1qQ9', {
        'phone_conversion_number': '+1 (855) 786-1050'
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
