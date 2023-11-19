import { useState } from 'react'
import React from 'react';
import './index.css'
import 'boxicons'
import Productos from './components/Productos'
import catalogo from './data/Catalogo'
import Carrito from './components/Carrito'

function App() {
  const [botonActivo, setBotonActivo] = useState('todos');
  const [filtro, setFiltro] = useState('todos');

  const handleFiltroClick = (tipo) => {
    setFiltro(tipo);
    setBotonActivo(tipo);
  };


  const productosFiltrados = catalogo
    .filter((c) => (filtro === 'todos' ? true : c.tipo === filtro))
    .map((c) => <Productos key={c.id} imagen={c.imagen} nombre={c.nombre} precio={c.precio} />);


  return (
    <>
      <div className="flex flex-row bg-violet-600">
      <aside className='w-1/5 flex justify-between flex-col sticky top-0 p-12 h-screen pr-0'>
          <header>
            <h1 className=' font-bold text-3xl text-white'>ReactTShop</h1>
          </header>
          <nav>
              <ul>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'todos' ? 'activo' : 'text-white'} p-4 rounded-l-lg text-xl`}  onClick={() => handleFiltroClick('todos')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon>Todos los productos</button>
                </li>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'hombre' ? 'activo' : 'text-white'} p-4 rounded-l-lg text-xl`} onClick={() => handleFiltroClick('hombre')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon> Hombre</button>
                </li>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'mujer' ? 'activo' : 'text-white'} p-4 rounded-l-lg text-xl`}  onClick={() => handleFiltroClick('mujer')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon> Mujer</button>
                </li>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'carrito' ? 'activo' : 'text-white'} p-4 rounded-l-lg text-xl`} onClick={() => handleFiltroClick('carrito')}><box-icon type='solid' name='cart' color='#7c3aed'></box-icon> Carrito</button>
                </li>
              </ul>
          </nav>
          <footer>
            <p className='text-slate-50'>© Diego Ramirez</p>
          </footer>
        </aside>
        <main className='flex flex-col flex-wrap bg-white m-8 rounded-xl ml-0 w-4/5'>
          {botonActivo === 'carrito'? <Carrito/>:<>
            <h1 className=' p-10 font-extrabold text-2xl text-violet-600'>Todos los productos</h1>
            <div className='flex flex-row flex-wrap m-2 justify-around gap-4 '>
              {productosFiltrados}
            </div>
          </>}
        </main>
      </div>
    </>
  )
}

export default App
