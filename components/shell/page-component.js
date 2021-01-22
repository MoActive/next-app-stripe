import Navigation from '../modules/navigation';

const PageComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
};

export default PageComponent;
