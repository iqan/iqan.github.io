const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Iqan Shaikh', // Navigation and Site Title
  siteTitleAlt: 'Iqan Shaikh', // Alternative Site title for SEO
  siteTitleShort: 'Iqan', // short_name for manifest
  siteHeadline: 'Iqan Shaikh - Consultant - Azure, .NET, Flutter', // Headline for schema.org JSONLD
  siteUrl: 'https://iqans.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription:
    'Consultation for cloud native applications, website and mobile application development',
  author: 'Iqan Shaikh', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@iqanshaikh', // Twitter Username
  ogSiteName: 'iqan12', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
