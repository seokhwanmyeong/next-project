import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Document() {
  const rootState = useRouter();
  console.log(rootState);
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ypiwp561ux&submodules=geocoder"
        />
        <Script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ypiwp561ux&submodules=drawing" />
      </body>
    </Html>
  );
}
