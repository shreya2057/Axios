function List({name, date}){
    return <div className="border rounded-sm bg-gray-300 p-5 w-64 m-10 font-extrabold text-lg">
        <p className="m-1">{name}</p>
        <p className="m-1">{date}</p>
    </div>
}

export default List;