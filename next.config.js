module.exports = {
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
        source:"/api/post/getUser",
        destination:"http://localhost:5000/api/get/getUser"
      }
    ]
  },
}
