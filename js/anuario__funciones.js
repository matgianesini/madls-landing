// Codigo js para página Anuario de la Corrupción

// @codekit-prepend "libs/imagesloaded.pkgd.min.js", "config-min.js", "libs/picturefill.js", "libs/lazysizes.min.js", "libs/hammer.min.js"

// https://imagesloaded.desandro.com/
// http://github.hubspot.com/pace/

document.createElement( "picture" );

//
// Variables
//
//

var actos = {};
actos.anio = {};
actos.anio.visible = 0;

var bienvenida = {};

var interactivo = {};
interactivo.arranca = false;

var keyframe = {};
keyframe.count = 0;
keyframe.lento = 50;
keyframe.rapido = 8;
keyframe.turbo = 5;
keyframe.total = contenidoInteractivo.total_cuadros;
keyframe.total = parseInt(keyframe.total);
keyframe.inicio_actos = contenidoInteractivo.inicio_actos;
keyframe.inicio_actos = parseInt(keyframe.inicio_actos);
keyframe.fin_actos = contenidoInteractivo.fin_actos;
keyframe.fin_actos = parseInt(keyframe.fin_actos);

var imgs = {};
imgs.imagen = {};

var mapa = {};

var menu = {};

var modal = {};

var tOut = false;

var imgLoad;

//
// Helpers
//
//

function $sel( sel ) {
	return document.querySelector( sel );
}

function has_Class(el, cls) {
	return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function $selall( sel ) {
	return document.querySelectorAll( sel );
}

function findAncestor (el, cls) {
	while ( ( el = el.parentElement ) && !el.classList.contains( cls ) );
	return el;
}

function fpow( x ) {
	// y=2^x
	return ( Math.pow(2.5, x)  - 1 ).toFixed(3) ;
}

/*
function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function insertBefore(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
*/

//
// Funciones generales
//
//


function actos_avance() {
	// Para cada imagen, detectar si el keyframe.count está entre el rango de start y end de cada imagen
	// imgs.imagen[i].start
	// imgs.imagen[i].end

	Array.prototype.forEach.call( actos.anio[ actos.anio.visible ].actos , function( acto ){
		if (
			keyframe.count >= acto.start &&
			keyframe.count <= acto.end ) {
			if ( !has_Class(acto, "visible") ) {
				acto.classList.add("visible");

			}
			var aumento = 0.021 * ( keyframe.count - acto.start ) + 0.6;

			// console.log(aumento);

			acto.style.transform = "translate( " + acto.random_eje + acto.random + "vw, " + acto.random + "vh ) scale( " + aumento + " )";
			acto.style.webkitTransform = "translate( " + acto.random_eje + acto.random + "vw, " + acto.random + "vh ) scale( " + aumento + " )";
		} else {
			if ( has_Class(acto, "visible") ) {
				acto.classList.remove("visible");
			}
		}
	});

	// Agregar hash de la ubicación
	window.location.hash = keyframe.count;
}

function imagenes_avance() {
	// Para cada imagen, detectar si el keyframe.count está entre el rango de start y end de cada imagen
	// imgs.imagen[i].start
	// imgs.imagen[i].end
	Array.prototype.forEach.call( imgs.imagenes , function( img ){ // img, i
		if (

			// La imagen es visible
			keyframe.count >= img.start &&
			keyframe.count <= img.end ) {
			if ( !has_Class(img, "visible") ) {
				img.classList.add("visible");

			}

			// console.log( 'coeficiente: ' + img.coeficiente );
			// var aumento = img.coeficiente * ( keyframe.count - img.start ) + img.start_size;
			// ¿Con ease?
			var x = ( ( img.coeficiente * ( keyframe.count - img.start ) + img.start_size ) * ( 1 + ( ( keyframe.count - img.start ) * 0.001 ) ) ).toFixed(3);
			var aumento = fpow( x );

			// if ( i == 9) {
			// 	console.log('x: ' + x);
			// 	console.log('aumento: ' + aumento);
			// }

			// var x_2 = ( ( img.coeficiente * ( keyframe.count - img.start ) + img.start_size ) ).toFixed(3);
			// var y_2 = ( Math.pow(2, x_2) - 1 ).toFixed(3);
			// var aumento_2 = 1 + parseFloat( ( y * y * y / 7.5 ).toFixed(3) );

			// var aumento = ( Math.pow(2, x) - 1 ).toFixed(3);

			// var aumento = ( Math.pow(2, img.coeficiente) - 1 ) * ( keyframe.count - img.start ) + img.start_size;

			var opacidad;

			if ( img.start_opa !== img.end_opa ) {
				opacidad = img.start_opa - (img.coeficiente * ( keyframe.count - img.start ) + img.end_opa);
			}
			// console.log(aumento);
			if ( img.especiales === "horizontal--100") {
				img.style.transform = "translate( -50%, -50% ) scale( 1, " + aumento + " )";
				img.style.webkitTransform = "translate( -50%, -50% ) scale( 1, " + aumento + " )";
				if ( img.start_opa !== img.end_opa ) {
					img.style.opacity = opacidad;
				}
			} else {
				img.style.transform = "translate( -50%, -50% ) scale( " + aumento + " )";
				img.style.webkitTransform = "translate( -50%, -50% ) scale( " + aumento + " )";
				if ( img.start_opa !== img.end_opa ) {
					img.style.opacity = opacidad;
				}
			}
		} else {
			if ( has_Class(img, "visible") ) {
				img.classList.remove("visible");
			}
		}
	});

	// Agregar hash de la ubicación
	window.location.hash = keyframe.count;
}

function actos_func() {
	// console.log(keyframe.total);
	// console.log(actos.total);
	// console.log(keyframe.inicio_actos);

	keyframe.actos = keyframe.total - ( keyframe.inicio_actos + keyframe.fin_actos );

	for (var i = 0, j = contenidoInteractivo.actos.length; i < j; i++) {

		actos.anio[i] = {};
		actos.anio[i].anio = contenidoInteractivo.actos[i].anio;
		// console.log( actos.anio[i].anio );

		actos.anio[i].div = $sel(".js--actos__anio[data-anio='" + actos.anio[i].anio + "']");
		// console.log( actos.anio[i].div );
		
		actos.anio[i].acto = {};
		actos.anio[i].total = contenidoInteractivo.actos[i].eventos.length;

		actos.anio[i].actos = actos.anio[i].div.querySelectorAll(".js--acto");
		// console.log( actos.anio[i].actos );

		actos.anio[i].rango = keyframe.actos / actos.anio[i].total;
		// actos.anio[i].rango_int = parseInt(actos.anio[i].rango);
		actos.anio[i].rango_porcentaje = actos.anio[i].rango * 0.5;
		actos.anio[i].rango_porcentaje = parseInt(actos.anio[i].rango_porcentaje);
		actos.anio[i].rango_porcentaje = ( actos.anio[i].rango_porcentaje > 10 ) ? 10 : actos.anio[i].rango_porcentaje;


		// console.log(actos.rango);
		// console.log(actos.rango_porcentaje);

		Array.prototype.forEach.call( actos.anio[i].actos , function( acto, k ){
			actos.anio[i].acto[k] = acto;

			// Su rango es actos.rango * i

			// A partir del la división de número de fotogramas entre número de actos, sale cada cuándo deben aparece y el porcentaje es para el punto de inicio y el de fin de la aparición

			acto.random = Math.floor((Math.random() * 25) + 1);

			if ( acto.random % 2 === 0 ) {
				acto.random_eje = "+";
			} else {
				acto.random_eje = "-";
			}

			acto.start = keyframe.inicio_actos + ( parseInt(actos.anio[i].rango * k) ) - actos.anio[i].rango_porcentaje;
			acto.setAttribute("data-start", acto.start);
			acto.end = keyframe.inicio_actos + ( parseInt(actos.anio[i].rango * k) ) + actos.anio[i].rango_porcentaje;
			acto.setAttribute("data-end", acto.end);
		});
	}
}

function mapa_avance() {
	mapa.marcador[actos.anio.visible].style.left = keyframe.count * 100 / keyframe.total + '%';

	// Mostrar cuando debe ser visible
	if ( keyframe.count > 10 ) {
		if ( has_Class( mapa.mapas[actos.anio.visible], '_oculto' ) ) {
			mapa.mapas[actos.anio.visible].classList.remove("_oculto");
		}
	} else {
		if ( !has_Class( mapa.mapas[actos.anio.visible], '_oculto' ) ) {
			mapa.mapas[actos.anio.visible].classList.add("_oculto");
		}
	}
}

function avance() {
	// Todos los avances
	imagenes_avance();
	actos_avance();
	mapa_avance();

	bienvenida.ventana = $sel(".js--bienvenida");

	if ( keyframe.count > 3 ) {
		if ( !has_Class( bienvenida.ventana, '_oculto' ) ) {
			bienvenida.ventana.classList.add("_oculto");
		}
	} else {
		if ( has_Class( bienvenida.ventana, '_oculto' ) ) {
			bienvenida.ventana.classList.remove("_oculto");
		}
	}
}


// Detectar todas las imágenes y sus atributos / Valores
// Cada imagen es un objeto dentro del arreglo imgs.imagen
//
// Propiedades de imgs.imagen:
// start 
// end 
// start_size 
// end_size 
// start_opa
// end_opa 
// duracion 
// ampliacion 
// coeficiente
//

// interactivo.body = document.body,

// interactivo.html = document.documentElement;
// Ajustar el tamaño de las imágenes de acuerdo al screen

function imagenes_tamano() {

	interactivo.width = screen.width;
	interactivo.height = screen.height;

	interactivo.radio = ( interactivo.width > interactivo.height) ? interactivo.width : interactivo.height;

	Array.prototype.forEach.call( imgs.imagenes , function( img ){
		img.style.width = interactivo.radio + 'px';
		img.style.height = interactivo.radio + 'px';
	});
	// console.log("Ajuste de tamaños");
}

function imagenes_func() {
	imgs.imagenes = $selall(".js--imagen");
	
	interactivo.div = $sel(".js--interactivo");

	Array.prototype.forEach.call( imgs.imagenes , function( img, i ){
		imgs.imagen[i] = img;


		// 
		img.start = img.getAttribute("data-start");
		img.start = parseInt(img.start);
		img.end = img.getAttribute("data-end");
		img.end = parseInt(img.end);

		img.start_size = img.getAttribute("data-start_size");
		img.start_size = parseFloat(img.start_size);
		img.end_size = img.getAttribute("data-end_size");
		img.end_size = parseFloat(img.end_size);

		img.start_opa = img.getAttribute("data-start_opa");
		img.start_opa = parseFloat(img.start_opa);
		img.end_opa = img.getAttribute("data-end_opa");
		img.end_opa = parseFloat(img.end_opa);
		img.especiales = img.getAttribute("data-especiales");

		// img.duracion = function() {
		// 	return this.end - this.start;
		// }
		img.duracion = img.end - img.start;
		img.ampliacion = img.end_size - img.start_size;
		img.coeficiente = img.ampliacion / img.duracion;
		img.coeficiente = img.coeficiente.toFixed(3);

		// console.log( 'duracion: ' + img.duracion );
		// console.log( 'ampliacion: ' + img.ampliacion );
		// console.log( 'coeficiente: ' + img.coeficiente );

	});
	// 
	imagenes_tamano();
}


// Mover todo a un punto
/*
function mover_to( k ) {
	// k es al keyframe que se va a mover todo
	keyframe.diferencia = k - keyframe.count;
	// console.log(keyframe.diferencia);

	if ( k < keyframe.total) {
		if ( keyframe.diferencia > 0 ) {
			// restar hasta que de 0 para avanzar
			// console.log('avanzar');

			// Dependiendo de la diferencia, rápido o lento
			// ** ¿agregar turbo???
			if ( keyframe.diferencia > 100 ) {
				keyframe.acelaracion = keyframe.rapido;
			} else {
				keyframe.acelaracion = keyframe.lento;
			}



			keyframe.avanzar = setInterval( avanzar_func , keyframe.acelaracion);

		} else if ( keyframe.diferencia < 0 ) {
			// sumar hasta que de 0 para retroceder
			// console.log('retroceder');

			// Dependiendo de la diferencia, rápido o lento
			// ** ¿agregar turbo???
			if ( ( keyframe.diferencia * -1 ) > 100 ) {
				keyframe.acelaracion = keyframe.rapido;
			} else {
				keyframe.acelaracion = keyframe.lento;
			}



			keyframe.retroceder = setInterval( retroceder_func , keyframe.acelaracion);
		}
	} else {
		console.log("Quieres ir muy lejos chavo");
	}
}
*/

/*
function mover_hash() {
	keyframe.hash = window.location.hash.replace('#','');

	if ( keyframe.hash ) {

		mover_to( keyframe.hash );
	}
}
*/

// Mapa

function mapa_func() {
	mapa.mapas = $selall(".js--mapa");

	mapa.ancho = mapa.mapas[actos.anio.visible].offsetWidth;
	mapa.contenedores = $selall(".js--mapa__contenedor");
	mapa.actos = {};

	Array.prototype.forEach.call( mapa.contenedores, function( map, i ){
		map.style.width = keyframe.actos * 100 / keyframe.total + '%';

		mapa.actos[i] = map.querySelectorAll(".js--mapa__acto");

		Array.prototype.forEach.call( mapa.actos[i], function( dot, k ){

			dot.setAttribute("data-ir", actos.anio[i].acto[k].end - 1);

			dot.addEventListener("click", function () {

				// Actvar para animación seguida
				// mover_to( dot.getAttribute("data-ir") );

				// Opción de movimiento instantáneo
				keyframe.count = dot.getAttribute("data-ir");
				avance();
			});
		});
	});
	mapa.marcador = $selall(".js--mapa__marcador");


	/*
	// Función de mapa arrastrable
	$( ".js--mapa__marcador" ).draggable({
		axis: "x",
		containment: ".js--mapa",
		scroll: false,
		stop: function( event, ui ) {
			// Movemos el interactivo después del drag
			mapa.marcador_left = ui.position.left.toFixed(2);
			mapa.marcador_pos = mapa.marcador_left * keyframe.total / mapa.ancho;
			mapa.marcador_pos = parseInt(mapa.marcador_pos);
			mover_to( mapa.marcador_pos );
		}
	});
	*/

	mapa.anios = {};
	// Identificar de actos.todos los que tengan un año diferente y a esos ponerles el año como un after
	// var color = window.getComputedStyle(
	// 	document.querySelector('.element'), ':before'
	// ).getPropertyValue('color')
}
/*
function avanzar_func() {
	if ( keyframe.diferencia > 0 ) {

		keyframe.diferencia--;
		keyframe.count++;
		avance();
	} else {
		// console.log("Llegaste");
		clearInterval(keyframe.avanzar);
	}
}

function retroceder_func() {
	if ( keyframe.diferencia < 0 ) {

		keyframe.diferencia++;
		keyframe.count--;
		avance();
	} else {
		// console.log("Llegaste");
		clearInterval(keyframe.retroceder);
	}
}
*/

// Movimiento en el interactivo al hacer mouseWheel
function keyframe_func( move ) {

	if ( move < 0) {
		// -1 avanza
		// Avanzar si sube el mouseWheel
		if ( keyframe.count < keyframe.total) {
			// keyframe.count++;
			keyframe.count = parseInt(keyframe.count) + 5;
		} else {
			// console.log("llegaste al final");
		}
	} else {
		// +1 retrocede
		// Retroceder si baja el mouseWheel && keyframe.count es mayor a 0
		if ( keyframe.count > 0 ) {
			// keyframe.count--;
			keyframe.count = parseInt(keyframe.count) - 5;
		}
	}

	avance();
}

// Resize resize
window.onresize = function() { // event
	if(tOut !== false)
		clearTimeout(tOut);
	tOut = setTimeout(imagenes_tamano, 500);
};


// Detectar movimiento del Mouse wheel
function scroll_func(){

	function wheel_move( e ) {
		e = window.event || e;
		keyframe.move = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

		keyframe_func( keyframe.move );
	}

	keyframe.canvas = $sel(".js--body");
	keyframe.canvas.addEventListener("mousewheel", wheel_move, false);
	keyframe.canvas.addEventListener("DOMMouseScroll", wheel_move, false);
}

// Detectar movimiento del Presionar teclas
function key_func() {
	document.addEventListener("keydown", function ( e ) {
		keyframe.key = e.keyCode || e.which;		
		if ( keyframe.key === 38 ) {
			// Up
			keyframe.move = -1;
		} else if ( keyframe.key === 40 ) {
			keyframe.move = 1;
		}

		keyframe_func( keyframe.move );
	});
}

// Detectar movimiento de swipe
function swipe_func() {
	var myElement = document;
	var mc = new Hammer(myElement);

	//enable all directions
	mc.get('swipe').set({
		direction: Hammer.DIRECTION_ALL,
		threshold: 1, 
		velocity:0.1
	});
	mc.on("swipeup", function(ev) {
		// Swipe up retodece
		keyframe.move = (ev.distance / 20).toFixed(0);

		if ( keyframe.count > keyframe.move ) {
			keyframe.count = keyframe.count - keyframe.move;
		}

		avance();
	});
	mc.on("swipedown", function(ev) {
		// Swipe down avanza
		keyframe.move = (ev.distance / 20).toFixed(0);
		keyframe.move = parseInt(keyframe.move);

		if ( ( keyframe.count + keyframe.move ) < keyframe.total ) {
			keyframe.count = keyframe.count + keyframe.move;
		}

		avance();
	});
}

// Menu
function menu_func() {
	menu.btns = $selall(".js--menu__btn");
	menu.inicio = $sel(".js--menu__inicio");
	modal.menu = $sel(".js--modalwindow[data-modal='menu']");

	Array.prototype.forEach.call( menu.btns , function( btn ){
		btn.addEventListener("click", function () {

			actos.anio.visible = btn.getAttribute("data-anio");
			keyframe.count = 5;
			avance();

			Array.prototype.forEach.call( mapa.mapas , function( map ){
				map.classList.add('_oculto');
			});
			for (var i = 0, j = contenidoInteractivo.actos.length; i < j; i++) {
				if ( i === actos.anio.visible ) {
					actos.anio[i].div.classList.remove("_oculto");
				} else {
					actos.anio[i].div.classList.add("_oculto");
				}
			}

			modal.menu.classList.remove("visible");
		});
	});

	if ( menu.inicio ) {
		menu.inicio.addEventListener("click", function () {
			keyframe.count = 0;
			avance();
			modal.menu.classList.remove("visible");
		});
	}
}

/*
function modales__iframe(argument) {
}
*/

// modales
function modales() {
	modal.btns = $selall(".js--modal--btn");
	modal.cerrar = $selall(".js--btn--cerrar");

	Array.prototype.forEach.call(modal.btns, function(btn){
		btn.addEventListener("click", function() {
			modal.data = this.getAttribute("data-modal");
			modal.window = $sel(".js--modalwindow[data-modal='" + modal.data + "']");
			modal.window.classList.toggle("visible");

			modal.iframe = modal.window.querySelector(".js--modalwindow--iframe");
			modal.iframe.classList.add("modal__iframe--con-loader");

			if ( modal.iframe && modal.iframe.innerHTML === '' ) {
				modal.url = modal.iframe.getAttribute("data-iframe");
				console.log(modal.url);
				modal.iframe.innerHTML = "<iframe src='" + modal.url +"' width='100%' height='100%' class='" + modal.data + "'></iframe>";
				// modales__iframe();
				setTimeout(function () {
					modal.iframe.classList.remove("modal__iframe--con-loader");
				}, 5000);
			}
		});
	});

	Array.prototype.forEach.call(modal.cerrar, function(btn){
		btn.addEventListener("click", function() {
			modal.parent = findAncestor(btn, 'js--modalwindow');
			modal.parent.classList.toggle("visible");
		});
	});
}


function arrancar() {
	console.log('Arrancando');
			
	modal.loader.classList.remove("visible");

	// Movimiento
	scroll_func();
	key_func();
	swipe_func();

	// Movimiento al arrancar
	// mover_hash();
	keyframe_func( 1 );
	// para Probar
	// keyframe.count = 1155;
	avance();
	// para Probar


	// Otros elementos
	modales();
	menu_func();
}

function onAlways( ) { //instance
	// console.log('all images are loaded');
	setTimeout(function () {
		if ( !interactivo.arranca ) {
			console.log('Posiblemente no se encontraron todas las imágenes.');
			modal.spine.classList.add("invisible");
			modal.loader_leyenda.innerHTML = '<p>Posiblemente no se encontraron todas las imágenes,<br> ¡Pero empecemos!</p>';
			interactivo.arranca = true;
			imgLoad.off( 'always', onAlways );

			// Agregar alerta
			setTimeout(function () {
				arrancar();
			}, 1000);
		}
	}, 8000);
}

document.addEventListener('DOMContentLoaded', function(){
	// Acomodo de elementos
	imagenes_func();
	actos_func();
	mapa_func();

	// Loader
	imgLoad = imagesLoaded( $sel('#corrupcionario') );
	modal.loader = $sel(".js--loader");
	modal.loader_leyenda = $sel(".js--loader__leyenda");
	modal.spine = $sel(".js--spinner");

	imgLoad.on( 'always', onAlways );

	imgLoad.on( 'done', function( ) { // instance
		console.log('Imágenes cargadas');
		modal.spine.classList.add("invisible");
		modal.loader_leyenda.innerHTML = '<p>Corrupción lista</p>';
		interactivo.arranca = true;

		setTimeout(function () {
			arrancar();
		}, 1000);
	});

});
