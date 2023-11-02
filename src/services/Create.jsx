import { axios_instance } from "../firebase/Instance";

// post method -> The post method in Axios is used to send HTTP POST 
//                requests to a server or API endpoint. 
//             -> This method allows to send data to the server, 
//                often used to create or update resources on the server.
//             -> instance.post('/url.json'data)
//                .then((response)=>{})
//                .catch((error)=>{})


// '/url.json' -> represents a hypothetical URL endpoint where request made 
//                to an API is in JSON format.
//             -> Typically, when working with APIs that return JSON data, 
//                the URL might end with .json to indicate that the 
//                response will be in JSON format.

const createTask = async(event, task, date)=>{
    const data = {
        Task: task,
        date: date
    }
    event.preventDefault();

    // post method
    await axios_instance.post("/tasks.json", data)
    .then((response)=>alert(response.status))
    .catch((error)=>alert(error))
};

export {createTask}