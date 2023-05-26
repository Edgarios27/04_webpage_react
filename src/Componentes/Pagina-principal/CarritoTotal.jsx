import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
 
const CarritoTotal = () => {
    const { cart } = useContext(ProductContext);

    const total = cart.reduce((acc,el)=> acc + el.price, 0);
  return (
    <div className='carritoTotal'>
        <h3>Total a pagar: €{total} </h3>
    </div>
  )
}

export default CarritoTotal