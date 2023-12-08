import React from 'react'
import { useEffect, useState } from 'react';
import ProductosCarrito from './ProductosCarrito';
function Carrito({carro, setProductosAgregados, setNumeroCarrito}) {

  const [precioCLP,setPrecioCLP]=useState(0);
  
  useEffect(() => {
    const newTotal = carro.reduce((acc, cant) => acc + cant.cantidad * cant.precio, 0);
    const numericPrice = parseFloat(newTotal);
    const formattedPrice = numericPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    setPrecioCLP(formattedPrice)
    console.log(formattedPrice)
  }, [carro]);
 
  useEffect(() => {
    const newTotal = carro.reduce((acc, producto) => acc + producto.cantidad, 0);
    setNumeroCarrito(newTotal);
  }, [carro]);

 
  const vaciar =()=>{
    setProductosAgregados([])
    setNumeroCarrito(0)
  }
  

  function handleMenosCantidad(id) {
    const nuevosDatos = carro.map(c =>
      c.id === id ? { ...c, cantidad: c.cantidad - 1 } : c
    );
    setProductosAgregados(nuevosDatos);
  }
  
  function handleMasCantidad(id) {
    const nuevosDatos = carro.map(c =>
      c.id === id ? { ...c, cantidad: c.cantidad + 1 } : c
    );
    setProductosAgregados(nuevosDatos);
  }

  const handleEliminarProducto = (id) => {
    const nuevoCarro = carro.filter(producto => producto.id !== id);
    setProductosAgregados(nuevoCarro);
    
    const nuevoNumeroCarrito = nuevoCarro.reduce((acc, producto) => acc + producto.cantidad, 0);
    setNumeroCarrito(nuevoNumeroCarrito);
  };

  return (
    <>
      <h1 className='p-10 font-extrabold text-2xl text-violet-600'>Carrito</h1>
      <div className='flex flex-col flex-wrap m-2 justify-around gap-4'>
      {carro.length==0 ?<> <p className='text-violet-600 text-xl font-bold pl-10'>Carro vacío</p> </>: <>{carro.map((c) => (
        <ProductosCarrito  id={c.id} imagen={c.imagen} nombre={c.nombre} precio={c.precio} cantidad={c.cantidad} setNumeroCarrito={setNumeroCarrito} carro={carro} setPrecioCLP={setPrecioCLP} menosCantidad={()=>handleMenosCantidad(c.id)} masCantidad={()=>handleMasCantidad(c.id)} eliminar={()=>handleEliminarProducto(c.id)}/> 
      ))}
        <div className='flex flex-row justify-between ml-3 mr-3'>
          <button className='border rounded-lg bg-white  transition-colors hover:bg-slate-200 text-violet-700 font-extrabold p-2 text-xl ' onClick={vaciar} >Vaciar carro</button>
          <div className=' border rounded-lg'>
            <span className='text-violet-700 font-extrabold text-xl m-4'>Total: {precioCLP}</span>
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