import "../styles/PokemonCard.css";

export const PokemonCard = ({ pokemon }) => {
  const findImage = (url) => {
    let matchit = "" + url.match(/[^v2]([0-9]+)/gi);
    matchit = matchit.substring(1);
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      matchit +
      ".png"
    );
  };

  return (
    <ul className="home-list-name-ul col-12 col-sm-4 col-md-3">
      <li className="home-list-name-li ">{pokemon.name}</li>{" "}
      <img src={findImage(pokemon.url)} alt="" className="img-fluid" />
    </ul>
  );
};
