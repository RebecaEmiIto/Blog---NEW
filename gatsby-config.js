module.exports = {
  siteMetadata: {
    title: "NEW",
    author: "Natalia Kaneshima, Rebeca Ito, Wellington Endo",
 
  },

    plugins: [
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      },
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options:{
          plugin: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options:{
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    ]
  }
