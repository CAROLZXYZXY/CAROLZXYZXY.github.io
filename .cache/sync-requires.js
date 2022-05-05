const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/carol/Desktop/CAROLZXYZXY.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/carol/Desktop/CAROLZXYZXY.github.io/src/pages/404.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/carol/Desktop/CAROLZXYZXY.github.io/src/templates/page.js")))
}

