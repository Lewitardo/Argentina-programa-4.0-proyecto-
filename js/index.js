const grid = new Muuri('.trabajos', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
	document.getElementById('trabajos').classList.add('imagenes-cargadas');
    });

    	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.trabajos .thumb img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
            overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
