let data = document.getElementById("data");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  switch (Number(data.value)) {
    case 0:
      console.log("El número ingresado es 0");
      break;
    default:
      switch (Number(data.value % 2)) {
        case 0:
          console.log("par");
          break;
        case 1:
          console.log("impar");
          break;
      }
  }
});
