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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.edges.map(edge => {
                return Object.assign({
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                })
              })
            },
            query: `
              {
                allBlogPost(sort: {order: DESC, fields: [date]}) {
                  edges {
                    node {
                      excerpt
                      title
                      slug
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Mikel King's Blog Feed",
          },
        ],
      },
    },
  ],
  siteMetadata: {
    siteUrl: `https://www.mikeldking.com`,
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
