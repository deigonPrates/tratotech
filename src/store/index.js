import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlices from "./reducers/carrinho";
import buscaSlices from "./reducers/busca";

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlices,
        busca: buscaSlices
    }
});

export default store;