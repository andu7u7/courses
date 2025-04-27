import fetch from "node-fetch"; // Importamos
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then((response) => response.json()) // Convertimos la respuesta en JSON
//   .then((products) => {
//     console.log(products); // Mostramos la respuesta en la consola (Lógica de negocio)
//   })
//   .catch((error) => {
//     console.log(error); // Mostramos cualquier posible error
//   })
//   .finally(() => {
//     console.log(`Terminó la operación`);
//   });

const productDTO = {
  title: "New Product Course",
  price: 150.5,
  description: "New product",
  categoryId: 2,
  images: ["https://placeimg.com/640/480/any"],
};

function postData(urlApi, DTOdata) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DTOdata),
  });
  return response;
}

postData(`${API}/products`, productDTO)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Terminó el proceso!"));
