import general from '@content/general';

export interface MetaInformation {
  title: string;
  description: string;
  image: string;
  keywords: string;
}

const MetaInfo = ({title, description, image}: MetaInformation) => {
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content={general.twitterName} />
      <meta name="twitter:creator" content={general.twitterName} />

      <meta name="twitter:image:alt" content={description} />
      <title>{title}</title>
    </>
  );
};

export default MetaInfo;
