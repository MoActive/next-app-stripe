const ErrorPage = () => {
  return (
    <div className='is-full-height is-flex align-items is-align-items-center is-flex-direction-column is-justify-content-center'>
      <div className='columns'>
        <div className='column has-text-centered'>
          <h1 className='is-size-1'>Page not found</h1>
        </div>
      </div>
      <div className='columns'>
        <div className='column has-text-centered'>
          <button className='button is-primary mr-2'>Go to frontpage</button>
          <button className='button is-info'>Go to card</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
