import { Client, createClient } from 'contentful';
import Link from 'next/link';

const HomePage = (props) => {
  const { products } = props;

  console.log(products);

  return (
    <div>
      <section className='section'>
        <h1>Home page</h1>
      </section>

      <section className='section'>
        <div className='columns'>
          {products.map((product, i) => {
            const image = product.image?.fields;

            return (
              <div className='column' key={product.slug}>
                <Link href={product.slug}>
                  <a>
                    <h2>{product.title}</h2>
                    {image && <img src={image?.file.url} />}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const client = createClient({
    space: space,
    accessToken: accessToken,
  });

  const fetchEntries = async () => {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  };

  const res = await fetchEntries();
  const products = await res.map((product) => {
    return product.fields;
  });

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
