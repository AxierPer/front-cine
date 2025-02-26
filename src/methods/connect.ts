export async function loadData() {
  try {
    const response = await fetch("http://localhost:300/data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error al cargar los datos.", error);
  }
}
