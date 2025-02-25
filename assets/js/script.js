// Definición de las clases
class Animal {
    constructor(nombre, tipo) {
        this._nombre = nombre;
        this._tipo = tipo;
    }

    // Getter para tipo que devuelve el mensaje requerido
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}

class Mascota extends Animal {
    constructor(nombre, tipo, enfermedad) {
        super(nombre, tipo);
        this._enfermedad = enfermedad;
    }

    // Getter y Setter para enfermedad
    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }

    // Método para obtener los datos del propietario
    datosPropietario(nombrePropietario, direccionPropietario, telefonoPropietario) {
        return `El nombre del dueño es: ${nombrePropietario}. El domicilio es: ${direccionPropietario}, y el número telefónico de contacto: ${telefonoPropietario}`;
    }

    // Método para obtener todos los datos combinados
    datosCompletos(nombrePropietario, direccionPropietario, telefonoPropietario) {
        return `${this.datosPropietario(nombrePropietario, direccionPropietario, telefonoPropietario)}. El tipo de animal es un: ${this._tipo}, mientras que el nombre de la mascota es: ${this._nombre} y la enfermedad es: ${this._enfermedad}`;
    }
}

class Perro extends Mascota {
    constructor(nombre, tipo, enfermedad) {
        super(nombre, tipo, enfermedad);
    }
}

class Gato extends Mascota {
    constructor(nombre, tipo, enfermedad) {
        super(nombre, tipo, enfermedad);
    }
}

class Conejo extends Mascota {
    constructor(nombre, tipo, enfermedad) {
        super(nombre, tipo, enfermedad);
    }
}

// Manejo del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los datos del formulario
    const tipoAnimal = document.getElementById('tipo').value;
    const nombreAnimal = document.getElementById('nombreMascota').value;
    const enfermedad = document.getElementById('enfermedad').value;
    const nombrePropietario = document.getElementById('propietario').value;
    const direccionPropietario = document.getElementById('direccion').value;
    const telefonoPropietario = document.getElementById('telefono').value;

    let mascota;

    // Crear la instancia de acuerdo al tipo de animal
    if (tipoAnimal === 'perro') {
        mascota = new Perro(nombreAnimal, tipoAnimal, enfermedad);
    } else if (tipoAnimal === 'gato') {
        mascota = new Gato(nombreAnimal, tipoAnimal, enfermedad);
    } else if (tipoAnimal === 'conejo') {
        mascota = new Conejo(nombreAnimal, tipoAnimal, enfermedad);
    }

    // Mostrar los datos agregados
    const lista = document.querySelector('#resultado ul');
    const elemento = document.createElement('li');
    elemento.innerHTML = `<strong>${mascota.datosPropietario(nombrePropietario, direccionPropietario, telefonoPropietario)}</strong><br> ${mascota.tipo}, mientras que el nombre de la mascota es: <strong>${mascota.nombre}</strong> y la enfermedad es: <strong>${mascota.enfermedad}</strong>`;
    lista.appendChild(elemento);

    // Limpiar el formulario después de agregar
    document.querySelector('form').reset();
});
