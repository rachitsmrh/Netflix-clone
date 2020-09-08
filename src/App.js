import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import "./Row.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={request.NetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={request.Trending} />
      <Row title="Top Rated" fetchURL={request.TopRated} />
      <Row title="Action Movies" fetchURL={request.ActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.ComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.HorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.RomanceMovies} />
    </div>
  );
}

export default App;
