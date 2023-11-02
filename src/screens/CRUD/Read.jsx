import List from "../Components/List";
import NavBar from "../Components/NavBar";

function Read(){
    return <div className="bg-slate-600 h-screen">
        <NavBar/>
        <div className="my-14 mx-72">
            <h1 className="text-2xl font-bold text-white">Task</h1>
            <List name="Task1" date="22/05/2023"/>
            <List name="Task1" date="22/05/2023"/>
        </div>
    </div>
}

export default Read;