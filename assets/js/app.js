import {Opcion} from './option.class.js';
import {opcionList} from './option-list.class.js';
const inputBox = document.querySelector('#inputBox');
const addButton = document.querySelector('#add');
const rdmButton = document.querySelector('#rdm');
const componente_lista_opciones = document.querySelector('.lista_opciones');
const backButton = document.querySelector('.back');
const listaOpciones = new opcionList();
const imagen = document.querySelector('.imagen');

inputBox.focus();

const agregarOpcionLista = () => {
	const nuevaOpc = new Opcion(inputBox.value);
	listaOpciones.nuevaOpcion(nuevaOpc);
	crearOpcionHTML(nuevaOpc);
	inputBox.value = '';
	console.log(listaOpciones);
};

const crearOpcionHTML = (opcion) => {
	const htmlOpcion = `
    <li class='opcion box' id='${opcion.id}' style="background-color:${opcion.color}">
    ${opcion.opcion}   
        <span  class="close"> X </span>
    </li>
    `;

	const div = document.createElement('div');
	div.innerHTML = htmlOpcion;
	componente_lista_opciones.append(div.firstElementChild);
};

addButton.addEventListener('click', () => {
	if (inputBox.value) {
		imagen.classList.add('hide');
		document.querySelector('.author').classList.add('hide');
		agregarOpcionLista();
		inputBox.focus();
	} else {
	}
});

componente_lista_opciones.addEventListener('click', (e) => {
	const IDcajaPresionada = e.target.parentElement.id;

	if (e.path[0].innerText == 'X') {
		listaOpciones.eliminarOpcion(IDcajaPresionada);
		componente_lista_opciones.removeChild(
			document.getElementById(`${IDcajaPresionada}`)
		);
		if (listaOpciones.opciones.length <= 0) {
			imagen.classList.remove('hide');
			document.querySelector('.author').classList.remove('hide');
		}
	} else {
	}
});

rdmButton.addEventListener('click', () => {
	if (listaOpciones.opciones.length > 0) {
		backButton.classList.remove('hide');
		const resultado_aleat = document.querySelector('.resultado_aleatorio');

		resultado_aleat.classList.add('open');
		const resultado_mensaje = document.querySelector('.resultado');
		resultado_mensaje.textContent =
			listaOpciones.opciones[listaOpciones.seleccionarAzar()].opcion;
	} else {
	}
});

backButton.addEventListener('click', () => {
	const resultado_aleat = document.querySelector('.resultado_aleatorio');
	backButton.classList.toggle('hide');
	resultado_aleat.classList.remove('open');
});
