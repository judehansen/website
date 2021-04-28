{
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jude Hansen',
        short_name: 'Jude',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#222222',
        display: 'standalone',
        icon: 'images/favicon.png', // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      }
    },
    'gatsby-plugin-offline'
  ]
}