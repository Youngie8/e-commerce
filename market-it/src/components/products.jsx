import React from 'react'
import ProductPreview from './productpreview'
const Products = (props) => {
  const laptops = props.laptops;
  const phones = props.phones;
  

  return (
    <div className="products">
      <div className="laptops-section">
        <h2 className="laptops-header">Laptops & Desktops</h2>
        <ProductPreview products={laptops} className="grid-3" width={320} height={200}/>
      </div>
      <div className="phones-section">
        <h2 className="phones-header">Phones & Tablets</h2>
        <ProductPreview products={phones} className="grid" width={205} height={225}/>
      </div>
    </div>
  )
}

export default Products