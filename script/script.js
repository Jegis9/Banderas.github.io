//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  //TODO
  let tabulado = "";
  let banderass = "";
  for (let pais of paises){
      
      tabulado += "<tr>"  
      
      for (let propiedad in pais){


         switch(propiedad){
            case "nombre":
                tabulado += `<th>Nombre:<th><td>${pais.nombre}</td>`
            break;

            case "capital":
                tabulado += `<th>Capital:<th><td col-3>${pais.capital}</td>`
            break;

            case "idioma_oficial":
                tabulado += `<th>Idioma:<th><td col-3>${pais.idioma_oficial}</td>`
            break;
            
            case "moneda":
                tabulado += `<th>Moneda:<th><td col-3>${pais.moneda}</td>`
            break;

            case "bandera":
                tabulado += '<th>Bandera:<th><td class="text-center text-primary"><img src="' + pais.bandera+'" /> </td>'
         
            break;
            default: 
            console.log("Error, no valido");

         }
      } 
      tabulado += "</tr>";
  }
  document.getElementById("contenido-body").innerHTML = tabulado;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {

    let nombre = prompt("Nombre: ");
    let bandera = prompt("Bandera: ");
    let capital = prompt("Capital: ");
    let idioma = prompt("Idioma: ");
    let moneda = prompt("Moneda: ");


    paises.push(
        {
          nombre: nombre,
          bandera: bandera,
          capital: capital,
          idioma_oficial: idioma,
          moneda: moneda
        }
      );


      mostrarPaises();
    
}



