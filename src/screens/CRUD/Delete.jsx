import { useState } from "react";
import { delete_operation } from "../../services/Delete";
import NavBar from "../Components/NavBar";
import { axios_instance } from "../../firebase/Instance";

function Delete(){
    var [task_name, setTask] = useState("");
    var [date, setDate] = useState("End Date of task");
    var [taskId, setTaskId] = useState();
    async function get_current_data(event){
        event.preventDefault();
        try{
            var response = await axios_instance.get("/tasks.json");
            var data = response.data
            for(var task_id in data){
                if(data[task_id].task === task_name){
                    setDate(data[task_id].date);
                    setTaskId(task_id);
                    break;
                } 
            }
        }catch(error){
            alert(error)
        }
    }
    return <div className="bg-slate-600 h-screen w-full">
        <NavBar/>
        <div className="w-full">
            <form className="block my-14 mx-72 w-min">
                <div className="block p-5 w-min">
                    <label className="font-bold">Task</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72" 
                            placeholder="Enter task to be deleted"
                            type="text"
                            onChange={(event)=>setTask(event.target.value)}
                            onBlur={(event)=>get_current_data(event)}
                        />
                    </div>
                </div>
                <div className="block p-5 w-min">
                    <label className="font-bold">End Date</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72 text-slate-700" 
                            disabled 
                            value={date} 
                            type="text"
                        />
                    </div>
                </div>
                <div className="border m-5 w-min">
                    <button className="m-0.5 px-5 py-3 border rounded-sm bg-gray-300 w-32"
                        onClick={(event)=>delete_operation(taskId, event)}
                    >
                        Delete Task
                    </button>
                </div>
            </form>
        </div>
        
    </div>  
}

export default Delete;