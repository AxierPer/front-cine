import { Movie, MovieCreate,SeatOcupation } from "../types/types.ts";

export async function loadData(id: string) {
  try {
    const response = await fetch("http://localhost:3000/data?id=" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al cargar los datos.", error);
  }
}

export async function addData(seats: SeatOcupation[], movieName: string) {
  try {
    const response = await fetch("http://localhost:3000/add-libre", {
      method: "POST",
      body: JSON.stringify({
        seats,
        movieName,
      }),
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

export async function createMovies(movie: MovieCreate) {
  try {
    const response = await fetch("http://localhost:3000/add-pelicula", {
      method: "POST",
      body: JSON.stringify(movie),
    });
    console.log(await response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}

export async function addUser(user: {name: string, movie: Movie, seats: SeatOcupation[]}) {
  try {
    const response = await fetch("http://localhost:3000/add-user", {
      method: "POST",
      body: JSON.stringify(user),
    });
    console.log(await response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}

export async function removeMovie (id: string) {
  try {
    const response = await fetch("http://localhost:3000/remove-movie", {
      method: "POST",
      body: JSON.stringify({id}),
    });
    console.log(await response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}

export async function showUser () {
  try {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al cargar los datos.", error);
  }
}

export async function removeUserByMovie (id: string) {
  try {
    const response = await fetch("http://localhost:3000/remove-users-by-movie", {
      method: "POST",
      body: JSON.stringify({id}),
    });
    console.log(await response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}