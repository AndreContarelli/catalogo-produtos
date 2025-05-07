import { ProdutosProvider } from '../context/ProdutosContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProdutosProvider>
      <Component {...pageProps} />
    </ProdutosProvider>
  );
}

export default MyApp;