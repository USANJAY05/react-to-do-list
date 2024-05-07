const apiRequest=async(url="",method=null,errMsg=null)=>{
    try{
        const response=await fetch(url,method)
        if(!response.ok) throw Error("Data Not found")
    }
    catch(err){
        errMsg=err.Message
    }
    finally{
        return errMsg
    }
}
export default apiRequest