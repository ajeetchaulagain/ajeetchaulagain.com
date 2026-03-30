import React, { ReactNode } from 'react';
import { useSiteMetadata } from 'hooks/useSiteMetaData';
import { Helmet } from 'react-helmet';

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  type?: 'website' | 'article';
  children?: ReactNode;
};

export const SEO = ({
  title,
  description,
  pathname,
  image: propImage,
  type = 'website',
  children,
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: propImage ?? `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={type} />
      <link rel="canonical" href={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta
        id="test"
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
      />

      <link rel="icon" type="image/svg+xml" href="/logo-fav.svg" />
      {children}
    </Helmet>
  );
};
