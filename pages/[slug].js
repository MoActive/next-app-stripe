import { Client, createClient } from 'contentful';
import ProductCard from '../components/modules/product-card';

const Slug = (props) => {
  console.log(props);
  const { product } = props;
  return (
    <section className="section">
      <ProductCard {...product} />
    </section>
  );
};

export const getStaticPaths = async () => {
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
  const paths = await res.map((product) => {
    return {
      params: {
        product: product,
        slug: product.fields.slug,
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const productName = context.params.slug;
  console.log('🚀 ~ getStaticProps ~ productName', productName);

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
  const product = res.find((product) => product.fields.slug === productName);

  return {
    props: {
      product: product.fields,
    },
  };
};

export default Slug;
