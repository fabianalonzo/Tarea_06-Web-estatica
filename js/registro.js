const casaSelect = document.getElementById('casa');
const mensajeDiv = document.getElementById('mensaje-casa');
const btnCargar = document.getElementById('btnCargar');

// Matriz de casas
const casas = [
  "Stark",
  "Targaryen",
  "Lannister",
  "Baratheon",
  "Greyjoy",
  "Martell",
  "Tyrell",
  "Otra"
];

// Diccionario de emojis
const casasEmojis = {
  Stark: "🐺",
  Targaryen: "🐉",
  Lannister: "🦁",
  Baratheon: "🦌",
  Greyjoy: "🐙",
  Martell: "☀️",
  Tyrell: "🌹",
  Otra: "⚔️"
};

// Función para cargar opciones al select
btnCargar.addEventListener('click', function () {
  // Limpiar el select
  casaSelect.innerHTML = '<option selected disabled>Elige tu casa...</option>';

  // Agregar opciones dinámicamente
  casas.forEach(casa => {
    casaSelect.innerHTML += `<option value="${casa}">${casa}</option>`;
  });

  // Mostrar mensaje
  mensajeDiv.innerHTML = "Las casas han sido cargadas. Elige sabiamente...";
});

// Detectar selección
casaSelect.addEventListener('change', function () {
  const casa = casaSelect.value;
  mensajeDiv.innerHTML = `Has jurado lealtad a la Casa <strong>${casa}</strong> ${casasEmojis[casa]}`;
});
