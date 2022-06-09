import "../styles/globals.css";
import type { AppProps } from "next/app";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={configureStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
