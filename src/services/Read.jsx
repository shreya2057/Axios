import { axios_instance } from "../firebase/Instance"

// get method -> the GET method is used to perform HTTP GET requests to 
//               fetch data from a specified URL. 
//           -> It is one of the HTTP methods supported by Axios for making 
//              requests to a server or an API endpoint.
//             -> instance.get('/url.json')
//                .then((response)=>{})
//                .catch((error)=>{})

const read_data = async()=>{
    try{
        var response = await axios_instance.get("/tasks.json")
        return response.data
    } catch(error){
        alert(error)
    } 
}

export {read_data}