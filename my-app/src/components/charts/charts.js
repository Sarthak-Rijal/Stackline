import './charts.scss'
import { productData } from '../../Products/SharkNinja/assessment_data_2021';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




export const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
       suggestedMin: 0
       }
    },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Yearly Reatil Sales, Whole Sales and Retail Margin',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let retailSales = new Array(12).fill(0);
let  wholesaleSales = new Array(12).fill(0);
let retailSalesMargin = new Array(12).fill(0);
let unitSold = new Array(12).fill(0);
let month 

(function () {

  Object.entries(productData[0].sales).forEach((entry) => {

    month = parseInt(entry[1].weekEnding.split('-')[1]);

    retailSales[month - 1] += parseInt(entry[1].retailSales);
    wholesaleSales[month - 1] += parseInt(entry[1].wholesaleSales);
    retailSalesMargin[month - 1] += parseInt(entry[1].retailerMargin);
    unitSold[month - 1] += parseInt(entry[1].unitsSold);

  });  
})();


export const lineData = {
  labels,
  datasets: [
    {
      label: 'Retail Sales in $',
      data: retailSales,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Whole Sales in $',
      data: wholesaleSales,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Retail Sale Margin in $',
      data: retailSalesMargin,
      borderColor:  'rgb(255, 205, 86)',
      backgroundColor:  'rgb(255, 205, 86, 0.5)',
    },
    {
      label: 'Unit Sold in unit',
      data: unitSold,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgb(75, 192, 192, 0.5)',
    },
  ],
};


function Chart() {
  return (
    <div className='chrat-display'>
        <Line options={lineOptions} data={lineData} />
    </div>
  );
}

export default Chart;
