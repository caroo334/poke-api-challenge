import "../styles/ListPokemons.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  getNextPokemonsPage,
  getPrevPokemonsPage,
} from "../store/modules/pokemons";
import { Button } from "./Button";
import { PokemonCard } from "./PokemonCard";

export const ListPokemons = ({ data }) => {
  const dispatch = useDispatch();
  const [inputPokemonsNumber, setInputPokemonsNumber] = useState(20);
  const nextPage = useSelector((state) => state.pokemons.allPokemons.next);
  const prevPage = useSelector((state) => state.pokemons.allPokemons.previous);

  const handleChangeInputPokemonsNumber = (e) => {
    e.preventDefault();
    setInputPokemonsNumber(e.target.value);
  };

  const handleClickNextPage = (e) => {
    e.preventDefault();
    dispatch(getNextPokemonsPage(nextPage));
  };

  const handleClickPrevPage = (e) => {
    e.preventDefault();
    dispatch(getPrevPokemonsPage(prevPage));
  };

  const handleClick = () => {
    dispatch(getAllPokemons(inputPokemonsNumber));
  };

  return (
    <div>
      <div className="pokemons-bring-number-list-container">
        <input
          value={inputPokemonsNumber}
          onChange={handleChangeInputPokemonsNumber}
          type="number"
          placeholder="cantidad de pokemones"
          className="home-input"
        />
        <Button onClick={handleClick}>Bring</Button>
      </div>
      <div className="pokemons-pagination">
        {prevPage ? (
          <Button onClick={handleClickPrevPage}>Previous</Button>
        ) : null}
        {nextPage ? <Button onClick={handleClickNextPage}>next</Button> : null}
      </div>
      <div className="box row ">
        {data.map((pokemon, i) => (
          <PokemonCard key={`${pokemon.name}-${i}`} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
