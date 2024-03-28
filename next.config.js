module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: "/api/post/checkUser",
        destination: "http://localhost:5000/api/post/checkUser",
      },
      {
        source:"/api/post/checkusername",
        destination:"http://localhost:5000/api/post/checkusername"
      }
      ,
      {
        source:"/api/post/Register",
        destination:"http://localhost:5000/api/post/Register"
      },
      {
        source:"/api/post/login",
        destination:"http://localhost:5000/api/post/login"
      }
      ,
      {
        source:"/api/get/getUser",
        destination:"http://localhost:5000/api/get/getUser"
      },
      {
        source:"/api/post/tweet",
        destination:"http://localhost:5000/api/post/tweet"
      },
      {
        source:"/api/post/comment/:id",
        destination:"http://localhost:5000/api/post/comment/:id"
      },
      {
        source:"/api/get/getComments/:id",
        destination:"http://localhost:5000/api/get/getComments/:id"
      },
      {
        source:"/api/get/getAllTweet",
        destination:"http://localhost:5000/api/get/getAllTweet"
      },
      {
        source:"/api/get/getTweet/:id",
        destination:"http://localhost:5000/api/get/getTweet/:id"
      },
      {
        source:"/api/get/getComment/:id",
        destination:"http://localhost:5000/api/get/getComment/:id"
      },
      {
        source:"/api/post/like/:id/:type",
        destination:"http://localhost:5000/api/post/like/:id/:type"
      }
      ,
      {
        source:"/api/get/whoToFollow",
        destination:"http://localhost:5000/api/get/whoToFollow"
      }
    ]
  },
}
