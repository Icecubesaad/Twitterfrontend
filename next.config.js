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
        source:"/api/get/getAllTweet",
        destination:"http://localhost:5000/api/get/getAllTweet"
      },
      {
        source:"/api/get/getTweet/:id",
        destination:"http://localhost:5000/api/get/getTweet/:id"
      }
    ]
  },
}
