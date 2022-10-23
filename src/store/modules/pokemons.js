import { createSlice } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    allPokemons: [],
  },
  reducers: {
    getPokemons: (state, action) => {
        console.log('Funciono');
        state.allPokemons = ['ivvy', 'Pikachu']
    },
  },
});

export const { getPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
