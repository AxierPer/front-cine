import { loadData,reserveSeats  } from "../methods/connect";

export async function addModalSeats() {
  document.querySelector<HTMLDivElement>("#seatsAsignament")!.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="screen">PANTALLA</div>
    <div class="cinema"></div>

    <div class="selection">
      <button class="btn btn-primary" id="btnReserve">Reservar</button>
      <button class="btn btn-secondary" id="btnCancel">Cancelar</button>
    </div>
  </div>
`;

  loadData();

  const cinema: HTMLElement | null = document.querySelector(".cinema");

  let asientos = await loadData();

  // Crear asientos en la cuadrícula
  for (let i = 0; i < asientos.seats.length; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");


    seat.innerHTML = `<span>${asientos.seats[i].seat}</span>`;

    if (asientos.seats[i].status != "Free") {
      seat.classList.add("occupied");
    } else {
      seat.addEventListener("click", () => {
        reserveSeats(i,asientos.seats[i].seat,"Occupied");
        seat.classList.toggle("selected");
      });
    }

    cinema!.appendChild(seat);
  }

}
