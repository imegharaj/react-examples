import { FC, useState } from "react";
import "./styles.css";

import Header from "./components/atoms/Header";
import MovieCatalogue from "./components/organisms/MovieCatalogue";
import data from "../static/movie-data.json";

const App: FC<{}> = () => {
  const [title, setTitle] = useState<string>(data[0].title);
  return (
    <div className="App">
      <Header title={title} />
      <MovieCatalogue movieListData={data} setTitle={setTitle} />
    </div>
  );
};

export default App;
