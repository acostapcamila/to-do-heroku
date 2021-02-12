import React, {Fragment, useState} from 'react'
import shortid from 'shortid';

const Ingreso = ({nuevoItem}) => {

    //crear state de items
    const [item, actualizarItem] = useState({
        ingresado:''
    });

    const actualizarState  = e =>{
        actualizarItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    const {ingresado}= item;

    const submitItem = e =>{

        e.preventDefault();
    
        //validar
        if(ingresado.trim()===''){
            alert('Texto vacio')
            return;
        }

        //asignar id
        item.id =  shortid.generate();

        //crear el item
        nuevoItem(item);

        //reiniciar el form
        actualizarItem({
            ingresado:''
        });
    }

    return ( 

        <Fragment>

        <form
            onSubmit={submitItem}>
            <label>Ingrese el item</label>            
            <input
                type="text"
                name="ingresado"
                className="u-full-width"
                placeholder="Ingrese el texto"
                onChange={actualizarState}    
                value={ingresado}
            />

            <button
                type="submit"
                className="u-full-width button-primary"
                onChange={actualizarState}   
            >Ingresar</button>
        </form>
        </Fragment>

     );
}
 
export default Ingreso;