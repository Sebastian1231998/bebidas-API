import axios from 'axios';
import React,{ createContext, useEffect, useState } from 'react'


export const RecetasContext = createContext(); 



const RecetasProvider = (props) =>{

    const [recetas, guardarRecetas] = useState([]); 
    const [consultar, guardarConsultar ] = useState(false); 

    const [busquedaReceta, guardarBusquedaReceta] = useState({

        nombre:'',
        categoria:''

    })


    const {nombre , categoria} = busquedaReceta; 




    useEffect(()=>{


        if(consultar){

            const buscarReceta = async ()=>{

               const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

               let respuesta = await axios.get(url);

               //console.log(respuesta.data.drinks)
               guardarRecetas(respuesta.data.drinks);
               guardarConsultar(false);


            }

            buscarReceta();
        }


    },[busquedaReceta])

    return(

        <RecetasContext.Provider
        value={{
            recetas,
            guardarBusquedaReceta,
            guardarConsultar
        }}
        >

        {props.children}

        </RecetasContext.Provider>
    ); 

}



export default RecetasProvider; 

