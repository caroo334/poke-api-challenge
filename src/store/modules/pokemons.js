import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPokemons = createAsyncThunk(
  "pokemons/getAllPokemons",
  async (numberOfPokemonsPerPage) => {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        params: {
          limit: numberOfPokemonsPerPage,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getNextPokemonsPage = createAsyncThunk(
  "pokemons/getNextPokemonsPage",
  async (nextPage) => {
    try {
      const { data } = await axios.get(nextPage);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const getPrevPokemonsPage = createAsyncThunk(
  "pokemons/getPrevPokemonsPage",
  async (prevPage) => {
    try {
      const { data } = await axios.get(prevPage);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    allPokemons: [],
    loading: false,
    error: null,
    pokemonDetail: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemons.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.allPokemons = action.payload;
    });

    builder.addCase(getAllPokemons.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(getNextPokemonsPage.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getNextPokemonsPage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.allPokemons = action.payload;
    });

    builder.addCase(getNextPokemonsPage.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(getPrevPokemonsPage.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getPrevPokemonsPage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.allPokemons = action.payload;
    });

    builder.addCase(getPrevPokemonsPage.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
