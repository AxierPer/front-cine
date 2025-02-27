export async function loadData() {
  try {
    const response = await fetch("http://localhost:3000/data");
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
    console.log(response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}

export async function reserveSeats(id: number, seat: string, status: string) {
  try {
    const response = await fetch("http://localhost:3000/update-data", {
      method: "POST",
      body: JSON.stringify({ id, seat, status }),
    });
    console.log(response.json());
  } catch (error) {
    console.log("Error al ingresar los datos.", error);
  }
}