import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./modules/pokemons";

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer
    }
})

export default store;