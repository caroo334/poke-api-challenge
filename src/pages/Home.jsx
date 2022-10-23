import { useDispatch } from "react-redux";
import { Button } from "./../components/Button";
import { getPokemons } from "../store/modules/pokemons";

function Home() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPokemons());
  };

  return (
    <div className="App d-flex">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-6 m-auto">
            <Button onClick={() => handleClick()}> Cargar Información </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
