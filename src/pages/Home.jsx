import { useDispatch, useSelector } from "react-redux";
import { Button } from "./../components/Button";
import { getAllPokemons } from "../store/modules/pokemons";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.pokemons.loading);
  const allPokemonsState = useSelector((state) => state.pokemons.allPokemons);

  function findImage(url) {
    let matchit = "" + url.match(/[^v2]([0-9]+)/gi);
    matchit = matchit.substring(1);
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      matchit +
      ".png"
    );
  }


  const renderPokemonsList = () => {
    console.log(
      "IMEGEN",
      allPokemonsState.results.map((e) => e.url)
    );

    return (
      <div className="box">
        {allPokemonsState.results.map((e, i) => {
          return (
            <ul key={`${e}_${i}`} className="home-list-name-ul">
              <li className="home-list-name-li">{e.name}</li>{" "}
              <img src={findImage(e.url)} alt="" />
            </ul>
          );
        })}
      </div>
    );
  };
  const renderMainButton = () => {
    return <Button onClick={() => handleClick()}> Cargar Información </Button>;
  };

  const handleClick = () => {
    dispatch(getAllPokemons());
  };

  return (
    <div className="home-container">
      <nav className="home-title">
        <h1>Pokedex</h1>
      </nav>
      {loadingState ? (
        <span>Loading... 🤪</span>
      ) : allPokemonsState.count > 0 ? (
        renderPokemonsList()
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
