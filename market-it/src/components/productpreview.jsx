import React from 'react'
import { Link } from 'react-router-dom'

const ProductPreview = (props) => {
    const products = props.products;
    const className = props.className;
    const width = props.width;
    const height = props.height;

  return (
    <div className={className}>
        {products?.map((product) => (
          <Link to={`/products/${product.id}`} className="collumn" key={product.id}>
            <img src={product.image} alt="" height={height} width={width} className="product-img" />
            <div className="product-intro">
              <h4 className="product-name">{ product.name }, { product.spec.RAM}</h4>
              <h4 className="product-price">${ product.price }</h4>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default ProductPreview