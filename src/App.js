import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState,useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';




const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}

//* กำหนด style แบบ inline *//
function App() {
  
  const initState = [
    {id:1,title:"ค่าเช่าบ้าน",amount:-3200},
    {id:2,title:"ค่าเช่าน้ำมัน",amount:-1200}
  ]
  //* สร้าง state
  const [items,setItems] = useState(initState)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  
  
  const onAddNewitem = (newItem) =>{ //* สร้าง function รับค่าจาก Form
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  
  useEffect(()=>{
   const amounts= items.map(items=>items.amount) //* ดึงเอา items.amount มาทั้งหมด
   const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0) //* ดึงเอาค่า amount ที่เป็นบวกมารวมกัน
   const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1 //* ดึงเอาค่า amount ที่เป็นลบมารวมกัน
   console.log("รายได้ = ",income);
   console.log("รายจ่าย = ",expense);
   
   setReportIncome(income.toFixed(2))
   setReportExpense(expense.toFixed(2))
    
  },[items,reportIncome,reportExpense])

  // //* reducer state

  // const [showReport,setShowReport] = useState(false)
  // const reducer = (state,action)=>{  //* ส่ง state กับ action เข้ามา
  //     switch(action.type){
  //       case "SHOW" :
  //         return setShowReport(true);
  //       case "HIDE" :
  //         return setShowReport(false);
  //     }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport) //* (function ที่ต้องการทำงานด้วย, state ที่ต้องการทำงาน)

  return (
      <DataContext.Provider value={
        {
          income: reportIncome,
          expense: reportExpense
        }
      }>
      <div className='container'>
        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <Router>
        <div>
          <ul className='horizontal-menu'>
            <li>
            <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
            <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
              <Route path="/" element={<ReportComponent/>} />
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewitem}/>
                    <Transaction items={items}/>
                  </>
                }
               />
          </Routes>
        </div>
        </Router>
     </div> 
      </DataContext.Provider>
   
  );
}
export default App;

