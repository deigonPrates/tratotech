import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarcarrinho: (state, { payload }) => {
            const temItem = state.some(item => item.id === payload);

            if(!temItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ];

            return state.filter(item => item.id !== payload);
        },
        mudarquantidade: (state, { payload }) => {
            state = state.map(itemNoCarrinho => {
                if(itemNoCarrinho.id === payload.id) {
                    itemNoCarrinho.quantidade += payload.quantidade;
                }
                return itemNoCarrinho;
            });
        },
        resetarCarrinho: () => initialState
    }
});

export const { mudarcarrinho, mudarquantidade, resetarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;



