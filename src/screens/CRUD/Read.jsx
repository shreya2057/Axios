import { useEffect, useState } from "react";
import List from "../Components/List";
import NavBar from "../Components/NavBar";
import { read_data } from "../../services/Read";

function Read(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const get_data = async()=>{
            var response = await read_data();
            // Dataformat originally in the form:
            //  {
            //      id:{
            //          Task: "value"
            //          date: "value"
            //      }
            //      id:{
            //          Task: "value"
            //          date: "value"
            //      }
            // }

            setData(Object.keys(response).map((key)=>response[key]));

            // Converted to form 

            //  [
            //      {
            //          Task: "value"
            //          date: "value"
            //      }
            //      {
            //          Task: "value"
            //          date: "value"
            //      }
            // ]

            // data.map(item=>item[task]) --> data[item[task]]  
        }

        get_data();
    },[]);

    return <div className="bg-slate-600 h-screen">
        <NavBar/>
        <div className="my-14 mx-72">
            <h1 className="text-2xl font-bold text-white">Task</h1>
            {
                data.map((item,index)=>
                    <List name={item.task} date={item.date} key={index}/>
                )
            }
        </div>
    </div>
}

export default Read;