import './productDisplay.scss'
import {productData} from "../../Products/SharkNinja/assessment_data_2021"

function ProductDisplay() {
  return (
    <div className="product-display">
        <div className="product-container">
            <img className="product-image" src={productData[0].image} alt=""/>
            <h2>{productData[0].title}</h2>
            <p className='product-subtitle'>{productData[0].subtitle}</p>
            <div className='product-tag-group'>
            {productData[0].tags.map((data,i) => {
              return (
                <div className='product-tag' key={i}>
                  {data}
                </div>
              );
            })}
            </div>
        </div>
    </div>
  );
}

export default ProductDisplay;
