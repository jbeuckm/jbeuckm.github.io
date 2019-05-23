import forge from "mappersmith"
import EncodeJson from "mappersmith/middleware/encode-json"

export default forge({
  clientId: "joes-blog",
  host: "",
  middleware: [EncodeJson],
  resources: {
    Post: {
      list: { path: "/feed-1.json" }, // process.env.POSTS_ENDPOINT
    },
  },
})
