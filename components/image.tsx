export enum ImageSizes {
  ExtraSmall = 250,
  Small = 500,
  Medium = 1000,
  Large = 1500,
  ExtraLarge = 2000,
}

export const srcWidth = (src: string, width: string | number) => {
  // Don't add resize on images from public folder
  if (src.startsWith('/')) return src;

  return `${src}?width=${width}&upscale=false`;
};

const srcSet = (src, sets) =>
  sets ? sets.map((size) => `${srcWidth(src, size)} ${size}w`) : false;

const Image = ({
  maxWidth = ImageSizes.Large,
  eager = false,
  width,
  height,
  src,
  alt,
  srcSet: sets,
}) => {
  return (
    <>
      <img
        src={srcWidth(src, maxWidth)}
        alt={alt}
        srcSet={Array.isArray(sets) ? srcSet(src, sets) : sets}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'} // https://web.dev/native-lazy-loading/
      />
    </>
  );
};

export default Image;
