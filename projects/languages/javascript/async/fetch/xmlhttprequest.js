const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // Referencia del recurso a utilizar
const API = "https://api.escuelajs.co/api/v1";

// NOTA: XMLHttpRequest tiene 5 estados (readyState)
//     0 -> No iniciado
//     1 -> Cargando
//     2 -> Cargado
//     3 -> Procesamiento (si existe alguna descarga).
//     4 -> Completado

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest(); // Referencia | Nueva instancia

  xhttp.open("GET", urlApi, true); // Solicitud tipo GET
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error("Error" + urlApi);
      return callback(error, null);
    }
  };
  xhttp.send();
}

// Function Callback
fetchData(`${API}/products`, function (error, data) {
  if (error) return console.error(error);
  fetchData(`${API}/products/${data[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});
