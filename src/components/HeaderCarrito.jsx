import React from 'react'
import 'boxicons'


function HeaderCarrito({botonActivo , setBotonActivo, setFiltro}){
    const handleFiltroClick = (tipo) => {
        setFiltro(tipo);
        setBotonActivo(tipo);
    };

  return (
    <> 
        <nav>
            <ul>
                <li>
                    <button className={`flex justify-start ${botonActivo === 'todos' ? 'activo' : 'text-white'} p-4 rounded-l-lg text-xl`}  onClick={() => handleFiltroClick('todos')}><box-icon name='right-arrow' type='solid' color='#7c3aed' ></box-icon>Seguir comprando</button>
                </li>
                <li>
                    <button className={`flex justify-start ${botonActivo === 'carrito' ? 'activo' : 'text-white'} p-4 rounded-l-lg text-xl`} onClick={() => handleFiltroClick('carrito')}><box-icon type='solid' name='cart' color='#7c3aed'></box-icon> Carrito</button>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default HeaderCarrito