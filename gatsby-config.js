/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./src/utils/site.tsx');

module.exports = {
  siteMetadata: {
 ...config,
  },
  plugins: [
  	'gatsby-plugin-sass',
  	'gatsby-plugin-typescript',
  	'gatsby-plugin-tslint',
  	'gatsby-plugin-catch-links',
  	'gatsby-transformer-remark',
  	  {
  	  	resolve: 'gatsby-source-filesystem',
  	  	options: {
  	  		name: 'projects',
  	  		path: `${__dirname}/content/projects`
  	  	}
  	  },
  	'gatsby-transformer-sharp',
  	  {
  	  	resolve: 'gatsby-transformer-remark',
  	  	options: {
  	  		plugins: [
	  	  		{
		  	  		resolve: 'gatsby-remark-images',
		  	  		options: {
		  	  			maxWidth: 750,
		  	  			quality: 90,
		  	  			linkImagesToOriginal: true,
		  	  		}
	  	  		}
  	  		]
  	  	}
  	  },
  	'gatsby-plugin-sharp',
  	  {
  	  	resolve: 'gatsby-plugin-typography',
  	  	options: {
  	  		pathToConfigModule: 'src/utils/typography',
  	  	}
  	  },
  	'gatsby-plugin-sitemap',
	    {
	      resolve: 'gatsby-plugin-manifest',
	      options: {
	        name: config.title,
	        short_name: config.shortName,
	        description: config.description,
	        start_url: config.pathPrefix,
	        background_color: config.backgroundColor,
	        theme_color: config.themeColor,
	        display: 'standalone',
	        icon: config.favicon,
	      },
	    },
 		'gatsby-plugin-offline',
	 		{
	      resolve: `gatsby-plugin-google-analytics`,
	      options: {
	        trackingId: "UA-99131594-1",
	        // Defines where to place the tracking script - `true` in the head and `false` in the body
	        head: false,
	        // Delays sending pageview hits on route update (in milliseconds)
	        pageTransitionDelay: 0,
	      },
	    },
	  `gatsby-plugin-react-helmet`,
  ]
}
