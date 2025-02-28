import { Movie, SeatOcupation } from "../types/types";

export async function boucherUser(id:string, seats: SeatOcupation[], movie: Movie) {
    document.querySelector<HTMLDivElement>("#boucherUser")!.innerHTML = `

    <div class="modal-content">
        <span id="close-seats" class="close">&times;</span>
        <div class="title">FORMULARIO</div>
        <div class="body"></div>

        <form class="userForm">
            <label for="userName">Nombre:</label>
            <input type="text" id="userName" name="userName" required>
            <div id="movieDetails">
                <label>Pelicula</label>
                <p>${movie.title}</p>
                <label>Horario</label>
                <p>${movie.schedule}</p>
                <label>Precio</label>
                <p>$${movie.price}</p>
                <label>Sala</label>
                <p>${movie.sala}</p>
            </div>
            <div id="selectedSeats">
                <label>Asientos</label>
                <p></p>
            </div>
            <button type="submit">Confirmar</button>
        </form>

        <div class="selection">
            <button class="btn btn-primary" id="btnReserve">Reservar</button>
            <button class="btn btn-secondary" id="btnCancel">Cancelar</button>
        </div>
    </div>
    `
    console.log(id,seats,movie);

    const selectedSeatsContainer = document.querySelector<HTMLDivElement>("#selectedSeats");

    if (selectedSeatsContainer) {
        seats.forEach(seat => {
            const seatElement = document.createElement("p");
            seatElement.textContent = `Asiento: ${seat.seat}`;
            selectedSeatsContainer.appendChild(seatElement);
        });
    }
}