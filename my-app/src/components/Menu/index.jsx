import React, {Component} from "react"; //это мне вообще зачем?

const menuCategory = [
    {
        key:"all",
        name:'Все траты'
        
    },
    {
        key:"food",
        name:'Еда'
    },
    {
        key:"clothes",
        name:'Одежда'
    },
    {
        key:"travel",
        name:'Путешествия'
    }
]



const Menu = ({choiceCategory, sumWithInitial }) =>{
return (
    <div className="flex flex-row">
    {menuCategory.map((category) =>{
        return (
            <div key={category.key} onClick={ ()=>{choiceCategory(category.key)}} className="ml-5"> {category.name} 
            <p>общая сумма: {sumWithInitial}</p>
            </div> 
            

        )
    })}
    </div>)
}
export default Menu