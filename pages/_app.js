import '../styles/globals.css'
import Header from '../components/Header';
import { FavContextProvider } from '../firebase/FavoritesContext';


function MyApp({ Component, pageProps }) {
  return (
    <FavContextProvider>
      <Header />
      <Component {...pageProps} />
    </FavContextProvider>
  )
}

export default MyApp
