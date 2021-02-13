import Link from 'next/link';

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
          <Link href='/'>
            <button className='button is-primary mr-2'>Go to frontpage</button>
          </Link>
          <Link href='/'>
            <button className='button is-info'>Go to card</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
