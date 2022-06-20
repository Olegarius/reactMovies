import React, { useContext } from "react";
import MovieDetails from "./MovieDetails";
import Search from "./Search";
import { MovieContext } from "contextProviders";

const Header:React.FC = () => {
  const [{selectedMovie}] = useContext(MovieContext);

  return (
    <>{selectedMovie ? <MovieDetails /> : <Search />}</>
  );
}

  export default Header;
