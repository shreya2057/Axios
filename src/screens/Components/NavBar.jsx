import { Link } from "react-router-dom";

function NavBar(){
    return <div className="bg-gray-800 text-gray-100 font-bold block w-full p-5 text-lg">
        <div className="inline-block">Fetch API</div>
        <div className="inline-block float-right">
            <Link to='/' className="px-5">
                Home
            </Link>
            <Link to='/create'className="px-5">
                Create
            </Link>
            <Link to='/read' className="px-5">
                ToDO List
            </Link>
            <Link to='/update' className="px-5">
                Update
            </Link>
            <Link to='/delete' className="px-5">
                Delete
            </Link>
        </div>
    </div>
}

export default NavBar;