import NavBar from "../Components/NavBar";

function Delete(){
    return <div className="bg-slate-600 h-screen w-full">
        <NavBar/>
        <div className="w-full">
            <form className="block my-14 mx-72 w-min">
                <div className="block p-5 w-min">
                    <label className="font-bold">Task</label>
                    <div className="my-3 border rounded-sm w-min">
                        <input className="border rounded-sm bg-gray-300 w-72" placeholder="Enter task to be deleted" type="text"/>
                    </div>
                </div>
                <div className="border m-5 w-min">
                    <button className="m-0.5 px-5 py-3 border rounded-sm bg-gray-300 w-32">Delete Task</button>
                </div>
            </form>
        </div>
        
    </div>  
}

export default Delete;