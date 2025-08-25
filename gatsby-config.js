/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `pappaso`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\\:400,700`, // Specifies Roboto with weights 400 and 700
          `Open Sans`,
          `Ojuju`      // Specifies Open Sans with default weights
        ],
        display: 'swap', // Optional: Controls font display behavior
      },
    },
  ],
};