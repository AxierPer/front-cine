export async function films (){
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
                    <label for="image">URL de la imagen</label>
                    <input type="text" id="image" class="form-control" placeholder="URL de la imagen" required>
                    <label for="trailer">URL del trailer</label>
                    <input type="text" id="trailer" class="form-control" placeholder="URL del trailer" required>
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
}