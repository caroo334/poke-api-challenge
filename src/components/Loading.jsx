import "../styles/Loading.css";

export const Loading = () => (
  <img
    className="loading"
    src={`${process.env.PUBLIC_URL}/pokeLoading.gif`}
    alt="loading de pikachu"
  />
);
