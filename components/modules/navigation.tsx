import Link from 'next/link';
import Image from '../image';

export enum ImageSizes {
  ExtraSmall = 250,
  Small = 500,
  Medium = 1000,
  Large = 1500,
  ExtraLarge = 2000,
}

const Navigation = () => {
  return (
    <div className='navigation'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link href='/'>
            <a className='navbar-item'>
              <Image
                src='https://bulma.io/images/bulma-logo.png'
                alt="Logo"
                srcSet={[ImageSizes.Small, ImageSizes.Medium]}
                eager={false}
                width='200'
                height='200'
              />
            </a>
          </Link>

          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
