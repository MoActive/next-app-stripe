import { Client, createClient } from 'contentful';
import Link from 'next/link';

const HomePage = (props) => {
  const { products } = props;

  console.log(products);

  return (
    <div>
      <h1>Home page</h1>

      {products.map((product, i) => {
        const image = product.image?.fields;
        return (
          <div key={product.slug}>
            <Link href={product.slug}>
              <a>
                <h2>{product.title}</h2>
              </a>
            </Link>
            <img src={image?.file.url} />
          </div>
        );
      })}
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
