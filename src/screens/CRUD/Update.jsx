import { useState } from "react";
import { update_task } from "../../services/Update";
import NavBar from "../Components/NavBar";
import { axios_instance } from "../../firebase/Instance";

function Update(){
    var [task, setTask] = useState("")
    var [oldDate, setOldDate] = useState("End Date of task")
    async function get_current_data(event){
        event.preventDefault();
        var response = await axios_instance.get("/tasks.json");
        var data = response.data
        for(var task_id in data){
            console.log(data[task_id].Task)
        }
        console.log(response.data);

    }
    return <div className="bg-slate-600 h-screen w-full">
        <NavBar/>
        <div className="my-12 mx-72">
            <h1 className="text-2xl font-bold text-white">Update Task</h1>
            <form className="block w-min">
                <div className="block p-5 w-min">
                    <label className="font-bold">Task</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72" 
                            placeholder="Enter the task name" 
                            type="text"
                            onChange={(event)=>setTask(event.target.value)}
                            onBlur={(event)=>get_current_data(event)}
                        />
                    </div>
                </div>
                <div className="block p-5 w-min">
                    <label className="font-bold">End Date</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72 text-slate-500" 
                            disabled 
                            value={oldDate} 
                            type="text"
                        />
                    </div>
                </div>
                <div className="block p-5">
                    <label className="font-bold">New End Date</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72"
                            type="date"/>
                    </div>
                </div>
                <div className="border m-5 w-min">
                    <button 
                        className="m-0.5 px-5 py-3 border rounded-sm bg-gray-300 w-32"
                        onClick={(event)=>update_task(task,event)}
                    >
                        Update Task
                    </button>
                </div>
            </form>
        </div>
        
    </div>
}

export default Update;