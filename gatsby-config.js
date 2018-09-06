module.exports = {
  siteMetadata: {
    title: 'Yoshie Abe | Real Estate',
    description: "Yoshie Abe is a top real estate agent in New Jersey specializing in residential and commercial real estate for buyers, sellers and investors. Yoshie is an agent with Group26 Realty.",
    keywords: "new jersey real estate, real estate, nj homes, nj, yoshie abe, real estate agent, north new jersey"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
