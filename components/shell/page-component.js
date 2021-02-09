import Navigation from '../modules/navigation';

const PageComponent = ({ Component, pageProps }) => {
  return (
    <section className='section'>
      <div className='container'>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </section>
  );
};

export default PageComponent;
