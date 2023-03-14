import Button from "components/Button";
import { useState } from "react";


const categorys = ['Еда', 'Одежда', 'Путешествия']

const Form = ({addPurchase}) =>{
    const [number, setNumber] = useState (' ')
    const [category, setCategory] = useState (categorys[1])    

    const handelClick = (e)=>{
        e.preventDefault()
        const purchase = {
        number,
        category
        }
        addPurchase(purchase)
    }

    return (
        <div className=" mx-auto my-10 gap-y-4 flex flex-col">
            <form>
                <h2 className="font-bold text-2xl text-center mb-5">Добавить новые расходы</h2>
                <div className="grid grid-cols-3 gap-4 flex flex-row"> 
                    <div className="flex flex-col">
                        <label className="text-indigo-900">Сумма</label>
                        <input 
                            onChange={(purchase) =>
                            setNumber(purchase.target.value.replace(/\D/, ""))}
                            name="number" 
                            type="text" 
                            className="col-span-2 border border-solid border-gray-400 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-indigo-900">Kатегория</label>
                        <select 
                                onChange={(purchase) =>  setCategory(purchase.target.value)}
                                value={category}
                                className="col-span-2 border border-solid border-gray-400 rounded" >
                                {categorys.map(category => (
                                <option key={category}> {category} </option>
                                ))}
                        </select>
                    </div>
                    <Button title="добавить" handelClick={handelClick} type="submit"/>
                </div> 
            
                
            </form>
        </div>    
    )
}
export default Form
