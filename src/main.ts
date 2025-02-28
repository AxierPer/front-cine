import "./style.css";
import { addModalSeats } from "./components/seats.ts";
import { films } from "./components/filsm.ts";
import { loadMovies } from "./methods/connect.ts";
import { Movie } from "./types/types.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Sala de cine</h1>

  <div class="movies"></div>

  <button id="btnFilms">Agregar Pelicula</button>

  <div id="seatsAsignament" class ="modal"></div>
  <div id="films" class ="modal"></div>

`;

// Functions
// const btnSeatAsignament = document.getElementById("btnSeatAsignament");
const modalSeats = document.getElementById("seatsAsignament");
const modalFilms = document.getElementById("films");
const btnFilms = document.getElementById("btnFilms");
const movies = document.querySelector(".movies");
const moviesPlayer = await loadMovies();

for (let i = 0; i < moviesPlayer.length ; i++) {
  const movie = document.createElement("div");
  movie.classList.add("movie");
  movie.innerHTML = `
  <div id="card-${moviesPlayer[i].id}" class="card">
        <img src="${moviesPlayer[i].image}" alt="Movie Poster" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${moviesPlayer[i].title}</h5>
            <p class="card-text">${moviesPlayer[i].description}</p>
            <p class="card-schedule">${moviesPlayer[i].schedule}</p>
            <p class="card-price">$${moviesPlayer[i].price}</p>
            <p class="card-sala">Sala ${moviesPlayer[i].sala}</p>
        </div>
    </div>
  `;
  movies!.appendChild(movie);
  let movieDetails: Movie = {
    id: moviesPlayer[i].id,
    title: moviesPlayer[i].title,
    description: moviesPlayer[i].description,
    schedule: moviesPlayer[i].schedule,
    price: moviesPlayer[i].price,
    sala: moviesPlayer[i].sala
  };

  const cardMovies = document.querySelector(`#card-${moviesPlayer[i].id}`);

  cardMovies?.addEventListener("click", () => {
    addModalSeats(cardMovies!.id.split("-")[1], movieDetails);
    modalSeats!.style.display = "block";
    window.onclick = (event) => {
      if (event.target == modalSeats) {
        modalSeats!.style.display = "none";
      }
    };
  
    const span: HTMLElement | null = document.querySelector("#close-seats");
    span!.onclick = function () {
      modalSeats!.style.display = "none";
    };
  
    // const btnReserva: HTMLElement | null = document.querySelector("#btnReserve");
    // btnReserva!.onclick = function () {
    //   modalSeats!.style.display = "none";
    // };
  
    const btnCancelar: HTMLElement | null = document.querySelector("#btnCancel");
    btnCancelar!.onclick = function () {
      modalSeats!.style.display = "none";
    };
  });
}

btnFilms?.addEventListener("click", () => {
  films();
  modalFilms!.style.display = "block";
  window.onclick = (event) => {
    if (event.target == modalFilms) {
      modalFilms!.style.display = "none";
    }
  };

  const span: HTMLElement | null = document.querySelector("#close-films");
  span!.onclick = function () {
    modalFilms!.style.display = "none";
  };
});