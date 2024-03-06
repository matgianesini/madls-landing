// Codigo js para página Más allá de la Sombra


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
keyframe.total = 2080;
keyframe.total = parseInt(keyframe.total);

var imgs = {};
imgs.imagen = {};
var imagenes = [];

var gifs = {};

var menu = {};

var modal = {};

var tOut = false;

var imgLoad;


var escenas = {};
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



function imagenes_func() {

	escenas.escena = document.querySelector(".js--escena");

	escenas.width = parseFloat(escenas.escena.offsetWidth).toFixed(0);
	// console.log(escenas.width);
	escenas.height = parseFloat(escenas.escena.offsetHeight).toFixed(0);
	// console.log(escenas.height);


	imgs.imagenes = $selall(".js--imagen");
	
	function func__imgs(img, zindex, x, y, z) {
		this.div = img;
		this.zindex = zindex;
		// this.zoom = zoom;
		this.left = x;
		this.left = parseFloat(this.left);

		this.top = y;
		this.top = parseFloat(this.top);

		this.depth = z;
		this.depth = parseFloat(this.depth);

		// this.end_x = end_x;
		// this.end_y = end_y;
		// this.width = width;
		// this.width = parseFloat(this.width);
		// this.height = height;
		// this.height = parseFloat(this.height);

		

		this.posicion = function() {
			// this.this_width = ( this.width * escenas.width / 3840 ).toFixed(2);
			// this.this_height = ( this.height * escenas.height / 2160 ).toFixed(2);
			// this.div_left = ( this.left * escenas.width / 3840 ).toFixed(2);
			// this.div_top = ( this.top * escenas.height / 2160 ).toFixed(2);

			// this.div.style.width = this.this_width + 'px';
			// this.div.style.height = this.this_height + 'px';
			// this.div.style.zIndex = this.zindex;
			// this.div.style.left = this.div_left + 'px';
			// this.div.style.top = this.div_top + 'px';
		};

		this.avance = function() {

			// let scale = ( keyframe.count < 1 ) ? 1 : ( this.zoom * ( ( keyframe.count / 100 ) + 1 ) ).toFixed(2) ;

			// let move_left = this.end_x * keyframe.count;
			// let move_top = this.end_y * keyframe.count;

			// // console.log(move_left, move_top);

			// let move_x = ( parseFloat(this.div_left) + parseFloat(move_left) ).toFixed(1);
			// let move_y = ( parseFloat(this.div_top) + parseFloat(move_top) ).toFixed(1);

			// // console.log(this.div_left, this.div_top);
			// console.log(move_x, move_y);

			// this.div.style.transform = "translate( -50%, -50% ) scale(" + scale +")";
			// this.div.style.left = move_x + 'px';
			// this.div.style.top = move_y + 'px';
		};
		// Limitar el scroll por escena
	}


	Array.prototype.forEach.call( imagenes , function( img, i ){
		imgs.imagen[i] = img;

		// 
		img.zindex = img.getAttribute("data-zindex");
		// img.zoom = img.getAttribute("data-zoom");
		img.x = img.getAttribute("data-x");
		img.y = img.getAttribute("data-y");
		img.z = img.getAttribute("data-z");
		// img.end_x = img.getAttribute("data-end_x");
		// img.end_y = img.getAttribute("data-end_y");
		// img.width = img.getAttribute("data-width");
		// img.height = img.getAttribute("data-height");

		imagenes[i] = new func__imgs(imgs.imagen[i], img.zindex, img.x, img.y, img.z);

		imagenes[i].posicion();

		// console.log( img );

	});
	//

	gifs.imagenes = $selall(".js--gif");

	Array.prototype.forEach.call( gifs.imagenes , function( gif, i ){
		gif.addEventListener("mouseenter", function () {
			let animado = this.getAttribute("data-hover");
			gif.setAttribute("src", animado);
		});
		gif.addEventListener("mouseleave", function () {
			let fijo = this.getAttribute("data-fijo");
			gif.setAttribute("src", fijo);
		});
	});
}



function avance() {
	// Todos los avances
	// imagenes_avance();

	console.log(keyframe.count);

	Array.prototype.forEach.call( imgs.imagenes , function( img, i ){
		imagenes[i].avance();
	});

	/*
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
	*/
}

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
/*
*/
window.onresize = function() { // event
	if(tOut !== false)
		clearTimeout(tOut);
	tOut = setTimeout(imagenes_func, 500);
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
	// modales();
	// menu_func();
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

	// Loader
	imgLoad = imagesLoaded( $sel('#masalladelasombra') );
	modal.loader = $sel(".js--loader");
	modal.loader_leyenda = $sel(".js--loader__leyenda");
	modal.spine = $sel(".js--spinner");

	imgLoad.on( 'always', onAlways );

	imgLoad.on( 'done', function( ) { // instance
		console.log('Imágenes cargadas');
		modal.spine.classList.add("invisible");
		modal.loader_leyenda.innerHTML = '<p>Listo</p>';
		interactivo.arranca = true;

		setTimeout(function () {
			arrancar();
		}, 1000);
	});

});


