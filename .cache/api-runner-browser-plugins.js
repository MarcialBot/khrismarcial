module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-identity-widget/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://khrismarcial.com/"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":2048},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"/Users/khristianmarcial/Projects/khrismarcial/src/cms/cms.js"},
    }]
