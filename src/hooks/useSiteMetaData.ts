import { graphql, useStaticQuery } from 'gatsby';

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author?: string;
      image?: string;
      siteUrl?: string;
      twitterUsername?: string;
    };
  };
};

export const useSiteMetadata = () => {
  const data = useStaticQuery<QueryTypes>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          twitterUsername
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
