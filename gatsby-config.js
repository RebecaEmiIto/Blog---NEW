module.exports = {
  siteMetadata: {
    title: "NEW",
    author: "Natalia Kaneshima, Rebeca Ito, Wellington Endo",
 
  },

    plugins: [
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
