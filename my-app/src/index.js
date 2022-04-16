import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';


import Header from './components/header/Header';
import ProductDisplay from './components/productDisplay/productDisplay';
import Chart from './components/charts/charts';
import Table from './components/table/table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className="wrapper">
      <div className="box leftPanel">
        <ProductDisplay />
      </div>
      <div className="right">

        <div className="box b">
            <Chart/>
        </div>
        
        <div className="box c">
            <Table/>
        </div>
      </div>
      
    </div>
    
    
    

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
