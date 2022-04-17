import './table.scss'
import arrow from './arrow-down.svg'
import {productData} from "../../Products/SharkNinja/assessment_data_2021"

function Table() {
  return (
    <div className="table-display">
        <div className="table-container">
            <div className='table-title'>
              {Object.keys(productData[0].sales[0]).map((data, i) => {
                return (
                  <div className='table-title-entry' key={i}>
                    <h5>{data.toUpperCase()}</h5>
                    <img src={arrow} className="arrow-logo" alt="logo" />
                  </div>
                );
              })}
            </div>
            <div className='table-entires'>
            {productData[0].sales.map((data, i) => {
                return (
                  <div className='table-entry-entries' key={i}>
                    <p>{data.weekEnding}</p>
                    <p>${data.retailSales.toLocaleString('en-US')}</p>
                    <p>${data.wholesaleSales.toLocaleString('en-US')}</p>
                    <p>{data.unitsSold.toLocaleString('en-US')}</p>
                    <p>${data.retailerMargin.toLocaleString('en-US')}</p>
                  </div>
                );
              })}

            </div>
        </div>
    </div>
  );
}

export default Table;




