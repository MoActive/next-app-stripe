import Navigation from '../modules/navigation';

const PageComponent = ({ Component, pageProps }) => {
  return (
    <div className='container'>
      <Navigation />
      <section className='is-full-height'>
        <Component {...pageProps} />
      </section>
    </div>
  );
};

export default PageComponent;
