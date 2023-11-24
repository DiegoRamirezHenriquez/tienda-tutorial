import React from 'react'
import ProductosCarrito from './ProductosCarrito';

function Carrito({carro}) {
  let total=0
  carro.map((cant) =>(
    total=cant.cantidad*cant.precio+total
  ))
  return (
    <>
      <h1 className='p-10 font-extrabold text-2xl text-violet-600'>Carrito</h1>
      <div className='flex flex-col flex-wrap m-2 justify-around gap-4'>
      {carro.length==0 ?<> <p className='text-violet-600 text-xl font-bold pl-10'>Carro vacío</p> </>: <>{carro.map((c) => (
        <ProductosCarrito  id={c.id} imagen={c.imagen} nombre={c.nombre} precio={c.precio} cantidad={c.cantidad}/>
      ))}
        <div className='flex flex-row justify-between ml-3 mr-3'>
          <button className='border rounded-lg bg-white  transition-colors hover:bg-slate-200 text-violet-700 font-extrabold p-2 text-xl ' >Vaciar carro</button>
          <div className=' border rounded-lg'>
            <span className='text-violet-700 font-extrabold text-xl m-4'>Total: {total}</span>
            <button className='border rounded-r-lg bg-violet-600 text-white font-extrabold text-xl p-5 hover:bg-violet-700 transition-colors'>Comprar ahora</button>
          </div>
        </div>
      </>
      }
      </div>
    </>
  );
}


export default Carrito