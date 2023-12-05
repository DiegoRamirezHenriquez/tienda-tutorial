import { useState } from 'react'
import React from 'react';
import './index.css'
import 'boxicons'
import Productos from './components/Productos'
import catalogo from './data/Catalogo'
import Carrito from './components/Carrito'
import HeaderCarrito from './components/HeaderCarrito';
import { LocalStorageFuncion } from './LocalStorageFuncion';
function App() {
  //filtro
  const [botonActivo, setBotonActivo] = useState('todos');
  const [filtro, setFiltro] = useState('todos');
  
  const handleFiltroClick = (tipo) => {
    setFiltro(tipo);
    setBotonActivo(tipo);
  };

  const productosFiltrados = catalogo
    .filter((c) => (filtro === 'todos' ? true : c.tipo === filtro))
    .map((c) => (
      <Productos
        id={c.id}
        imagen={c.imagen}
        nombre={c.nombre}
        precio={c.precio}
        onAgregar={() => agregarProducto({ id: c.id, nombre: c.nombre, precio: c.precio, imagen: c.imagen , cantidad: c.cantidad})}
      />));

    //carrito
    const [productosAgregados, setProductosAgregados] = LocalStorageFuncion('carro',[]);
    const [numeroCarrito, setNumeroCarrito]=LocalStorageFuncion('numeroCarro', 0);
    
   

    const agregarProducto = (producto) => {
    
      const prdct=productosAgregados.some(function(item) {    
        return item.id===producto.id;
      })
      
    if(prdct){
      setNumeroCarrito(numeroCarrito+1)
      for(let i=0;i<productosAgregados.length;i++){
        if(producto.id==productosAgregados[i].id){
          productosAgregados[i].cantidad=productosAgregados[i].cantidad+1;
          setProductosAgregados([...productosAgregados, ])
        }
      }
    }else{
      setNumeroCarrito(numeroCarrito+1)
      producto.cantidad=1;
      setProductosAgregados([...productosAgregados, producto]);
      
    }
  };
  
   
  return (
    <>
      <div className="flex flex-row bg-violet-600">
      <aside className='w-1/5 flex justify-between flex-col sticky top-0 p-12 h-screen pr-0'>
          <header>
            <h1 className=' font-bold text-3xl text-white'>ReactTShop</h1>
          </header>
          {botonActivo === 'carrito'? <HeaderCarrito botonActivo={botonActivo} setBotonActivo={setBotonActivo} setFiltro={setFiltro}/>:<nav>
              <ul>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'todos' ? 'activo' : 'text-white'} p-7 rounded-l-xl text-xl`}  onClick={() => handleFiltroClick('todos')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon>Todos los productos</button>
                </li>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'hombre' ? 'activo' : 'text-white'} p-7 rounded-l-xl text-xl`} onClick={() => handleFiltroClick('hombre')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon> Hombre</button>
                </li>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'mujer' ? 'activo' : 'text-white'} p-7 rounded-l-xl text-xl`}  onClick={() => handleFiltroClick('mujer')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon> Mujer</button>
                </li>
                <li>
                  <button className={`flex justify-start ${botonActivo === 'carrito' ? 'activo' : 'text-white'} p-7 rounded-l-xl text-xl items-center`} onClick={() => handleFiltroClick('carrito')}><box-icon type='solid' name='cart' color='#7c3aed'></box-icon>Carrito <span className='bg-slate-50 rounded-xl text-violet-600 ml-3 font-bold pr-2 pl-2'>{numeroCarrito}</span></button>
                </li>
              </ul>
          </nav>
          }
          
          <footer>
            <p className='text-slate-50'>© Diego Ramirez</p>
          </footer>
        </aside>
        <main className='flex flex-col flex-wrap bg-white m-8 rounded-xl ml-0 w-4/5'>
          {botonActivo === 'carrito'? <Carrito carro={productosAgregados} setProductosAgregados={setProductosAgregados} setNumeroCarrito={setNumeroCarrito}/>:<>
            <h1 className=' p-10 font-extrabold text-2xl text-violet-600'>{botonActivo==='todos'?'Todos los productos': botonActivo.charAt(0).toUpperCase()+botonActivo.slice(1)}</h1>
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
