import { useDispatch, useSelector } from "react-redux";
import { Button } from "./../components/Button";
import { getAllPokemons, getNextPokemonsPage, getPrevPokemonsPage } from "../store/modules/pokemons";
// import Card from "../components/Card";
import { ListPokemons } from "../components/ListPokemons";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.pokemons.loading);
  const allPokemonsState = useSelector((state) => state.pokemons.allPokemons);
  const nextPage = useSelector((state) => state.pokemons.allPokemons.next);
  const prevPage = useSelector((state) => state.pokemons.allPokemons.previous);


  const renderMainButton = () => {
    return <Button onClick={() => handleClick()}> Cargar Información </Button>;
  };

  const handleClick = () => {
    dispatch(getAllPokemons());
  };

  const handleClickNextPage = (e) => {
    e.preventDefault();
    dispatch(getNextPokemonsPage(nextPage));
  }

  const handleClickPrevPage = (e) => {
    e.preventDefault();
    dispatch(getPrevPokemonsPage(prevPage));
  }

  return (
    <div className="home-container">
      <nav className="home-title">
        <h1>Pokedex</h1>
      </nav>

      <button onClick={handleClickPrevPage}>Previus</button>
      <button onClick={handleClickNextPage}>Next</button>
      {loadingState ? (
        <span>Loading... 🤪</span>
      ) : allPokemonsState.count > 0 ? (
        <ListPokemons data={allPokemonsState.results}/>
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
  );
}

export default Home;
