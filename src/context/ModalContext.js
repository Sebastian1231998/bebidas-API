import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

  let [IdReceta, guardarIdReceta] = useState(null);
  let [informacionReceta, guardarReceta] = useState({})
  const [cargando, guardarCargando] = useState(true);

  useEffect(()=>{
   
     if(!IdReceta) return; 

     const consultaReceta = async()=>{

        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IdReceta}`; 

        let respuesta = await axios.get(url)


        setTimeout(()=>{
            console.log(respuesta.data.drinks[0])
            guardarReceta(respuesta.data.drinks[0]); 

            guardarCargando(false)
        },1000)

     
     

        

     }

     consultaReceta(); 




  },[IdReceta])




  return (
    <ModalContext.Provider
      value={{
        cargando,
        informacionReceta,
        guardarIdReceta,
        guardarCargando
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
