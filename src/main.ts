import "./style.css";
import { addModalSeats } from "./components/seats.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>Sala de cine</h1>

  <button id="btnSeatAsignament">Asignar asientos</button>
  <button>Crear cartelera</button>

  <div id="seatsAsignament" class ="modal"></div>
`;

// Functions
const btnSeatAsignament = document.getElementById("btnSeatAsignament");
const modal = document.getElementById("seatsAsignament");

btnSeatAsignament?.addEventListener("click", () => {
  addModalSeats();
  modal!.style.display = "block";
  window.onclick = (event) => {
    if (event.target == modal) {
      modal!.style.display = "none";
    }
  };

  const span: HTMLElement | null = document.querySelector(".close");
  span!.onclick = function () {
    modal!.style.display = "none";
  };
});
