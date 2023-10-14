import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        id="gtag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-258548AAAA"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-01WX4N78VD');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
