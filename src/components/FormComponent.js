import './FormComponent.css'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
const FormComponent = (props) =>{
    //* สร้าง (useState) [ชื่อstate,function] = useState('ค่าเริ่มต้น')
    console.log("Render FormComponent");
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false);

    
    const inputTitle = (event) => {
        setTitle(event.target.value); //* ได้ค่าที่กรอกจาก titile แล้วส่งไปที่ title(state)
    }
    const inputAmount = (event) => {
        setAmount(event.target.value); //* ได้ค่าที่กรอกจาก amount แล้วส่งไปที่ amount(state)
    }
    const saveData = (event) =>{
        event.preventDefault();
        //* สร้าง itemData ใช้เก็บข้อมูลที่มาจาก inputTitle กับ inputAmount
        const itemData = {
            id:uuidv4(),
            title:title, //* นำค่าจาก state title มาเก็บไว้
            amount:Number(amount) //* แปลง Amount จาก string เป็น number
        }
        props.onAddItem(itemData); //* props ข้อมูลออกไป ที่ Prop onAddItem
        setTitle(''); //* เมื่อกดเพิ่มข้อมูลให้เคลียค่า 
        setAmount(0); //* เมื่อกดเพิ่มข้อมูลให้เคลียค่า 
    }
    //* ดักจับเมื่อมีการเปลี่ยนแปลงค่าที่ state title กับ amount
    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        // console.log("ค่าที่ส่ง 1 = "+checkData)
        setFormValid(checkData); //*checkData = true *//
        // if(checkData){
        //     setFormValid(true);
        // }
       
    },[title,amount])
    
    return(
        <div>
            <form >
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" onClick={saveData} disabled={!formValid} >เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent;