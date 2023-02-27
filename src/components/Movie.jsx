import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movie, setmovie] = useState([]);
  const [title, settitle] = useState("Action");
  const [isClicked, setIsClicked] = useState(false);

  const fetchMovies = async () => {
    const URL = `https://www.omdbapi.com/?s=${
      title ? title : "Action"
    }&apikey=8f580c86`;
    const response = await fetch(URL);
    const final_Data = await response.json();
    setmovie(final_Data.Search);
  };
 
  
  

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [isClicked]);
  //console.log("isClicked: ", isClicked);
  
  return (
    <>
      <div>
        <div className="main">
          <h2>FindMovie</h2>
        </div>
        <div className="content">
          <input
            type="text"
            name="search"
            placeholder="Movies"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsClicked((prevState) => !prevState);
            }}
            className="search"
          >
            Search
          </button>
        </div>
        <div className="content-container">
          <p>Best Movies</p>
        </div>
        <div className="show">
          {movie?.length > 0
            ? movie?.map((item, i) => (
                <div key={i} className="show-cards">
                  <img src={item.Poster} className="picture" alt="poster" />
                  <h4>{item.Title}</h4>
                  <p>Year- {item.Year}</p>
                </div>
              ))
            : "Movie not found"}
        </div>
      </div>
    </>
  );
};

export default Movie;
