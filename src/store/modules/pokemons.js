import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPokemons = createAsyncThunk(
  "pokemons/getAllPokemons",
  async () => {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(data);
      return data;
    } catch (error) {
      throw new error;
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    allPokemons: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemons.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
      state.loading= false
      state.allPokemons = action.payload;
    });
    builder.addCase(getAllPokemons.rejected, (state, action) => {
      state.error = action.error;
      state.loading= false

    });
  },
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
