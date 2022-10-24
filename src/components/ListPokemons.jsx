import '../styles/ListPokemons.css';

export const ListPokemons = ({ data }) => {
  function findImage(url) {
    let matchit = "" + url.match(/[^v2]([0-9]+)/gi);
    matchit = matchit.substring(1);
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      matchit +
      ".png"
    );
  }
  return (
    <div>
      {/* <h2>Lista de Pokemons</h2> */}
      <div className="box">
        {data.map((e, i) => {
          return (
            <ul key={`${e}_${i}`} className="home-list-name-ul">
              <li className="home-list-name-li">{e.name}</li>{" "}
              <img src={findImage(e.url)} alt="" />
            </ul>
          );
        })}
      </div>
    </div>
  );
};
