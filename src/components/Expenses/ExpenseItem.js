import React,{useState} from 'react'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import Card from './Card'
import "./ExpenseItem.css"


const ExpenseItem = (props) => {

    // const [title,setTitle] = useState(props.title)
    // const [newTitle,setNewTitle] = useState("")

    // const clickHandler=()=>{
    //     setTitle(newTitle)
    //     console.log("clicked!!!")
    // }

    // const addChangeHandler=(event)=>{
           
    //         setNewTitle(event.target.value)
    // }
    
    return (
       
            <Card className ='expense-item'>
        
          <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>
                <div >${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={addChangeHandler}/>
           <button onClick={clickHandler}> Change Title</button> */}
            </Card>

        
    )
}

export default ExpenseItem;
