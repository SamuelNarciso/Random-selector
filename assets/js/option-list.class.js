
export class opcionList {
	constructor() {
		this.opciones = [];
	}

	nuevaOpcion(opcion) {
		this.opciones.push(opcion);
	}
	eliminarOpcion(id) {
		this.opciones = this.opciones.filter((opc) => opc.id != id);
	}
	seleccionarAzar() {
		let valorAleatorio = Math.floor(Math.random() * (0, this.opciones.length));
		return valorAleatorio;
	}
}
