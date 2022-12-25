import { graphql, useStaticQuery } from 'gatsby';

type SiteMetaData = {
  title: string;
  description: string;
  author?: string;
  image?: string;
  siteUrl?: string;
  twitterUsername?: string;
};

type QueryTypes = {
  site: {
    siteMetadata: SiteMetaData;
  };
};

export const useSiteMetadata = (): SiteMetaData => {
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
