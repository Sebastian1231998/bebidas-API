import React, {useContext , useState} from 'react';
import {ModalContext} from '../context/ModalContext'; 
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from './Spinner';



function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    const [modalStyle ] = useState(getModalStyle); 
    const [open , setOpen] = useState(false); 


    const classes = useStyles(); 

    const handleOpen = ()=>{

        setOpen(true)
    }
    const handleClose = ()=>{

        setOpen(false)

    }

        let {cargando ,informacionReceta , guardarIdReceta, guardarCargando} = useContext(ModalContext)
    

    return ( 

           <div className="col-md-4 mb-3">

           
       
              <div className="card">
                    <h2 className="card-header">{receta.strDrink}</h2>
                    
                    <img className="card-img-top" src={receta.strDrinkThumb} alt={receta.strDrink} />

                    <div className="card-body">

                      <button 
                      type="button"
                      className="btn btn-block btn-primary"
                      onClick = {(e)=>{
 
                        guardarIdReceta(receta.idDrink); 
                        handleOpen();
                        guardarCargando(true)
                      }}
                      >

                          Ver Receta
                      </button>

                    </div>

                  
              </div>

              
               <Modal
              open = {open}
              onClose ={() =>{
                  guardarIdReceta(null)
                  handleClose()
                  }}
              >
                <div style={modalStyle} className={classes.paper}>

                   {cargando ? <Spinner /> : (

                    <div>
                    <h2 className="text-center mt-4">{informacionReceta.strDrink}</h2>
                    <h3 className="mt-4">Instrucciones</h3>

                    <p className="mt-4">
                        {informacionReceta.strInstructions}
                    </p>

                    <img className="img-fluid my-4"  src={informacionReceta.strDrinkThumb} />
                    </div>

                       ) }

             
                   </div>

 
             </Modal>
        
           
        
              

           </div> 

        

     );
}
 
export default Receta;