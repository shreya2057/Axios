import NavBar from "./Components/NavBar";

function Home(){
    return <div className="flex flex-col bg-slate-600 h-screen">
        <NavBar/>
        <div className="flex justify-center items-center mx-auto h-full">
            <div className="border rounded-sm bg-gray-300 p-5 w-72 h-36 font-extrabold text-lg">
                <p className="m-1">Home Screen</p>
                <p className="m-1">Simple CRUD operation using Fetch API</p>
            </div>
        </div>
    </div>
}

export default Home;