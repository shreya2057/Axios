import { axios_instance } from "../firebase/Instance"

// delete method -> The delete method is used to send an HTTP DELETE 
//                  request to a specific URL, aiming to remove a resource 
//                  from the server.
//               -> instance.delete(`/url/${resource_id}`)

const delete_operation = async(task_id, event)=>{
    event.preventDefault();
    await axios_instance.delete(`/tasks/${task_id}.json`)
    .then(response=>alert(response.status))
    .catch(error=>alert(error));
};

export {delete_operation};