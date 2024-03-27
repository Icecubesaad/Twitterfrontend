
const fetchUserDetails=async(token)=>{
    const request=await fetch("/api/get/getUser",{
        method:"GET",
        headers:{
            "token":token
        }
    })
    const response=await request.json()
    return response
}
export default fetchUserDetails