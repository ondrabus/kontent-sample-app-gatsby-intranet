module.exports = {
  siteMetadata: {
    title: `Dashboard`,
    author: `Ondřej Chrastina`,
    description: `Showcase of Kentico Cloud Intranet admin UI using Material design and Gatsby.`,
    siteUrl: `https://cloud-sample-app-intranet-gatsby.netlify.com/`,
    social: {
      twitter: `ChrastinaOndrej`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: 'gatsby-source-kentico-cloud',
      options: {
        deliveryClientConfig: {
          projectId: `c1e58c74-a9f7-0130-3b7f-8282cd6ab908`,
          typeResolvers: [],
        },
        languageCodenames: ['default', 'cz'],
      },
    },
  ],
};
