import { loadData, removeMovie, removeUserByMovie  } from "../methods/connect";
import { Movie,SeatOcupation } from "../types/types";
import { boucherUser } from "./usuario";

export async function addModalSeats(id:string, movie: Movie) {
  document.querySelector<HTMLDivElement>("#seatsAsignament")!.innerHTML = `
  <div class="modal-content">
    <span id="closeSeats" class="close">&times;</span>
    <div class="title">PANTALLA</div>
    <div class="body"></div>

    <div id="boucherUser" class ="modal"></div>

    <div class="selection">
      <button class="btn btn-primary" id="btnReserve">Reservar</button>
      <button class="btn btn-secondary" id="btnCancel">Cancelar</button>
      <button class="btn btn-secondary" id="btnEliminar">Eliminar</button>
    </div>
  </div>
`;

  const body: HTMLElement | null = document.querySelector(".body");

  let asientos = await loadData(id);
  let asientosReservados: SeatOcupation[] = [];

  // Crear asientos en la cuadrícula
  for (let i = 0; i < asientos.length; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");


    seat.innerHTML = `<span>${asientos[i].seat}</span>`;

    if (asientos[i].status != "Free") {
      seat.classList.add("occupied");
    } else {
      seat.addEventListener("click", () => {
        asientosReservados.push({
          id: i, 
          seat: asientos[i].seat,
          status: "Occupied",
          movie: movie.title
        });
        seat.classList.toggle("selected");
      });
    }
    body!.appendChild(seat);
  }

  const modalUser = document.querySelector<HTMLDivElement>("#boucherUser");
  const btn = document.querySelector<HTMLButtonElement>("#btnReserve");
  const btnEliminar: HTMLElement | null = document.querySelector("#btnEliminar");
  
  btnEliminar!.onclick = function () {
    removeMovie(id);
    removeUserByMovie(movie.id);
    window.location.reload();
  };

  btn!.addEventListener("click", () => {
    boucherUser(id, asientosReservados, movie);
    modalUser!.style.display = "block";
    window.onclick = (event) => {
      if (event.target == modalUser) {
        modalUser!.style.display = "none";
      }
    };
  });
}

