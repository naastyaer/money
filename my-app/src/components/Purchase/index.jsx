import { format } from "date-fns"
console.log(new Date( ))


const Purchase = ({purchase}) =>{
    return (
        
            <div className="  mb-10 py-2 px-3 shadow-nd border-b-2 border-indigo-600">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="bg-indigo-200 text-indigo-900 text-sm font-semibold rounded-full px-3 py-1 shadow"> {purchase.category}</p>
                        <p>{format(new Date( ), 'MM/dd/yyyy')}</p>
                    </div>
                        
                    <p className="text-sm ">{purchase.number} рублей </p>
                    
                </div>

            </div>
        
        /*с датаой какие-то ТРАБЛЫ*/
   )
}
export default Purchase