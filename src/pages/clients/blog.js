import forge from 'mappersmith'
import EncodeJson from 'mappersmith/middleware/encode-json'

export default forge({
  clientId: 'strapi',
  //  host: 'http://localhost:1337', //process.env.SERVICE_API,
  host: 'https://jbeuckm.github.io',
  middleware: [EncodeJson],
  resources: {
    Post: {
      // list: { path: '/articles' }, // process.env.POSTS_ENDPOINT
      list: { path: '/feed-1.json' }, // process.env.POSTS_ENDPOINT
    },
  },
})
