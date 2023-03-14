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
        }
        
    ])

    let [currentPurchases, setCurrentPurchases] = useState([...purchases]) //масиив для категорий
    
    const addPurchase = (purchase) =>{
        setPurchase([...purchases, purchase])
    }
    
    const choiceCategory = (category) =>{
        
  
            currentPurchases = purchases.filter( el => {
                
                if(category === 'All'){  
                    currentPurchases=[...purchases]
                    console.log(currentPurchases)
                    setCurrentPurchases(currentPurchases) //почему не выводит не понимаю
                    return
                }
                return el.category === category} 
            ) 
            setCurrentPurchases(currentPurchases)
    }
    



    return (
            <div className='w-1/2 bg-slate-200 mx-auto rounded-lg drop-shadow-md px-5'>
                <Form addPurchase={addPurchase}/>
                <Menu choiceCategory={choiceCategory}/>

                <div className="max-w-screen-1g mx-auto min-h-screen ">
                    {currentPurchases.length > 0 && currentPurchases.map((purchase) =>{
                    return (
                        <Purchase key={purchase.id} purchase={purchase} />
                    )
                    })}
                </div>
                
            </div>
    )
}
export default App
