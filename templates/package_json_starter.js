module.exports = 
`
{
  "name": "{-{}-}",
  "version": "1.0.0",
  "description": "{-{}-}",
  "main": "app.js",
  "private": {-{}-},
  "scripts": {
  	{-{anyCliScrips}-}
  },
  "repository": {
    "type": "git",
    "url": "git+{-{finds_and_uses_github_link}-}"
  },
  "author": "{-{userName}-}",
  "license": "MIT",
  "devDependencies": {
    "claudia": "3.2.0" *will fetch most recent claudia version
  },
  "dependencies": {
    "claudia-api-builder": "3.0.0" *will fetch most recent claudia-api-builder version
  }
}
`;