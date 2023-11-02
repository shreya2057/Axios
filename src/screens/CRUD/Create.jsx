import { useState } from "react";
import NavBar from "../Components/NavBar";
import { createTask } from "../../services/Create";

function Create(){
    const [task, setTask] = useState("")
    const [date, setDate] = useState()
    return <div className="bg-slate-600 h-screen w-full">
        <NavBar/>
        <div className="w-full">
            <form className="block my-14 mx-72 w-min">
                <div className="block p-5 w-min">
                    <label className="font-bold">Task</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72" 
                            placeholder="Enter your task" 
                            type="text"
                            onChange={(event)=>{setTask(event.target.value)}}
                        />
                    </div>
                </div>
                <div className="block p-5">
                    <label className="font-bold">End Date</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72"
                            type="date"
                            onChange={(event)=>{setDate(event.target.value)}}
                        />
                    </div>
                </div>
                <div className="border m-5 w-min">
                    <button className="m-0.5 px-5 py-3 border rounded-sm bg-gray-300 w-32"
                        onClick={(event)=>{createTask(event, task, date)}}
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
        
    </div>
}

export default Create;