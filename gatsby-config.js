/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-theme-blog`,
    `gatsby-plugin-theme-ui`,
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `Adventures in code and climbing`,
    // Used to provide alt text for your avatar
    author: `Mikel King`,
    // Used for SEO
    description: `A site where Mikyo explains his thoughts`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/mikeldking`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/mikeldking`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/mikeldking/`,
      },
    ],
  },
}
