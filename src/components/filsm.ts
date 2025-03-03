import { addData, createMovies } from "../methods/connect";
import { MovieCreate, SeatOcupation } from "../types/types";

export async function films (id: number) {
    document.querySelector<HTMLDivElement>("#films")!.innerHTML = `
    <div class="modal-content">
        <span id="close-films" class="close">&times;</span>
        <div class="title">CREAR CARTELERA</div>
        <div class="cartelera">
            <form id="form">
                <div class="formulario">
                    <label for="name">Nombre de la película</label>
                    <input type="text" id="name" class="form-control" placeholder="Nombre de la película" required>
                    <label for="description">Descripción</label>
                    <input type="text" id="description" class="form-control" placeholder="Descripción" required>
                    <label for="genero">Genero</label>
                    <input type="text" id="genero" class="form-control" placeholder="Genero" required>
                    <label for="image">URL de la imagen</label>
                    <input type="text" id="image" class="form-control" placeholder="URL de la imagen" required>
                    <label for="schedule">Horario</label>
                    <input type="text" id="schedule" class="form-control" placeholder="Horario" required>
                    <label for="price">Precio</label>
                    <input type="number" id="price" class="form-control" placeholder="Precio" required>
                    <label for="room">Sala</label>
                    <input type="number" id="room" class="form-control" placeholder="Sala" required>
                </div>
                <button type="submit" class="btn btn-primary">Crear</button>
            </form>
        </div>
    </div>
    `;

    const form = document.querySelector<HTMLFormElement>("#form")!;
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = (document.querySelector<HTMLInputElement>("#name")!).value;
        const description = (document.querySelector<HTMLInputElement>("#description")!).value;
        const genero = (document.querySelector<HTMLInputElement>("#genero")!).value;
        const image = (document.querySelector<HTMLInputElement>("#image")!).value;
        const schedule = (document.querySelector<HTMLInputElement>("#schedule")!).value;
        const price = (document.querySelector<HTMLInputElement>("#price")!).value;
        const room = (document.querySelector<HTMLInputElement>("#room")!).value;
        let seats: SeatOcupation[] = [];

        const movie: MovieCreate = {
            id: String(id + 1),
            title: name,
            description,
            image,
            schedule,
            price: Number(price),
            sala: Number(room),
            genero,
        };

        const rows: number = 11; // Número de filas
        const cols: number = 10; // Número de columnas

        const letter: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

        let fila: number = 0;
        let columna: number = 1;

        for (let i = 0; i < rows * cols; i++) {
            if (i % 10 == 0) {
                fila += 1;
            }
        
            if (columna > 10) {
                columna = 1;
            }

            seats.push({
                id: i,
                seat: `${letter[fila - 1]} - ${columna}`,
                status: "Free",
                movie: name,
            });
            columna++;
        }

        createMovies(movie);
        setTimeout(() => {
            addData(seats, name);
            window.location.reload();
        }, 500);
        
        
    });
}