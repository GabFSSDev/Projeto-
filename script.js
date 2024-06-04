function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem no light mode
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/avatar-eu-light.png")
  } else {
    // se tiver sem light mode, manter imagem padrão
    img.setAttribute("src", "./assets/avatar-eu.png")
  }
}
