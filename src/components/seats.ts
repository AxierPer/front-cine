import { loadData } from "../methods/connect";
loadData();

export function addModalSeats() {
  document.querySelector<HTMLDivElement>("#seatsAsignament")!.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="screen">PANTALLA</div>
    <div class="cinema"></div>
  </div>
`;

  //const file = Bun.file("./info.json");
  const rows: number = 11; // Número de filas
  const cols: number = 10; // Número de columnas
  const cinema: HTMLElement | null = document.querySelector(".cinema");
  const letter: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let fila: number = 0;
  let columna: number = 1;

  // Crear asientos en la cuadrícula
  for (let i = 0; i < rows * cols; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");

    if (i % 10 == 0) {
      fila += 1;
    }

    if (columna > 10) {
      columna = 1;
    }

    seat.innerHTML = `<span>${letter[fila - 1]} - ${columna}</span>`;
    let seatNumber: string = letter[fila - 1] + " - " + columna;
    columna++;

    if (Math.random() < 0.2) {
      seat.classList.add("occupied");
    } else {
      seat.addEventListener("click", () => {
        seat.classList.toggle("selected");
      });
    }

    cinema!.appendChild(seat);
  }
}
