import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// //* การสร้าง Functional Component
// function HelloComponent(){
//   return <h1>Sawasdee Component krub</h1>
// }

// //* การสร้าง Class Component
// class ByeComponent extends React.Component{
//   render(){
//     return <h1>Bye Component krub</h1>
//   }
// }
// ReactDOM.render(<GoodbyeComponent/>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
