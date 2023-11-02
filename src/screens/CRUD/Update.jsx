import NavBar from "../Components/NavBar";

function Update(){
    var task_name = "Task Name";
    var end_date = "22/10/2023"
    return <div className="bg-slate-600 h-screen w-full">
        <NavBar/>
        <div className="my-12 mx-72">
            <h1 className="text-2xl font-bold text-white">Update Task</h1>
            <form className="block w-min">
                <div className="block p-5 w-min">
                    <label className="font-bold">Task</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72" disabled value={task_name} type="text"/>
                    </div>
                </div>
                <div className="block p-5 w-min">
                    <label className="font-bold">End Date</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72" disabled value={end_date} type="text"/>
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
                    <button className="m-0.5 px-5 py-3 border rounded-sm bg-gray-300 w-32">Create Task</button>
                </div>
            </form>
        </div>
        
    </div>
}

export default Update;