import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

const SEO = ({ title, desc, banner, pathname, article }) => (
  <StaticQuery
    query={query}
    // tslint:disable-next-line jsx-no-lambda
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleAlt,
          shortName,
          author,
          siteLanguage,
          logo,
          siteUrl,
          pathPrefix,
          defaultDescription,
          defaultBanner,
        },
      },
    }) => {
      const seo = {
        description: defaultDescription || desc,
        image: `${siteUrl}/${banner || defaultBanner}`,
        title: title || defaultTitle,
        url: `${siteUrl}${pathname || '/'}`,
      };
      const realPrefix = pathPrefix === '/' ? '' : pathPrefix;
      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@id': siteUrl,
          '@type': 'WebSite',
          alternateName: titleAlt || '',
          name: defaultTitle,
          url: siteUrl,
        },
      ];
      if (article) {
        schemaOrgJSONLD = [
          {
            '@context': 'http://schema.org',
            '@id': seo.url,
            '@type': 'BlogPosting',
            alternateName: titleAlt || '',
            author: {
              '@type': 'Person',
              name: author,
            },
            dateModified: buildTime,
            datePublished: buildTime,
            description: seo.description,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              '@id': siteUrl,
              '@type': 'WebSite',
            },
            name: title,
            publisher: {
              '@type': 'Organization',
              logo: {
                '@type': 'ImageObject',
                url: siteUrl + realPrefix + logo,
              },
              name: author,
            },
            url: seo.url,
          },
        ];
	  }
      return (
        <>
          <Helmet title={seo.title}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

            {/* OpenGraph  */}
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={article ? 'article' : null} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        titleAlt
        shortName
        author
        siteLanguage
        logo
        siteUrl: url
        pathPrefix
        defaultDescription: description
        defaultBanner: banner
      }
    }
  }
`;
