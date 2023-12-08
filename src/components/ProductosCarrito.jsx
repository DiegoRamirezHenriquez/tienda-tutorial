import React from 'react'
import { useState, useEffect } from 'react';
import 'boxicons';

function ProductosCarrito({ precio, imagen, cantidad, nombre, menosCantidad,masCantidad, eliminar}) {
  const numericPrice = parseFloat(precio);
  const formattedPrice = numericPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  
  const [canti, setCanti] = useState(cantidad);
  
  let total=canti*numericPrice
  let formattedTotal=total.toLocaleString('es-CL',{style: 'currency', currency: 'CLP'})


  useEffect(() => {
    setCanti(cantidad);
  }, [cantidad]);

 
  
  return (
    <div className='border w-auto flex flex-row items-center bg-white mb-2 rounded-xl'>
      <img src={imagen} className=' w-56 m-0 rounded-l-xl'/>
       <div className='bg-slate-100 h-full w-full p-8 text-violet-600 pt-1 align-start flex flex-row justify-between rounded-r-xl' >
        <div>
          <span>Producto</span>
          <h1 className='font-extrabold text-xl'>{nombre}</h1>
        </div>
        <div>
          <span>Cantidad</span>
          <div className='flex flex-row justify-between '>
            {canti > 1 ? (<button className=' font-extrabold text-xl' onClick={menosCantidad}>-</button>):(<button className=' font-extrabold text-xl' onClick={eliminar} ><box-icon name='trash' type='solid' color='#7c3aed' ></box-icon></button>)}
            <p className='font-bold text-xl '>{canti}</p>
            <button className=' font-extrabold text-xl' onClick={masCantidad}>+</button>
          </div>
        </div>
        <div>
          <span>Precio</span>
          <p className='font-bold text-xl '>{formattedPrice}</p>
        </div>
        <div>
          <span>Total</span>
          <p className='font-bold text-xl '>{formattedTotal}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductosCarrito