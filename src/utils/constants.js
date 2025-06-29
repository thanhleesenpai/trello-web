let apiRoot = ''

//console.log('import.meta.env', import.meta.env)
//console.log('process.env', process.env)

if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
}
else if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://trello-api-73hs.onrender.com'
}
//console.log('🚀 ~ apiRoot:', apiRoot)

export const API_ROOT = apiRoot
