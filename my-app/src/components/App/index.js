import { useState } from 'react';
import 'components/App/App.css';
import Purchase from 'components/Purchase';
import Form from 'components/Form'
import Menu from 'components/Menu';
/*import Categories from 'components/Categories';*/
function App() {
    
    const [purchases, setPurchase] = useState([
        {
            id: 1, 
            category: "Путешествия",
            number: "1000"
        },
        {
            id: 2, 
            category: "Еда",
            number: "9000"
        },
        {
            id: 3, 
            category: "Одежда",
            number: "8000"
        }
        
    ])
    
    const addPurchase = (purchase) =>{
        setPurchase([...purchases, purchase])
    }
    
    const choiceCategory = (category) =>{
        console.log(category)
        //нужно показывать элементы, у которых такая же категория как переданная в этот метод
        let filtred = purchases.filter( el => el.category === category) //не находит категории
        console.log(filtred)
        setPurchase([filtred]) //нужно еще ключи добавить
    }
    /*const currentItems = [...purchases]
    console.log(currentItems)*/



    return (
            <div className='w-1/2 bg-slate-200 mx-auto rounded-lg drop-shadow-md px-5'>
                <Form addPurchase={addPurchase}/>
                <Menu choiceCategory={choiceCategory}/>

                <div className="max-w-screen-1g mx-auto min-h-screen ">
                    {purchases.length > 0 && purchases.map((purchase) =>{
                    return (
                        <Purchase key={purchase.id} purchase={purchase} />
                    )
                    })}
                </div>
                
            </div>
    )
}
export default App
