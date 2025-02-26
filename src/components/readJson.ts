export async function readJson() {
  const file = await Bun.file("./info.json").text();
  console.log(file);

  return file;
}
