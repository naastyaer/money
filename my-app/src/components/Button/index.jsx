function Button ({title, handelClick, type}){
    
    return (
        <button  
            type = {type}
            onClick = { event => handelClick(event)} 
            className="ax-10 bg-indigo-200 rounded-lg text-xl font-semibold text-indigo-900 px-4 py-2 mt-3"> 
            {title} 
        </button>
    )
}
export default Button