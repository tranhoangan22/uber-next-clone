import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";

// this wraps around all the page components
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
