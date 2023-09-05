import React from 'react'
import { useParams } from 'react-router-dom';

const Laptop = (props) => {
    const laptops = props.laptops;
    const { id } = useParams();
  return (
    <div>
        laptops section
    </div>
  )
}

export default Laptop