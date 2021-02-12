import React from 'react'


const Ingresado = ({item, eliminarItem}) => {

    const {ingresado, id} = item;

    const clickItem = id =>{
        
        const query = `div[id='${id}'] p`;

        if(query){
            const texto = document.querySelector(query);
            if(!texto.style.textDecoration){
                texto.style.textDecoration = "line-through";
            }else{
                texto.style.textDecoration = "";
            }
        }
    }

    return ( 

        <div className="item" id={id}>

            <p
                onClick={()=>clickItem(id)}
            >{ingresado}</p>

            <button
                className="button eliminar u-full-width"
                onClick={ ()=> eliminarItem(id)}
            >Eliminar &times;</button>

        </div>

     );
}
 
export default Ingresado;