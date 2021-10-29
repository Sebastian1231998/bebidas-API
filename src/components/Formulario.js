import React,{useContext , useState} from "react";
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext); 


    const {guardarBusquedaReceta, guardarConsultar} = useContext(RecetasContext); 

    const [FormReceta, busquedaFormReceta ] = useState({

     nombre:'',
     categoria:'Ordinary Drink'
    })

    const obtenBusqueda = (e) => {
  
      const recetas = {
            ...FormReceta,
            [e.target.name] : e.target.value

      }; 

      busquedaFormReceta(recetas); 
    }
  


  return (
    <form 
    className="col-12"
    onSubmit={
      (e)=>{

        e.preventDefault();

        guardarBusquedaReceta(FormReceta)
        guardarConsultar(true);

      }
    }
    >
      <fieldset className="text-center mt-4">Buscador De bebidas</fieldset>

      <div className="row mt-4s">
        <div className="col-md-4 ">
          <input
            type="text"
            placeholder="Busca por Ingrediente"
            className="form-control"
            name="nombre"
            onChange = {obtenBusqueda}
          />
        </div>

        <div className="col-md-4">
          <select 
           className="form-control" 
           onChange = {obtenBusqueda}
           name="categoria"
         
           >

           {categorias.map( categoria =>(

            <option value={categoria.strCategory} key={categoria.strCategory}>{categoria.strCategory}</option>
           ))}
          
          </select>
        </div>

        <div className="col-md-4">
          
          <input 
          type="submit" 
          className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
