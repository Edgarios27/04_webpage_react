import React, { useState, useEffect, useContext } from 'react';
import '../Pages/Descripcion.css';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';

export const Descripcion = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  
  const { AllProducts } = useContext(ProductContext); 

  useEffect(() => {
    const selectedProduct = AllProducts.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [AllProducts, id]);

  return (
    <div>
      {product && (
        <div className="container">
          <div className="imagenProducto">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detalle">
            <h2>{product.title}</h2>
            <h3>€{product.price}</h3>
            <p>{product.description}</p>
            <button>AGREGAR AL CARRITO</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descripcion;



