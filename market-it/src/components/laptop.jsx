import React from 'react'
import { useParams } from 'react-router-dom';

const Laptop = (props) => {
    const laptops = props.laptops;
    const { id } = useParams();
  return (
    <div>
        { laptops && laptops.map((laptop) => {
          <div>
            { <div>
              <h1>{laptop.id}</h1>
              </div>}
          </div>
        })}
    </div>
  )
}

export default Laptop