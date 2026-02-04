const texto_cambio = document.getElementById('Texto');
const AccionCambio = document.getElementById('accion');
const opciones = document.getElementById('opciones');
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');

const lista = [
    'Holiii mi isa linda',
    'Como estas?, espero que estes muy bien y claramente hermosa (como siempre)',
    'Pasaba por aqui para preguntarte una cositaa',
    'Bueno... en realidad una cosita muy importante',
    'La cual es sii',
    '¿Quieres ser mi san valentine?💗',
    'O en ingles, Will you be my Valentine?💗'
];

let indice = 0;

AccionCambio.addEventListener('click', () => {
    texto_cambio.textContent = lista[indice];

    if (indice === lista.length - 1) {
        opciones.style.display = 'block';
        AccionCambio.remove();
    }

    indice++;
});

// Botón SÍ → redirección
btnSi.addEventListener('click', () => {
    window.location.href = 'https://gifft.me/es/o/l/oevtz8bj68wixt0fzu9mdk6e';
});

// Botón NO → huye por la pantalla
btnNo.addEventListener('mouseenter', moverBoton);
btnNo.addEventListener('click', moverBoton);

function moverBoton() {
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;

    const maxX = anchoPantalla - btnNo.offsetWidth;
    const maxY = altoPantalla - btnNo.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}
