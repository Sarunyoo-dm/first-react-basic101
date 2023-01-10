import Item from "./item";
import './transaction.css'

//* ชื่อ Component , Propperty ="ค่าที่กำหนดให้property" *//
//  Ex. <Item title="ค่ารักษาพยาบาล" amount ="2000"/>
const Transaction = (props) => {
  const  {items} = props
    return ( 
      <div>
      <ul className="item-list">
        {items.map((element)=>{
          return <Item title={element.title} amount={element.amount} key = {element.id}/>
          // ถ้าชื่อ props เหมือนกับค่า attribute เขียนแบบล่างนี้แทนได้ (spread operator)
          // return <Item {...element} key={element.id}/>
      
        })}
      </ul>
      </div>
    );
  }
export default Transaction;