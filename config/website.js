const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/',

  siteTitle: 'Iqan Shaikh',
  siteTitleAlt: 'Iqan Shaikh',
  siteTitleShort: 'Iqan',
  siteHeadline: 'Iqan Shaikh - Sr. Consultant - Azure, .NET, Flutter',
  siteUrl: 'https://iqans.com',
  siteLanguage: 'en',
  siteLogo: '/logo.png',
  siteDescription:
    'Consultation for cloud native applications, website and mobile application development',
  author: 'Iqan Shaikh',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@iqanshaikh', // Twitter Username
  ogSiteName: 'iqanshaikh', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
