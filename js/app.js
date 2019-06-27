//Estudiante
function Estudiante(codigo, nombre, nota){
	this.codigo = codigo;
	this.nombre = nombre;
	this.nota = nota;
}

//Agrupando las funciones
var gestor = {
	estudiantes: [],
	init: function () {
		document.getElementById('registroEstudiante').addEventListener('click', this.registrarEstudiante);
		document.getElementById('calculoPromedio').addEventListener('click', this.calcularNotaPromedio);
		document.getElementById('calculoNotaMayor').addEventListener('click', this.calcularNotaMayor);
		document.getElementById('calculoNotaMenor').addEventListener('click', this.calcularNotaMenor);
	},
	registrarEstudiante: function () {
		var codigo = document.getElementById('codigo');
		var nombre = document.getElementById('nombre');
		var nota = document.getElementById('nota');

		if (codigo.value && nombre.value && nota.value) {
			if (parseInt(codigo.value) > 0 ) {
				if (parseFloat(nota.value) >= 0 && parseFloat(nota.value) <= 10.0) {
					if (!gestor.estudianteExistente(parseInt(codigo.value))) {
						var nuevoEstudiante = new Estudiante(parseInt(codigo.value), nombre.value, parseFloat(nota.value));
						gestor.estudiantes.push(nuevoEstudiante);

						var notasTBody = document.getElementById('notas');
						var nuevoTr = document.createElement('tr');

						var idTd = document.createElement('td');
						idTd.textContent = nuevoEstudiante.codigo;
						nuevoTr.appendChild(idTd);

						var nombreTd = document.createElement('td');
						nombreTd.textContent = nuevoEstudiante.nombre;
						nuevoTr.appendChild(nombreTd);

						var notaTd = document.createElement("td");
						notaTd.textContent = nuevoEstudiante.nota;
						nuevoTr.appendChild(notaTd);

						notasTBody.appendChild(nuevoTr);
					}else{
						alert('El estudiante con el codigo '+ String(codigo.value) + 'ya existe');
					}
				}else{
					alert('La nota debe estar entre 0.0 y 10.0');
				}
			}else{
				alert('El codigo debe ser positivo');
			}
		}else{
			alert('Todos los campos son obligatorios');
		}
	},

	calcularNotaMayor: function () {
		var indiceNotaMayor = 0;
		var notaMayor = gestor.estudiantes[indiceNotaMayor].nota;

		for (var i=1; i < gestor.estudiantes.length; ++i){
			if (gestor.estudiantes[i].nota > notaMayor) {
				notaMayor = gestor.estudiantes[i].nota;
				indiceNotaMayor = i;
			}
		}

		alert('El estudiante ' + gestor.estudiantes[indiceNotaMayor].nombre + " tiene la nota mayor: " + notaMayor);
	},

	calcularNotaMenor: function () {
		var indiceNotaMenor = 0;
		var notaMenor = gestor.estudiantes[indiceNotaMenor].nota;

		for (var i=1 ; i < gestor.estudiantes.length; ++i){
			if (gestor.estudiantes[i].nota < notaMenor) {
				notaMenor = gestor.estudiantes[i].nota;
				indiceNotaMenor = i;
			}
		}

		alert('El estudiante ' + gestor.estudiantes[indiceNotaMenor].nombre + " tiene la nota menor: " + notaMenor);

	},

	calcularNotaPromedio: function() {
		var sumarNotas = 0.0;

		for (var i = 0; i < gestor.estudiantes.length; ++i){
			sumarNotas += gestor.estudiantes[i].nota;
		}

		alert('La nota promedio es: ' + (sumarNotas / gestor.estudiantes.length).toFixed(2));
	},

	estudianteExistente: function(codigo) {
		for(var i=0; i < this.estudiantes.length; ++i){
			if (codigo === this.estudiantes[i].codigo) {
				return true;
			}
		}
		return false;
	}
};

gestor.init();