
const fetchUserDetails=async(token)=>{
    console.log(token)
    const request=await fetch("/api/post/getUser",{
        method:"GET",
        headers:{
            "token":token
        }
    })
    const response=await request.json()
    return response
}
export default fetchUserDetails