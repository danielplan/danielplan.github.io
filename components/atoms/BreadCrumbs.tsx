import general from '@content/general';

interface Props {
  breadcrumbs: {
    name: string;
    path: string;
  }[];
}

const BreadCrumbs = ({breadcrumbs}: Props): JSX.Element => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((breadcrumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,

          item: {
            '@id': general.baseUrl + breadcrumb.path,
            name: breadcrumb.name,
          },
        })),
      })}
    </script>
  );
};

export default BreadCrumbs;
