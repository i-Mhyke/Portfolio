import Providers from "../components/Providers";
import "../styles/tailwind.scss";
import "tailwindcss/utilities.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
