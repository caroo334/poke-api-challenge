import { useDispatch, useSelector } from "react-redux";
import { Button } from "./../components/Button";
import {
  getAllPokemons,
  getNextPokemonsPage,
  getPrevPokemonsPage,
} from "../store/modules/pokemons";
// import Card from "../components/Card";
import { ListPokemons } from "../components/ListPokemons";
import "../styles/Home.css";
import { useState } from "react";

function Home() {
  const [inputPokemonsNumber, setInputPokemonsNumber] = useState(20);
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.pokemons.loading);
  const allPokemonsState = useSelector((state) => state.pokemons.allPokemons);
  const nextPage = useSelector((state) => state.pokemons.allPokemons.next);
  const prevPage = useSelector((state) => state.pokemons.allPokemons.previous);

  const renderMainButton = () => {
    return <Button onClick={() => handleClick()}> Cargar Información </Button>;
  };

  const handleClick = () => {
    dispatch(getAllPokemons(inputPokemonsNumber));
  };

  const handleClickNextPage = (e) => {
    e.preventDefault();
    dispatch(getNextPokemonsPage(nextPage));
  };

  const handleClickPrevPage = (e) => {
    e.preventDefault();
    dispatch(getPrevPokemonsPage(prevPage));
  };

  const handleChangeInputPokemonsNumber = (e) => {
    e.preventDefault();
    setInputPokemonsNumber(e.target.value);
  };

  return (
    <div className="home-container">
      <nav className="home-title">
        <h1>Pokedex</h1>
      </nav>
        {allPokemonsState.count > 0 ? (
          <div className="home-bring-number-list-container">
            <input
              value={inputPokemonsNumber}
              onChange={handleChangeInputPokemonsNumber}
              type="number"
              placeholder="Cantidad de pokemons"
              className="home-input"
            />
            <Button onClick={handleClick}>Bring</Button>{" "}
          </div>
        ) : null}
        <div className="home-pagination">
          {prevPage ? (
            <Button onClick={handleClickPrevPage}>Previus</Button>
          ) : null}
          {nextPage ? (
            <Button onClick={handleClickNextPage}>Next</Button>
          ) : null}
        </div>
      {loadingState ? (
        <div className="home-loading">
          <img src={`${process.env.PUBLIC_URL}/pokeLoading.gif`} alt="" />
          <div>CARGANDO</div>
        </div>
      ) : allPokemonsState.count > 0 ? (
        <ListPokemons data={allPokemonsState.results} />
      ) : (
        renderMainButton()
      )}
    </div>
    // <div className="App d-flex">
    //   <div className="container">
    //     <div className="row min-vh-100">
    //       <div className="col-6 m-auto">

    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   <div>
    //   <button>1</button>
    //   <button>2</button>
    //   <button>3</button>
    //   <p>...</p>
    //   <button>{Math.round(allPokemonsState.count / inputPokemonsNumber)}</button>
    // </div>
  );
}

export default Home;
