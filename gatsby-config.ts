import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Iqan Shaikh`,
    siteTitleAlt: `Iqan Shaikh`,
    siteHeadline: `Iqan Shaikh - Sr. Consultant - .NET, Azure, AWS, DevOps`,
    siteUrl: `https://iqans.com`,
    siteDescription: `Consultation for cloud native applications, DevOps and mobile application development`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@iqan_shaikh`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: { },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Iqan Shaikh`,
        short_name: `Iqan`,
        description: `Consultation for cloud native applications, DevOps and mobile application development`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
        //   {
        //     src: `/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
