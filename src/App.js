import React, { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";
import ListadoRecetas from "./components/ListadoRecetas";
import CateogoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalContextProvider from "./context/ModalContext";

function App() {
  return (
    <CateogoriasProvider>
      <RecetasProvider>
        <ModalContextProvider>
          <Header />

          <div className="container">
            <div className="row">
              <Formulario />

              <ListadoRecetas />

       
            </div>
          </div>



        </ModalContextProvider>
      </RecetasProvider>
    </CateogoriasProvider>
  );
}

export default App;
