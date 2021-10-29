import React , {createContext, useState, useEffect} from 'react'; 
import axios from 'axios';


export const CategoriasContext = createContext();

const CateogoriasProvider = (props) =>{


    const [categorias, guardarCategorias] = useState([]); 


    useEffect(() => {
      
         
        const cargarCategorias = async() =>{

            const url = ' https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
          
            const respuesta = await axios.get(url)

            guardarCategorias(respuesta.data.drinks)

        }

        cargarCategorias(); 



    }, [])


    return(

         <CategoriasContext.Provider
    
         value={{
            categorias

         }}
         >


             {props.children}


            
         </CategoriasContext.Provider>

    ); 


}


export default CateogoriasProvider; 

