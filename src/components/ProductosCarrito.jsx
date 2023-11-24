import React from 'react'

function ProductosCarrito(props) {
  let total=props.cantidad*props.precio
  return (
    <div className='border w-auto flex flex-row items-center bg-white mb-2 rounded-xl'>
      <img src={props.imagen} className=' w-56 m-0 rounded-l-xl'/>
       <div className='bg-slate-100 h-full w-full p-8 text-violet-600 pt-1 align-start flex flex-row justify-between rounded-r-xl' >
        <div>
          <span>Producto</span>
          <h1 className='font-extrabold text-xl'>{props.nombre}</h1>
        </div>
        <div>
          <span>Cantidad</span>
          <p className='font-bold text-lg '>{props.cantidad}</p>
        </div>
        <div>
          <span>Precio</span>
          <p className='font-bold text-lg '>${props.precio}</p>
        </div>
        <div>
          <span>Total</span>
          <p className='font-bold text-lg '>{total}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductosCarrito