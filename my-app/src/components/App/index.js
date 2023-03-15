import { useState } from 'react';
import 'components/App/App.css';
import Purchase from 'components/Purchase';
import Form from 'components/Form'
import Menu from 'components/Menu';
/*import Categories from 'components/Categories';*/
function App() {
    
    let [purchases, setPurchase] = useState([
        {
            id: 1, 
            category: "travel",
            number: "1000"
        },
        {
            id: 2, 
            category: "food",
            number: "9000"
        },
        {
            id: 3, 
            category: "clothes",
            number: "8000"
        },
        {
            id: 4, 
            category: "clothes",
            number: "10000"
        },
        {
            id: 5, 
            category: "clothes",
            number: "100"
        }
        
    ])

    let [currentPurchases, setCurrentPurchases] = useState([...purchases]) //масиив для категорий
    
    const addPurchase = (purchase) =>{
        purchases = [...purchases, purchase]
        setPurchase(purchases)
        setCurrentPurchases(purchases)
    }
    let sumWithInitial = 0 
    const choiceCategory = (category) =>{
            currentPurchases = purchases.filter( el => {
                console.log(category)
                if(category === 'all'){  
                    setCurrentPurchases(purchases) //почему не выводит не понимаю
                    return
                }
                return el.category === category} 
            ) 
            setCurrentPurchases(currentPurchases)
            console.log(currentPurchases)
            let number =[]
            currentPurchases.map((purchase) =>{
                number = [...number, Number(purchase.number)]
                sumWithInitial = number.reduce((accumulator, currentValue) => accumulator + currentValue,)
                console.log(sumWithInitial);
            })
    }
    



    return (
            <div className='w-1/2 bg-slate-200 mx-auto rounded-lg drop-shadow-md px-5'>
                <Form addPurchase={addPurchase}/>
                <Menu choiceCategory={choiceCategory} sumWithInitial={sumWithInitial}/>

                <div className="max-w-screen-1g mx-auto min-h-screen ">
                    {currentPurchases.length > 0 && currentPurchases.map((purchase) =>{
                    return (
                        <Purchase key={purchase.id} purchase={purchase}/>
                    )
                    })}
                </div>
                
            </div>
    )
}
export default App
