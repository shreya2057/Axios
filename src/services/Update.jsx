import { axios_instance } from "../firebase/Instance";

const update_task = async(task, event)=>{
    event.preventDefault();
    // await axios_instance
    alert(task)
}

export {update_task};