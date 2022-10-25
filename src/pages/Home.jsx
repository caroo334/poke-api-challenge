import { useDispatch, useSelector } from "react-redux";
import { Button } from "./../components/Button";
import { getAllPokemons } from "../store/modules/pokemons";
import { ListPokemons } from "../components/ListPokemons";
import "../styles/Home.css";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

function Home() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.pokemons.loading);
  const allPokemonsState = useSelector((state) => state.pokemons.allPokemons);
  const error = useSelector((state) => state.pokemons.error);

  const handleClick = () => {
    dispatch(getAllPokemons());
  };

  const renderPokemonsList = () => {
    if (error) {
      if (error?.message === "Network Error") {
        return (
          <Error
            onRetry={handleClick}
            message="Revisa tu conección a internet... 🥲"
          />
        );
      } else {
        return (
          <Error
            onRetry={handleClick}
            message="Ocurrio un error, vuelva a intentar! 🥹"
          />
        );
      }
    } else {
        return <ListPokemons data={allPokemonsState.results} />;
      }
  };

  return (
    <div className="home-container">
      <nav className="home-title">
        <h1> Pokedex</h1>
      </nav>

      {loadingState ? (
        <Loading />
      ) : allPokemonsState.count > 0 || error ? (
        renderPokemonsList()
      ) : (
        <Button onClick={() => handleClick()}> Cargar Información </Button>
      )}
    </div>
  );
}

export default Home;
