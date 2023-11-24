import React from 'react'

function Productos(props) {
  
  return (
    <div className='border w-72 flex flex-col items-center rounded-xl bg-white justify-between mb-2'>
      <img src={props.imagen} className=' rounded-t-xl min-w-full max-w-full'/>
      <div className='bg-violet-600 w-full text-white rounded-xl pt-1 align-start flex flex-col p-3'>
        <h1 className='font-extrabold text-xl'>{props.nombre}</h1>
        <p className='font-bold text-lg '>${props.precio}</p>
        <button className='border rounded-lg bg-white  transition-colors hover:bg-slate-200 text-violet-700 font-extrabold p-2 text-xl' onClick={props.onAgregar}>Agregar</button>
      </div>
    </div>
  )
}

export default Productos