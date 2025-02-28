export async function loadData(id: string) {
  try {
    const response = await fetch("http://localhost:3000/data?id=" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al cargar los datos.", error);
  }
}

export async function addData(seats: {id: number, seat: string, status: string}[]) {
  try {
    const response = await fetch("http://localhost:3000/add-libre", {
      method: "POST",
      body: JSON.stringify(seats),
    });
    console.log(await response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}

export async function reserveSeats(id:string ,seats: {id: number, seat: string, status: string}[]) {
  try {
    const response = await fetch("http://localhost:3000/update-data", {
      method: "POST",
      body: JSON.stringify({"id":id, seats}),
    });
    console.log(response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}

export async function loadMovies() {
  try {
    const response = await fetch("http://localhost:3000/peliculas");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al cargar los datos.", error);
  }
}