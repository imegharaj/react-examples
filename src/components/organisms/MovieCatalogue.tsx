import { CSSProperties, FC, useEffect, useState } from "react";

import MovieList from "../molecules/MovieList";
import MoviePreview from "../molecules/MoviePreview";

const movieCatalogueWrapperStyle: CSSProperties = {
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%"
};

const movieSectionWrapperStyle: CSSProperties = {
  flex: "1 1 50%",
  height: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const moviePreviewWrapperStyle: CSSProperties = {
  ...movieSectionWrapperStyle,
  textAlign: "center",
  marginRight: "1em",
  alignSelf: "flex-start"
};

const movieListWrapperStyle: CSSProperties = {
  ...movieSectionWrapperStyle,
  textAlign: "left",
  alignSelf: "flex-end"
};

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieCatalogueProps = {
  movieListData: MovieData[];
  setTitle: Function;
};

const getSelectedMovie = (data: any, id: string) => {
  // console.log("data: ", data);
  const selectedMovie = data.find((movie: any) => movie.id === id);
  return selectedMovie;
};
const MovieCatalogue: FC<MovieCatalogueProps> = ({
  movieListData,
  setTitle
}) => {
  const [selectedMovieId, setSelectedMovieId] = useState<string>(
    movieListData[0].id
  );
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    // const _selectedMovie =
    //   movieListData.find((movie) => movie.id === selectedMovieId) ||
    //   movieListData[0];
    const selectedData = getSelectedMovie(movieListData, selectedMovieId);
    // console.log("selectedData: ", selectedData);
    setSelectedMovie(selectedData);
  }, []);
  // const selectedMovie =
  //   movieListData.find((movie) => movie.id === selectedMovieId) ||
  //   movieListData[0];
  // console.log("selectedMovie: ", selectedMovie);
  const { title, poster, year, director, casts, genre } = selectedMovie;
  const onItemClick = (movieId) => {
    console.log("itemClick:", movieId);
    const selectedData = getSelectedMovie(movieListData, movieId);
    // console.log("selectedData: ", selectedData);
    setSelectedMovie(selectedData);
    setSelectedMovieId(movieId);
    setTitle(selectedData.title);
  };

  return (
    <div style={movieCatalogueWrapperStyle}>
      <div style={moviePreviewWrapperStyle}>
        <MoviePreview
          movieTitle={title}
          posterUrl={poster}
          releaseYear={year}
          director={director}
          casts={casts}
          genre={genre}
        />
      </div>
      <div style={movieListWrapperStyle}>
        <MovieList
          onItemClick={onItemClick}
          movieItemList={movieListData}
          selectedMovieId={selectedMovieId}
        />
      </div>
    </div>
  );
};

export default MovieCatalogue;
