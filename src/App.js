import React, {Fragment, useState, useEffect} from 'react';
 import Ingreso from './componentes/Ingreso';
 import Ingresado from './componentes/Ingresado';

function App() {

  let listaInicial = JSON.parse(localStorage.getItem('items'));
  if(!listaInicial){
    listaInicial=[];
  }

  //arreglo de items
  const [items, modificarItems] = useState(listaInicial);

  useEffect(()=>{
    if(listaInicial){
      localStorage.setItem('items', JSON.stringify(items));
    }else{
      localStorage.setItem('items', JSON.stringify([]));
    }
  },[items, listaInicial]);

  //Nuevo item en la lista
  const nuevoItem = item =>{
    
    console.log('SE AGREGA NUEVO ITEM')
    modificarItems([...items, item]);
  }

  //Eliminar item de la lista
  const eliminarItem = id =>{
    const listaActualizada = items.filter(item=>item.id!==id);
    modificarItems(listaActualizada);
  }
  
  return (

    <Fragment>

      <h1>TO-DO</h1>

      <div className="container">

          <Ingreso
            nuevoItem={nuevoItem}
          />

        {items.map(item=>(
          <Ingresado
            key={item.id}
            item={item}
            eliminarItem = {eliminarItem}
          />
        ))}

      </div>

    </Fragment>
    
  );
}

export default App;

