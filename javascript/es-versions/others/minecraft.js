function generateMinecraftCode() {
  let code = "";
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

  // Generar los primeros cuatro caracteres (letras mayúsculas)
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * 26); // Elegir una letra mayúscula aleatoria
    code += charset.charAt(randomIndex);
  }

  // Generar los siguientes cuatro caracteres (números)
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * 10) + 26; // Elegir un número aleatorio
    code += charset.charAt(randomIndex);
  }

  // Generar los siguientes doce caracteres (letras minúsculas)
  for (let i = 0; i < 12; i++) {
    let randomIndex = Math.floor(Math.random() * 26) + 36; // Elegir una letra minúscula aleatoria
    code += charset.charAt(randomIndex);
  }

  // Generar los últimos cinco caracteres (números)
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * 10) + 10; // Elegir un número aleatorio
    code += charset.charAt(randomIndex);
  }

  return code;
}

for (let i = 0; i < 10; i++) {
  let newCode = generateMinecraftCode();
  console.log(newCode);
}
