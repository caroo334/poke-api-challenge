import "../styles/ListPokemons.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  getNextPokemonsPage,
  getPrevPokemonsPage,
} from "../store/modules/pokemons";
import { Button } from "./Button";

export const ListPokemons = ({ data }) => {
  const dispatch = useDispatch();
  const [inputPokemonsNumber, setInputPokemonsNumber] = useState(20);
  const nextPage = useSelector((state) => state.pokemons.allPokemons.next);
  const prevPage = useSelector((state) => state.pokemons.allPokemons.previous);

  function findImage(url) {
    let matchit = "" + url.match(/[^v2]([0-9]+)/gi);
    matchit = matchit.substring(1);
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      matchit +
      ".png"
    );
  }

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
        {data.map((e, i) => {
          return (
            <ul
              key={`${e}_${i}`}
              className="home-list-name-ul col-12 col-sm-6 col-md-3"
            >
              <li className="home-list-name-li ">{e.name}</li>{" "}
              <img src={findImage(e.url)} alt="" className="img-fluid" />
            </ul>
          );
        })}
      </div>
    </div>
  );
};
