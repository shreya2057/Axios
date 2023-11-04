import { axios_instance } from "../firebase/Instance";

const update_task = async(task_name, task_id, date, event)=>{
    event.preventDefault();
    var data = {
        task: task_name,
        date: date
    }
    await axios_instance.put(`/tasks/${task_id}.json`, data)
    .then(response=>alert(response.status))
    .catch(error=>alert(error))
}

export {update_task};