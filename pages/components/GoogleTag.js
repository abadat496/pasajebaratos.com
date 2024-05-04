import { useEffect } from "react";
import Head from "next/head";

const GoogleTag = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16451480682";
    script.async = true;
    script2.src = "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script2.async = true;

    script2.onload = () => {
      const wa_btnSetting = {
        "btnColor": "#16BE45",
        "ctaText": "",
        "cornerRadius": 40,
        "marginBottom": 50,
        "marginLeft": 10,
        "marginRight": 10,
        "btnPosition": "right",
        "whatsAppNumber": "+18585854484",
        "welcomeMessage": "”🌟 Welcome to Travel Desk ! 🌟 Get set to discover amazing deals ? Explore Flights & Hotels hassle-free with us! ✈️🏨  Tab to start your journey! 🌍✨",
        "zIndex": 999999,
        "btnColorScheme": "light"
      };
  
      if (typeof _waEmbed === 'function') {
        _waEmbed(wa_btnSetting);
      }
    };
    // Load the scripts after the initial rendering
    document.body.appendChild(script);
    document.body.appendChild(script2);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      // gtag("config", "G-L7W0F3WF5V");
      gtag("config", "AW-16451480682");

      gtag('config', 'AW-16484054720/0Q_-CIK0v5sZEMDtmrQ9', {
        'phone_conversion_number': '+1 855 585 2324'
    
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
