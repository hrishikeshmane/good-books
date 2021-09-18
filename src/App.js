import React, { useState } from "react";
import "./styles.css";

const MoviesDB = {
  Space: [
    {
      name: "Interstellar",
      rating: "5/5",
      des:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Martian",
      rating: "5/5",
      des:
        "Mark Watney is stranded on the planet of Mars after his crew leaves him behind, presuming him to be dead due to a storm. With minimum supplies, Mark struggles to keep himself alive."
    },
    {
      name: "Gravity",
      rating: "4/5",
      des:
        "On an outer space mission, Dr Ryan Stone, an engineer, and Matt Kowalski, an astronaut, are hit by high-speed space debris. As the situation gets dire, Stone, the lone survivor, rises to the occasion."
    }
  ],
  SciFi: [
    {
      name: "Looper",
      rating: "3.5/5",
      des:
        "In the near future, the mob sends their victims back in time to get them executed by the loopers. Joe, one such looper, finds himself to be the victim of his own actions."
    },
    {
      name: "Tenet",
      rating: "4.5/5",
      des:
        "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world."
    },
    {
      name: "Edge of Tomorrow",
      rating: "4.5/5",
      des:
        "With the help of warrior Rita Vrataski, Major William Cage has to save Earth and the human race from an alien species, after being caught in a time loop."
    }
  ],
  Thriller: [
    {
      name: "The Prestige",
      rating: "5/5",
      des:
        "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences."
    },
    {
      name: "Shutter Island",
      rating: "5/5",
      des:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place."
    },
    {
      name: "Taxi Driver",
      rating: "5/5",
      des:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he decides to save an underage prostitute from her pimp in an effort to clean the city of its corruption."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Space");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>My Movie recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(MoviesDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              color: "white",
              background: "blue",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MoviesDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller", color: "#A9A9A9" }}>
                {" "}
                {book.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller", color: "#696969" }}>
                {" "}
                {book.des}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
