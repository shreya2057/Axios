import { axios_instance } from "../firebase/Instance";

// put method -> The put() method is used to send an HTTP PUT request to 
//               specified URL to update or create a resource with the 
//               provided data.
//            -> This method is commonly used for updating existing data
//               creating new resources when the resource identifier is 
//               known in advance.
//            -> instance.put(`url/${resource_identifier}`, {data:data})
//               .then(response=>{})
//               .catch(error=>{})

// patch method -> The axios.patch() method is used to send an HTTP PATCH 
//                 request to the specified URL, typically used to update 
//                 a resource partially rather than replacing it entirely. 
//              -> This method is suitable for making changes to specific 
//                 fields or attributes of a resource without altering the 
//                 entire resource.
//              -> axios.patch(`url/${resourceId}`, {data:data})

const update_task = async(task_name, task_id, date, event)=>{
    event.preventDefault();
    var data = {
        task: task_name,
        date: date
    };
    await axios_instance.put(`/tasks/${task_id}.json`, data)
    .then(response=>alert(response.status))
    .catch(error=>alert(error));
}

export {update_task};