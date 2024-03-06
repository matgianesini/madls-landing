// Codigo js para página Más allá de la Sombra


// https://imagesloaded.desandro.com/
// http://github.hubspot.com/pace/

document.createElement( "picture" );


//
// Variables
//
//

let bienvenida = {};

let interactivo = {};
interactivo.arranca = false;

let keyframe = {};
keyframe.forward_count = 0;
keyframe.rotate_count = 0;

keyframe.forward = 0;
keyframe.rotate = 0;

keyframe.lento = 50;
keyframe.rapido = 8;
keyframe.turbo = 5;
keyframe.total = 2000;
keyframe.total = parseInt(keyframe.total);
keyframe.total_rotation = 0;
keyframe.total_rotation = parseInt(keyframe.total_rotation);

let imgs = {};
imgs.imagen = {};
let imagenes = [];

let gifs = {};

let menu = {};

let modal = {};
	modal.scroll = true;

let tOut = false;

let imgLoad;

let escenas = {};

let audio = {};
audio.playing = true;

let btns = {};

let intro = {};
let pages = {};

let sounds = {};
	sounds.ep_prologo = {};
	sounds.ep_one = {};
	sounds.ep_two = {};
	sounds.ep_three = {};
	sounds.ep_four = {};
	sounds.ep_five = {};
	sounds.ep_six = {};

let temazcal = {};

let cover = {};

let seg = 0;
let interval;

let trailer = {};

let interface;

//
// Helpers
//
//

function $sel( sel ) {
	return document.querySelector( sel );
}

function hasClass(el, cls) {
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

function func__cercania(sonido, numero, minimo, maximo, referencia) {
	let volumen;
	if (numero === referencia) {
		volumen = 1;

		if ( !sonido.playing() ) {
			sonido.play();
		}
	} else if (numero <= minimo || numero >= maximo) {

		if ( sonido.playing() ) {
			sonido.pause();
		}
		volumen = 0;
	} else {
		let diferencia = Math.abs(numero - referencia);
		let cercania = 1 - (diferencia / (maximo - minimo));
		volumen = parseFloat(cercania.toFixed(2));

		if ( !sonido.playing() ) {
			sonido.play();
		}

		// console.log(sonido, numero, minimo, maximo, referencia, volumen);
	}

	sonido.volume(volumen);
}


function imagenes_func() {
	let modal = {};

	// escenas.escenas = document.querySelectorAll(".js--escena");

	gifs.imagenes = $selall(".js--gif");
	gifs.btns = $selall(".js--btn");
	gifs.close = $selall(".js--modal__close");

	Array.prototype.forEach.call( gifs.imagenes , function( gif, i ){
		gif.addEventListener("mouseenter", () => {
			let animado = gif.getAttribute("data-hover");
			let sound = gif.getAttribute("data-sound");
			gif.setAttribute("src", animado);

			if ( audio.playing ) {
				if ( escenas.actual == "ep_one" ) {	
					if ( sound == "ep_one_grieta" ) {
						( !sounds.ep_one.grieta.playing() ) ? sounds.ep_one.grieta.play() : '';
					} else if ( sound == "ep_one_fuego" ) {
						( !sounds.ep_one.fuego.playing() ) ? sounds.ep_one.fuego.play() : '';
					} else if ( sound == "ep_one_muneca" ) {
						( !sounds.ep_one.muneca.playing() ) ? sounds.ep_one.muneca.play() : '';
					} else if ( sound == "ep_one_copa" ) {
						( !sounds.ep_one.copa.playing() ) ? sounds.ep_one.copa.play() : '';
					}
				} else if ( escenas.actual == "ep_two" ) {
					if ( sound == "ep_two_celular" ) {
						( !sounds.ep_two.celular.playing() ) ? sounds.ep_two.celular.play() : '';
					} else if ( sound == "ep_two_cortina" ) {
						( !sounds.ep_two.cortina.playing() ) ? sounds.ep_two.cortina.play() : '';
					} else if ( sound == "ep_two_cristo" ) {
						( !sounds.ep_two.cristo.playing() ) ? sounds.ep_two.cristo.play() : '';
					} else if ( sound == "ep_two_cuna" ) {
						( !sounds.ep_two.cuna.playing() ) ? sounds.ep_two.cuna.play() : '';
					} else if ( sound == "ep_two_espejo" ) {
						( !sounds.ep_two.espejo.playing() ) ? sounds.ep_two.espejo.play() : '';
					} else if ( sound == "ep_two_plancha" ) {
						( !sounds.ep_two.plancha.playing() ) ? sounds.ep_two.plancha.play() : '';
					}
				} else if ( escenas.actual == "ep_three" ) {
					if ( sound == "ep_three_pan" ) {
						( !sounds.ep_three.pan.playing() ) ? sounds.ep_three.pan.play() : '';
					} else if ( sound == "ep_three_billetes" ) {
						( !sounds.ep_three.billetes.playing() ) ? sounds.ep_three.billetes.play() : '';
					}
					 else if ( sound == "ep_three_redes_sociales" ) {
						( !sounds.ep_three.redes_sociales.playing() ) ? sounds.ep_three.redes_sociales.play() : '';
					}
					 else if ( sound == "ep_three_mazo" ) {
						( !sounds.ep_three.mazo.playing() ) ? sounds.ep_three.mazo.play() : '';
					}
				} else if ( escenas.actual == "ep_four" ) {
					if ( sound == "ep_four_flores" ) {
						( !sounds.ep_four.flores.playing() ) ? sounds.ep_four.flores.play() : '';
					} else if ( sound == "ep_four_globo" ) {
						( !sounds.ep_four.globo.playing() ) ? sounds.ep_four.globo.play() : '';
					} else if ( sound == "ep_four_papel" ) {
						( !sounds.ep_four.papel.playing() ) ? sounds.ep_four.papel.play() : '';
					} else if ( sound == "ep_four_quetzal" ) {
						( !sounds.ep_four.quetzal.playing() ) ? sounds.ep_four.quetzal.play() : '';
					}
				} else if ( escenas.actual == "ep_five" ) {
					if ( sound == "ep_five_constelacion" ) {
						( !sounds.ep_five.constelacion.playing() ) ? sounds.ep_five.constelacion.play() : '';
					} else if ( sound == "ep_five_fogata" ) {
						( !sounds.ep_five.fogata.playing() ) ? sounds.ep_five.fogata.play() : '';
					} else if ( sound == "ep_five_maguey" ) {
						( !sounds.ep_five.maguey.playing() ) ? sounds.ep_five.maguey.play() : '';
					} else if ( sound == "ep_five_maiz" ) {
						( !sounds.ep_five.maiz.playing() ) ? sounds.ep_five.maiz.play() : '';
					} else if ( sound == "ep_five_rana" ) {
						( !sounds.ep_five.rana.playing() ) ? sounds.ep_five.rana.play() : '';
					} else if ( sound == "ep_five_vela" ) {
						( !sounds.ep_five.vela.playing() ) ? sounds.ep_five.vela.play() : '';
					}
				} else if ( escenas.actual == "ep_six" ) {
					if ( sound == "ep_six_arbusto" ) {
						( !sounds.ep_six.arbusto.playing() ) ? sounds.ep_six.arbusto.play() : '';
					} else if ( sound == "ep_six_ave_de_papel" ) {
						( !sounds.ep_six.ave_de_papel.playing() ) ? sounds.ep_six.ave_de_papel.play() : '';
					} else if ( sound == "ep_six_balcon" ) {
						( !sounds.ep_six.balcon.playing() ) ? sounds.ep_six.balcon.play() : '';
					} else if ( sound == "ep_six_rama" ) {
						( !sounds.ep_six.rama.playing() ) ? sounds.ep_six.rama.play() : '';
					}
				}
			}

		});
		gif.addEventListener("mouseleave", () => {
			let fijo = gif.getAttribute("data-fijo");
			gif.setAttribute("src", fijo);
		});
	});

	Array.prototype.forEach.call( gifs.btns , function( btn ){
		btn.addEventListener("mouseenter", () => {
			modal.tooltip = btn.getAttribute("data-tooltip");

			modal.intro = document.querySelector(".js--tooltip__modal[data-tooltip='" + modal.tooltip + "']");
			if ( modal.intro ) {
				modal.intro.classList.add("visible");
			}
		});
		btn.addEventListener("mouseleave", () => {
			if ( modal.intro ) {
				modal.intro.classList.remove("visible");
			}
		});
		btn.addEventListener("click", () => {
			modal.modal = btn.getAttribute("data-modal");
			gifs.modal = document.querySelector(".js--modal[data-modal='" + modal.modal + "']");

			if (gifs.modal) {
				gifs.modal.classList.add("visible");

				// Cambiar valor de scroll
				// En el modal no cambia ¿?
				modal.scroll = false;

				if ( audio.playing ) {
					audio.actual.pause().volume(0);
					sounds.ep_one.ambient_hervor.pause().mute();
					sounds.ep_one.ambient_viento.pause().mute();
				}
			}


		});
	});
	Array.prototype.forEach.call( gifs.close , function( btn ){
		btn.addEventListener("click", () => {
			gifs.modal.classList.remove("visible");

			// Cambiar valor de scroll
			modal.scroll = true;

			if ( audio.playing ) {
				audio.actual.play();
				audio.actual.volume(0.5);
				if ( escenas.actual == "ep_one" ) {
					sounds.ep_one.ambient_hervor.play();
					sounds.ep_one.ambient_viento.play();
				}
			}
			/*
			*/
			modal.iframe = gifs.modal.querySelector('iframe');

			if ( modal.iframe ) {
				if ( modal.iframe.getAttribute("data-type") === "youtube" ) {
					console.log("Video de Youtube");

					modal.src = modal.iframe.src;

					if ( modal.src.search("&autoplay=") != -1) {
						// contains
						var nueva_src = modal.src.replace('&autoplay=1', '');

						modal.src = nueva_src;

					} else {
						// does not contain
					}

					modal.iframe.src = modal.src;

				} else {
					// console.log("Video de Vimeo")
					modal.player = new Vimeo.Player(modal.iframe);

					modal.player.pause().then(function() {
					}).catch(function(error) {
						console.log(error.name);
					});
				}
			}
			
		});
	});

	temazcal.imagenes = $selall(".js--temazcal");
	temazcal.entrance = $sel(".js--temazcal-entrada");
	cover.ep_five__cover = $sel(".js--esc-5--cover");

	cover.ep_six__cover = $sel(".js--esc-6--cover");

}

function func__reset_position () {

	// escenas.actual = "";
	setTimeout( () => {
		escenas.escena.style.transform = "translateZ(0px) rotateY(0deg)";

		keyframe.forward_count = 0;
		keyframe.rotate_count = 0;

		keyframe.forward = 0;
		keyframe.rotate = 0;
	}, 200);
}
//
// Prologo
//
function func__forward__prologo( move ) {
	// document.querySelector(".js--trailer__video").classList.add("oculto");
	// document.querySelector(".js--trailer--btn_video").classList.add("oculto");
	func__skip_prologo();
	console.log("prologo, " + move + ', ' + seg);
	// console.log(pages.page);
	// console.log(escenas.actual);

	clearInterval(interval);

	if ( move < 150 ) {
		escenas.prologo.setAttribute("prologo-slide", '1');
		seg = 1;
		interval = setInterval(func__checkTime__prologo, 50, 1);
	} else if( move >= 150 && move < 300 ) {
		escenas.prologo.setAttribute("prologo-slide", '2');
		seg = 2;
		interval = setInterval(func__checkTime__prologo, 50, 2);
	} else if( move >= 300 && move < 450 ) {
		escenas.prologo.setAttribute("prologo-slide", '3');
		seg = 3;
		interval = setInterval(func__checkTime__prologo, 50, 3);
	} else if( move >= 450 && move < 600 ) {
		escenas.prologo.setAttribute("prologo-slide", '4');
		seg = 3;
		interval = setInterval(func__checkTime__prologo, 50, 3);
	} else if( move >= 600 && move < 750 ) {
		escenas.prologo.setAttribute("prologo-slide", '5');
		seg = 4;
		interval = setInterval(func__checkTime__prologo, 50, 4);
	} else if( move >= 750 && move < 900 ) {
		escenas.prologo.setAttribute("prologo-slide", '6');
		seg = 4;
		interval = setInterval(func__checkTime__prologo, 50, 4);
	} else if( move >= 900 && move < 1050 ) {
		escenas.prologo.setAttribute("prologo-slide", '7');
		seg = 6;
		interval = setInterval(func__checkTime__prologo, 50, 6);
		// seg = 4;
		// seg = 5;
	} else if( move >= 1500 ) {
		func__skip_prologo();
	}

	if ( escenas.prologo_video.currentTime < seg ) {
		escenas.prologo_video.play();
	}

	// console.log("escenas.prologo_video.currentTime, " + escenas.prologo_video.currentTime);	
}

function func__skip_prologo() {
	sounds.ep_prologo.ambient.stop().mute();
	escenas.actual = "ep_one";

	// pages.page.classList.add("oculto");						// This was
	// pages.trailer = document.querySelector(".js--trailer"); // added
	// pages.page = pages.trailer;								// by
	// pages.page.classList.add("visible");					// MRG
	
	clearInterval(interval);


	function primer_settimeout () {
		pages.page.classList.add("oculto");
		// console.log("primer_settimeout");
		seguir = true;

		setTimeout(segundo_settimeout, 1000);
	}
	function segundo_settimeout () {
		if ( seguir ) {
			pages.page.classList.remove("visible");
			pages.page.classList.add("atras");
			// console.log("segundo_settimeout");
			setTimeout(tercer_settimeout, 1150);
		}
	}
	function tercer_settimeout () {
		pages.trailer = document.querySelector(".js--trailer");
		pages.page = pages.trailer;
		pages.page.classList.add("visible");

		// console.log("tercer_settimeout");
	}

	setTimeout(primer_settimeout, 150);
}

function func__elements__ep_prologo() {
	let is_safari = (!!window.ApplePaySetupFeature || !!window.safari) && agentHas("Safari") && !agentHas("Chrome") && !agentHas("CriOS");

	escenas.prologo = document.querySelector(".js--prologo__slide");
	escenas.prologo_video = document.querySelector(".js--prologo__video");

	if ( is_safari ) {
		escenas.prologo.classList.add("safari");
	}

	escenas.prologo_btn_skip = document.querySelector(".js--prologo--btn_skip");

	let seguir = false;

	escenas.prologo_video.addEventListener("ended", (e) => {
		// console.log( "Video stopped either because it has finished playing or no further data is available.");
		// console.log("sin settimeout");

		func__skip_prologo()

	});

	if ( escenas.prologo_btn_skip ) {
		escenas.prologo_btn_skip.addEventListener('click', function(e) {
			e.preventDefault();

			func__skip_prologo();
		});
	}
}

function func__audios__ep_prologo() {
	sounds.ep_prologo.ambient = new Howl({
		src: [
			'assets/audios/esc-prologo--ambiente.mp3'
			],
		autoplay: true,
		preload: true,
		loop: true,
		volume: 0.5,
	});
}

function func__checkTime__prologo(step) {

	if ( Math.floor( escenas.prologo_video.currentTime ) >= step ){

		escenas.prologo_video.pause();
		escenas.prologo_video.currentTime = step;

		clearInterval(interval);
	}
}

function func__trailer() {
	console.log("trailer");

	trailer.btn_video = document.querySelector(".js--trailer--btn_video");
	trailer.btn_titulo = document.querySelector(".js--trailer--btn_titulo");
	trailer.video = document.querySelector(".js--trailer__video");

	// trailer.player.play().then(function() {
	// }).catch(function(error) {
	// 	console.log(error.name);
	// });

	if ( trailer.btn_video ) {
		trailer.btn_video.addEventListener('click', function(e) {
			e.preventDefault();

			// console.log("saltar video");
			trailer.video.classList.add("oculto");
			trailer.btn_video.classList.add("oculto");

			trailer.player = new Vimeo.Player( trailer.video );

			trailer.player.pause().then(function() {
			// the video was paused
			}).catch(function(error) {
				console.log(error.name);
			});

		});
	}

	if ( trailer.btn_titulo ) {
		trailer.btn_titulo.addEventListener('click', function(e) {
			e.preventDefault();
			
			pages.trailer.classList.add("oculto");
			pages.trailer.classList.remove("visible");

			setTimeout( () => {

				interface.classList.remove("interface--prologo");

				pages.page = document.querySelector(".js--escena[data-scena='ep_one']");
				escenas.escena = pages.page;
				pages.page.classList.add("visible");

				interactivo.container.classList.remove("oculto");

				// Reset position
				func__reset_position();
				clearInterval(interval);

				setTimeout( () => {
					escenas.actual = "ep_one";

					setTimeout( () => {
						audio.playing = true;
						sounds.ep_one.ambient.volume(0.5);
						sounds.ep_one.ambient.play();

						audio.actual = sounds.ep_one.ambient;
					}, 150);
				}, 150);

			}, 200);

			/*
			setTimeout(function(){
				// intro.video.classList.add("atras");

				if ( intro.el_video ) {
					intro.player.pause().then(function() {
					// the video was paused
					}).catch(function(error) {
						console.log(error.name);
					});
				}
				if ( intro.el_video_offline ) {
					intro.el_video_offline.pause();
				}
			}, 500);
			*/

		});
	}
}

//
// Episode One
//
function func__forward__ep_one( move ) {
	console.log("ep_one, " + move);

	if ( keyframe.forward <= 1500) {
		if ( audio.playing ) {
			func__cercania(sounds.ep_one.ambient_hervor, move, 400, 1100, 800);
			// func__cercania(sounds.ep_one.ambient_pisadas, move, 700, 1500, 1100);
			// func__cercania(sounds.ep_one.ambient_pulsacion, move, 1000, 1900, 1500);
			func__cercania(sounds.ep_one.ambient_viento, move, 500, 1300, 900);
		}

		escenas.escena.style.transform = "translateZ(" + keyframe.forward + "px) rotateY(" + keyframe.rotate + "deg)";
	} else if ( keyframe.forward > 1500) {
		keyframe.forward = 1500;
	}
}
function func__audios__ep_one() {
	// Controlar sonidos ambiente
	/* */
	sounds.ep_one.ambient = new Howl({
		src: [
			'assets/audios/esc-1--ambiente.mp3'
			],
		// autoplay: true,
		preload: true,
		loop: true,
		volume: 0.5,
	});
	sounds.ep_one.ambient_hervor = new Howl({
		src: ['assets/audios/esc-1--amb-hervor.mp3'],
		preload: true,
		loop: true,
		volume: 0.8,
	});
	sounds.ep_one.ambient_pisadas = new Howl({
		src: ['assets/audios/esc-1--amb-pisadas.mp3'],
		preload: true,
		loop: true,
		volume: 0.8,
	});
	sounds.ep_one.ambient_pulsacion = new Howl({
		src: ['assets/audios/esc-1--amb-pulsacion.mp3'],
		preload: true,
		loop: true,
		volume: 0.8,
	});
	sounds.ep_one.ambient_viento = new Howl({
		src: ['assets/audios/esc-1--amb-viento.mp3'],
		preload: true,
		loop: true,
		volume: 0.8,
	});

	// Sonidos de botones
	sounds.ep_one.copa = new Howl({
		src: ['assets/audios/esc-1--btn-copa-y-brote.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_one.cortinas = new Howl({
		src: ['assets/audios/esc-1--btn-cortinas.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_one.fuego = new Howl({
		src: ['assets/audios/esc-1--btn-fuego-y-brote.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_one.grieta = new Howl({
		src: ['assets/audios/esc-1--btn-grieta.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_one.muneca = new Howl({
		src: ['assets/audios/esc-1--btn-muneca.mp3'],
		preload: true,
		volume: 0.8,
	});
}

//
// Episode Two
//

function func__forward__ep_two( move ) {
	console.log("ep_two, " + move);

	/**/
	// sounds.ep_two.ambient.play();
	// audio.playing = true;

	if ( keyframe.forward <= 775) {
		escenas.escena.style.transform = "translateZ(" + keyframe.forward + "px) rotateY(0deg)";
		keyframe.rotate_count = 0;
		keyframe.rotate = 0;
	} else if ( keyframe.forward > 775) {
		keyframe.forward = 775;
	}
	
}
function func__rotate__ep_two( rotate ) {
	console.log("ep_two, " + rotate);
	
	if ( keyframe.rotate >= -12.5 && keyframe.rotate <= 12.5) {
		escenas.escena.style.transform = "translateZ(" + keyframe.forward + "px) rotateY(" + keyframe.rotate + "deg)";
	}
}
function func__audios__ep_two() {
	// Controlar sonidos ambiente
	/* */
	sounds.ep_two.ambient = new Howl({
		src: [
			'assets/audios/esc-2--ambiente.mp3'
			],
		// autoplay: true,
		preload: true,
		loop: true,
		volume: 0.5,
	});

	// Sonidos de botones
	/**/
	sounds.ep_two.celular = new Howl({
		src: ['assets/audios/esc-2--btn-celular.mp3'],
		preload: true,
		volume: 0.7,
	});
	sounds.ep_two.cortina = new Howl({
		src: ['assets/audios/esc-2--btn-cortina.mp3'],
		preload: true,
		volume: 0.7,
	});
	sounds.ep_two.cristo = new Howl({
		src: ['assets/audios/esc-2--btn-cristo.mp3'],
		preload: true,
		volume: 0.7,
	});
	sounds.ep_two.cuna = new Howl({
		src: ['assets/audios/esc-2--btn-cuna.mp3'],
		preload: true,
		volume: 0.7,
	});
	sounds.ep_two.espejo = new Howl({
		src: ['assets/audios/esc-2--btn-espejo.mp3'],
		preload: true,
		volume: 0.7,
	});
	sounds.ep_two.plancha = new Howl({
		src: ['assets/audios/esc-2--btn-plancha.mp3'],
		preload: true,
		volume: 0.7,
	});
}

//
// Episode Three
//

function func__forward__ep_three( move ) {
	console.log("ep_three, " + move);

	if ( move <= 1600) {
		escenas.escena.style.transform = "translateZ(" + move + "px) rotateY(0deg)";
		keyframe.rotate_count = 0;
		keyframe.rotate = 0;
	} else if ( move > 1600) {
		keyframe.forward = 1600;
	}
}
function func__rotate__ep_three( rotate ) {
	console.log("ep_three, " + rotate);
	let fix_rotate = keyframe.forward - ( ( ( Math.abs(rotate) * 5) * (keyframe.forward * .01 ) ) * 0.15 );
	// console.log(keyframe.forward, rotate, fix_rotate, (keyframe.forward * .01 ) );
	/*
	*/
	if ( keyframe.forward >= 75) {
		if ( keyframe.rotate >= -20 && keyframe.rotate <= 20) {
			escenas.escena.style.transform = "translateZ(" + fix_rotate + "px) rotateY(" + keyframe.rotate + "deg)";
		}
	}
}
function func__audios__ep_three() {
	// Controlar sonidos ambiente
	/* */
	sounds.ep_three.ambient = new Howl({
		src: [
			'assets/audios/esc-3--ambiente.mp3'
			],
		// autoplay: true,
		preload: true,
		loop: true,
		volume: 0.5,
	});

	// Sonidos de botones
	/*
	*/
	sounds.ep_three.pan = new Howl({
		src: ['assets/audios/esc-3--btn-pan.mp3'],
		preload: true,
		volume: 1,
	});
	sounds.ep_three.billetes = new Howl({
		src: ['assets/audios/esc-3--btn-billetes.mp3'],
		preload: true,
		volume: 1,
	});
	sounds.ep_three.redes_sociales = new Howl({
		src: ['assets/audios/esc-3--btn-redes_sociales.mp3'],
		preload: true,
		volume: 1,
	});
	sounds.ep_three.mazo = new Howl({
		src: ['assets/audios/esc-3--btn-mazo.mp3'],
		preload: true,
		volume: 1,
	});
}

//
// Episode Four
//

function func__forward__ep_four( move ) {
	console.log("ep_four, " + move);

	if ( move <= 1350) {
		escenas.escena.style.transform = "translateZ(" + move + "px) rotateY(0deg)";
		keyframe.rotate_count = 0;
		keyframe.rotate = 0;
	} else if ( move > 1350) {
		keyframe.forward = 1350;
	}
}
function func__rotate__ep_four( rotate ) {
	console.log("ep_four, " + rotate);
	let fix_rotate = keyframe.forward - ( ( ( Math.abs(rotate) * 5) * (keyframe.forward * .01 ) ) * 0.15 );

	if ( keyframe.rotate >= -45 && keyframe.rotate <= 45) {
		escenas.escena.style.transform = "translateZ(" + fix_rotate + "px) rotateY(" + keyframe.rotate + "deg)";
	}
}
function func__audios__ep_four() {
	// Controlar sonidos ambiente
	/* */
	sounds.ep_four.ambient = new Howl({
		src: [
			'assets/audios/esc-4--ambiente--cuarto.mp3'
			],
		preload: true,
		loop: true,
		volume: 0.5,
	});
	sounds.ep_four.ambient_pisadas = new Howl({
		src: [
			'assets/audios/esc-4--ambiente--pisadas.mp3'
			],
		preload: true,
		loop: true,
		volume: 0.5,
	});

	// Sonidos de botones
	/**/
	sounds.ep_four.flores = new Howl({
		src: ['assets/audios/esc-4--btn-flores.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_four.globo = new Howl({
		src: ['assets/audios/esc-4--btn-globo.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_four.papel = new Howl({
		src: ['assets/audios/esc-4--btn-papel.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_four.quetzal = new Howl({
		src: ['assets/audios/esc-4--btn-quetzal.mp3'],
		preload: true,
		volume: 0.8,
	});
}

//
// Episode Five
//

function func__forward__ep_five( move ) {
	console.log("ep_five, " + move);

	// Mostrar / Ocultar Cover
	if ( move >= 50 ) {
		if ( hasClass(cover.ep_five__cover, "visible") ) {
			cover.ep_five__cover.classList.remove("visible");
		}
	} else {
		if ( !hasClass(cover.ep_five__cover, "visible") ) {
			cover.ep_five__cover.classList.add("visible");
		}
	}

	// func__cercania(sonido, numero, minimo, maximo, referencia
	// func__cercania(sounds.ep_five.ambient_pisadas, move, 200, 1000, 600);
	// func__cercania(sounds.ep_five.ambient_piedras, move, 3600, 4500, 4050);

	// Mostrar / Ocultar Temazcal
	/* */
	if ( move >= 3550 && move < 4550 ) {
		// Mostrar interior de temazcal
		// console.log("dentro")
		Array.prototype.forEach.call( temazcal.imagenes , function( img ){
			if ( !hasClass(img, "visible") ) {
				img.classList.add("visible");
			}
		});
		if ( hasClass(temazcal.entrance, "visible") ) {
			temazcal.entrance.classList.remove("visible");
		}

		if ( audio.playing && sounds.ep_five.ambient_ext.playing() ) {
			sounds.ep_five.ambient_ext.volume(0);
			sounds.ep_five.ambient_ext.pause();
		}
		if ( audio.playing && !sounds.ep_five.ambient_int.playing() ) {
			sounds.ep_five.ambient_int.volume(0.5);
			sounds.ep_five.ambient_int.play();
		}
	} else {
		// Validar y ocultar interior de temazcal
		// console.log("fuera")
		Array.prototype.forEach.call( temazcal.imagenes , function( img ){
			if ( hasClass(img, "visible") ) {
				img.classList.remove("visible");
			}
		});
		if ( !hasClass(temazcal.entrance, "visible") ) {
			temazcal.entrance.classList.add("visible");
		}

		if ( audio.playing && !sounds.ep_five.ambient_ext.playing() ) {
			sounds.ep_five.ambient_ext.volume(0.5);
			sounds.ep_five.ambient_ext.play();
		}
		if ( sounds.ep_five.ambient_int.playing() ) {
			sounds.ep_five.ambient_int.volume(0);
			sounds.ep_five.ambient_int.pause();
		}
	}

	// if ( keyframe.forward <= 5000) {
	// 	// escenas.escena.style.transform = "translateZ(" + keyframe.forward + "px) rotateY(" + keyframe.rotate + "deg)";
	// 	escenas.escena.style.transform = "translateZ(" + keyframe.forward + "px) rotateY(0deg)";
	// }
	if ( move <= 5000) {
		escenas.escena.style.transform = "translateZ(" + move + "px) rotateY(0deg)";
		keyframe.rotate_count = 0;
		keyframe.rotate = 0;
	} else if ( move > 5000) {
		keyframe.forward = 5000;
		console.log("tope, " + move);
	}
}

function func__rotate__ep_five( rotate ) {
	console.log("ep_five, " + rotate);
	let fix_rotate = keyframe.forward - ( ( ( Math.abs(rotate) * 5) * (keyframe.forward * .01 ) ) * 0.15 );

	if ( keyframe.forward >= 3550 && keyframe.forward < 4550 ) {
		if ( rotate >= -15 && rotate <= 15) {
			escenas.escena.style.transform = "translateZ(" + fix_rotate + "px) rotateY(" + keyframe.rotate + "deg)";
		}
	} else {
		if ( rotate >= -75 && rotate <= 75) {
			escenas.escena.style.transform = "translateZ(" + fix_rotate + "px) rotateY(" + keyframe.rotate + "deg)";
		}
	}
}

function func__audios__ep_five() {
	// Controlar sonidos ambiente
	/* */
	sounds.ep_five.ambient_ext = new Howl({
		src: [
			'assets/audios/esc-5--ambiente--ext.mp3'
			],
		preload: true,
		loop: true,
		volume: 0.5,
	});
	sounds.ep_five.ambient_int = new Howl({
		src: [
			'assets/audios/esc-5--ambiente--int.mp3'
			],
		preload: true,
		autoplay: false,
		loop: true,
		volume: 0.8,
	});
	sounds.ep_five.ambient_pisadas = new Howl({
		src: ['assets/audios/esc-5--amb-pisadas.mp3'],
		preload: true,
		loop: true,
		volume: 0.8,
	});
	sounds.ep_five.ambient_piedras = new Howl({
		src: ['assets/audios/esc-5--amb-piedras.mp3'],
		preload: true,
		loop: true,
		volume: 0.8,
	});


	// Sonidos de botones
	/**/
	sounds.ep_five.constelacion = new Howl({
		src: ['assets/audios/esc-5--btn-constelacion.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_five.fogata = new Howl({
		src: ['assets/audios/esc-5--btn-fogata.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_five.maguey = new Howl({
		src: ['assets/audios/esc-5--btn-maguey.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_five.maiz = new Howl({
		src: ['assets/audios/esc-5--btn-maiz.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_five.rana = new Howl({
		src: ['assets/audios/esc-5--btn-rana.mp3'],
		preload: true,
		volume: 0.8,
	});
	sounds.ep_five.vela = new Howl({
		src: ['assets/audios/esc-5--btn-vela.mp3'],
		preload: true,
		volume: 0.8,
	});
}

//
// Episode Six
//

function func__forward__ep_six( move ) {
	console.log("ep_six, " + move);

	// Mostrar / Ocultar Cover
	if ( move >= 50 ) {
		if ( hasClass(cover.ep_six__cover, "visible") ) {
			cover.ep_six__cover.classList.remove("visible");
		}
	} else {
		if ( !hasClass(cover.ep_six__cover, "visible") ) {
			cover.ep_six__cover.classList.add("visible");
		}
	}

	/**/
	if ( move <= 75) {
		escenas.escena.style.transform = "translateZ(" + move + "px) rotateY(0deg)";
		keyframe.rotate_count = 0;
		keyframe.rotate = 0;
	} else if ( move > 75) {
		keyframe.forward = 75;
		console.log("tope, " + move);
	}
	
}
function func__rotate__ep_six( move ) {
	console.log("ep_six, " + move);
	/*
	*/
	if ( keyframe.rotate >= -180 && keyframe.rotate <= 180) {
		escenas.escena.style.transform = "translateZ(" + keyframe.forward + "px) rotateY(" + keyframe.rotate + "deg)";
	}
}
function func__audios__ep_six() {
	// Controlar sonidos ambiente
	/* */
	sounds.ep_six.ambient = new Howl({
		src: [
			'assets/audios/esc-6--ambiente.mp3'
			],
		preload: true,
		loop: true,
		volume: 0.5,
	});

	// Sonidos de botones
	/**/
	sounds.ep_six.arbusto = new Howl({
		src: ['assets/audios/esc-6--btn-arbusto.mp3'],
		preload: true,
		volume: 1,
	});
	sounds.ep_six.ave_de_papel = new Howl({
		src: ['assets/audios/esc-6--btn-ave-de-papel.mp3'],
		preload: true,
		volume: 1,
	});
	sounds.ep_six.balcon = new Howl({
		src: ['assets/audios/esc-6--btn-balcon.mp3'],
		preload: true,
		volume: 1,
	});
	sounds.ep_six.rama = new Howl({
		src: ['assets/audios/esc-6--btn-rama.mp3'],
		preload: true,
		volume: 1,
	});
	
}
//
//
//

function esc__forward() {
	// Todos los avances
	// 

	// console.log(keyframe.forward_count);


	// Validar las acciones de avance por escena 

	if ( escenas.actual == "prologo" ) {
		func__skip_prologo();
		// keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 1 );
		// func__forward__prologo( keyframe.forward );

	} else if ( escenas.actual == "ep_one" ) {	
		
		keyframe.total = 600;

		keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 2.5 );
		func__forward__ep_one( keyframe.forward );

	} else if ( escenas.actual == "ep_two" ) {	

		keyframe.total = 400;

		keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 2 );
		setTimeout( () => {
			func__forward__ep_two( keyframe.forward );
		}, 150);

	} else if ( escenas.actual == "ep_three" ) {	

		keyframe.total = 650;

		keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 2.5 );
		setTimeout( () => {
			func__forward__ep_three( keyframe.forward );
		}, 150);

	} else if ( escenas.actual == "ep_four" ) {	

		keyframe.total = 540;

		keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 2.5 );
		setTimeout( () => {
			func__forward__ep_four( keyframe.forward );
		}, 150);

	} else if ( escenas.actual == "ep_five" ) {	

		keyframe.total = 2000;

		keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 2.5 );
		setTimeout( () => {
			func__forward__ep_five( keyframe.forward );
		}, 150);

	} else if ( escenas.actual == "ep_six" ) {	

		keyframe.total = 75;

		keyframe.forward = ( keyframe.forward_count < 1 ) ? 1 : ( keyframe.forward_count * 2.5 );
		setTimeout( () => {
			func__forward__ep_six( keyframe.forward );
		}, 150);

	}
}

function esc__rotate() {
	// Todas las rotaciones
	// 

	// console.log(keyframe.rotate_count);

	if ( escenas.actual == "ep_two" ) {
		
		keyframe.total_rotation = 12.5;

		keyframe.rotate = keyframe.rotate_count * 1;
		func__rotate__ep_two( keyframe.rotate );

	} else if ( escenas.actual == "ep_three" ) {

		keyframe.total_rotation = 20;

		keyframe.rotate = keyframe.rotate_count * 1;
		func__rotate__ep_three( keyframe.rotate );

	} else if ( escenas.actual == "ep_four" ) {

		keyframe.total_rotation = 45;

		keyframe.rotate = keyframe.rotate_count * 1;
		func__rotate__ep_four( keyframe.rotate );

	} else if ( escenas.actual == "ep_five" ) {

		keyframe.total_rotation = 75;

		keyframe.rotate = keyframe.rotate_count * 1;
		func__rotate__ep_five( keyframe.rotate );

	} else if ( escenas.actual == "ep_six" ) {

		keyframe.total_rotation = 180;

		keyframe.rotate = keyframe.rotate_count * 1;
		func__rotate__ep_six( keyframe.rotate );

	}
}

// Movimiento en el interactivo al hacer mouseWheel
function keyframe_func( move ) {

	if ( move < 0) {
		// -1 avanza
		// Avanzar si sube el mouseWheel
		// if ( keyframe.forward_count < keyframe.total) {
		if ( keyframe.forward_count < keyframe.total) {
			// keyframe.forward_count++;
			keyframe.forward_count = parseInt(keyframe.forward_count) + 10;
		}
	} else {
		// +1 retrocede
		// Retroceder si baja el mouseWheel && keyframe.forward_count es mayor a 0
		if ( keyframe.forward_count > 0 ) {
			// keyframe.forward_count--;
			keyframe.forward_count = parseInt(keyframe.forward_count) - 10;
		}
	}

	esc__forward();
}

function keyframe_rotate_func( rotate ) {

	if ( rotate < 0) {
		// -1 left
		if ( keyframe.rotate_count < keyframe.total_rotation) {
			keyframe.rotate_count = parseInt(keyframe.rotate_count) + 5;
		}
	} else {
		// +1 right
		if ( keyframe.rotate_count > (keyframe.total_rotation * -1) ) {
			keyframe.rotate_count = parseInt(keyframe.rotate_count) - 5;
		}
	}

	esc__rotate();
}

function func__mute__ambients() {
	( sounds.ep_one.ambient.playing() ) ? sounds.ep_one.ambient.stop().mute() : '';
	( sounds.ep_one.ambient_hervor.playing() ) ? sounds.ep_one.ambient_hervor.stop().mute() : '';
	( sounds.ep_one.ambient_viento.playing() ) ? sounds.ep_one.ambient_viento.stop().mute() : '';
	// ( sounds.ep_one.ambient_pisadas.playing() ) ? sounds.ep_one.ambient_pisadas.stop().mute() : '';
	// ( sounds.ep_one.ambient_pulsacion.playing() ) ? sounds.ep_one.ambient_pulsacion.stop().mute() : '';
	( sounds.ep_two.ambient.playing() ) ? sounds.ep_two.ambient.stop().mute() : '';
	( sounds.ep_three.ambient.playing() ) ? sounds.ep_three.ambient.stop().mute() : '';
	( sounds.ep_four.ambient.playing() ) ? sounds.ep_four.ambient.stop().mute() : '';
	( sounds.ep_five.ambient_ext.playing() ) ? sounds.ep_five.ambient_ext.stop().mute() : '';
	( sounds.ep_six.ambient.playing() ) ? sounds.ep_six.ambient.stop().mute() : '';
}

function func__audio_switch() {
}

function func__audio_control() {
	audio.btn = document.querySelector(".js--inter__btn--sound");
	audio.image = audio.btn.querySelector("img");

	audio.btn.addEventListener("click", () => {
		// console.log("click");

		if ( escenas.actual == "ep_prologo" ) {
			audio.actual = sounds.ep_prologo.ambient;
		} else if ( escenas.actual == "ep_one" ) {
			audio.actual = sounds.ep_one.ambient;
		} else if ( escenas.actual == "ep_two" ) {
			audio.actual = sounds.ep_two.ambient;
		} else if ( escenas.actual == "ep_three" ) {
			audio.actual = sounds.ep_three.ambient;
		} else if ( escenas.actual == "ep_four" ) {
			audio.actual = sounds.ep_four.ambient;
		} else if ( escenas.actual == "ep_five" ) {
			if ( keyframe.forward > 3550 && keyframe.forward < 4549 ) {
				audio.actual = sounds.ep_five.ambient_int;
			} else {
				audio.actual = sounds.ep_five.ambient_ext;
			}
		} else if ( escenas.actual == "ep_six" ) {
			audio.actual = sounds.ep_six.ambient;
		}

		if ( audio.playing ) {
			audio.actual.pause().volume(0);

			sounds.ep_one.ambient_hervor.pause().mute();
			sounds.ep_one.ambient_viento.pause().mute();
			// if ( escenas.actual == "ep_one" ) {
			// }

			audio.image.setAttribute("src", audio.image.getAttribute("data-play"));
		} else {
			audio.actual.play();
			audio.actual.volume(0.5);
			if ( escenas.actual == "ep_one" ) {
				sounds.ep_one.ambient_hervor.volume(0.1);
				sounds.ep_one.ambient_hervor.play();
				sounds.ep_one.ambient_viento.volume(0.1);
				sounds.ep_one.ambient_viento.play();
			}

			audio.image.setAttribute("src", audio.image.getAttribute("data-mute"));
		}

		audio.playing = !audio.playing;
	});
}

function func__videos() {
	let tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";

	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function func__modales() {
	modal.pages = document.querySelectorAll(".js--modal");
}
// Resize resize
/*

window.onresize = function() { // event
	if(tOut !== false)
		clearTimeout(tOut);
	tOut = setTimeout(imagenes_func, 500);
};
*/

function func__interface() {
	interface = document.querySelector(".js--interface");

	interface.classList.add("visible");
}

function entrada() {

	intro.screen = document.querySelector(".js--intro");
	intro.btns = document.querySelectorAll(".js--intro--btn");

	Array.prototype.forEach.call(intro.btns, function(btn) {

		btn.addEventListener('click', function(e) {
			e.preventDefault();

			if ( btn.getAttribute("data-seccion") == "instrucciones" ) {
				//

				intro.screen.classList.add("oculto");

				setTimeout( () => {
					intro.screen.classList.add("atras");
				}, 1000);

				pages.page = document.querySelector(".js--page[data-page='instrucciones']");
				pages.page.classList.toggle("visible");
			}

			if ( btn.getAttribute("data-seccion") == "prologo" ) {
				//
				if ( !pages.page ) {
					pages.page = document.querySelector(".js--page[data-page='instrucciones']");
				}

				pages.page.classList.add("oculto");
				pages.page.classList.remove("visible");

				func__interface();

				func__elements__ep_prologo();

				func__audios__ep_prologo();
				func__audios__ep_one();
				func__audios__ep_two();
				func__audios__ep_three();
				func__audios__ep_four();
				func__audios__ep_five();
				func__audios__ep_six();

				audio.actual = sounds.ep_prologo.ambient;

				func__audio_control();

				setTimeout( () => {
					pages.page.classList.add("atras");

					pages.page = document.querySelector(".js--page[data-page='prologo']");
					pages.page.classList.toggle("visible");

					escenas.escena = document.querySelector(".js--escena[data-scena='prologo']");
					escenas.actual = "prologo";

					interface.classList.add("interface--prologo");

					setTimeout( () => {
						esc__forward();
					}, 100);


				}, 1000);

			}
			
			if ( btn.getAttribute("data-seccion") == "entrar" ) {
				pages.page.classList.add("oculto");

				setTimeout( () => {
					pages.page.classList.add("atras");
				}, 1000);

				// Funciones ejecutadas hasta entrar
				//
				//
			}
		});
	});
}

function func__menu() {
	menu.btn = document.querySelector(".js--menu__btn");
	menu.close = document.querySelector(".js--menu__close");
	menu.modal = document.querySelector(".js--header__menu");

	if ( menu.btn ) {
		menu.btn.addEventListener('click', function (e) {
			e.preventDefault();
			menu.modal.classList.toggle("visible");
		});
	}
	if ( menu.close ) {
		menu.close.addEventListener('click', function (e) {
			e.preventDefault();
			func__menu_close()
		});
	}
}

function func__menu_close() {
	menu.modal.classList.remove("visible");
	if (audio.playing ) {
		audio.actual.play();
		audio.actual.volume(0.5);
		if ( escenas.actual == "ep_one" ) {
			sounds.ep_one.ambient_hervor.volume(0.1);
			sounds.ep_one.ambient_hervor.play();
			sounds.ep_one.ambient_viento.volume(0.1);
			sounds.ep_one.ambient_viento.play();
		}
	}
}

function func__modal_close__all() {
	Array.prototype.forEach.call(modal.pages, function(page) {
		// console.log(page);
		if ( hasClass(page, 'visible') ) {
			page.classList.remove("visible");

			modal.iframe = page.querySelector('iframe');
			// console.log(modal.iframe);

			/**/
			if ( modal.iframe ) {
				// console.log("Video iframe");
				if ( modal.iframe.getAttribute("data-type") === "youtube" ) {
					// console.log("Video de Youtube");

					let modalYotube = modal.iframe[0].contentWindow;
					modalYotube.postMessage(
					'{"event":"command","func":"stopVideo","args":""}',
					"*"
					);
					let iframeSrc = modal.iframe.src;
					modal.iframe.src = iframeSrc;

				} else {
					// console.log("Video de Vimeo")
					modal.player = new Vimeo.Player(modal.iframe);

					modal.player.pause().then(function() {
					}).catch(function(error) {
						console.log(error.name);
					});
				}
			}
			

		}
		if (audio.playing ) {
			audio.actual.play();
			audio.actual.volume(0.5);
			if ( escenas.actual == "ep_one" ) {
				sounds.ep_one.ambient_hervor.volume(0.1);
				sounds.ep_one.ambient_hervor.play();
				sounds.ep_one.ambient_viento.volume(0.1);
				sounds.ep_one.ambient_viento.play();
			}
		}

	});

	// Cambiar valor de scroll
	modal.scroll = true;
}

function func__pages_close() {
	Array.prototype.forEach.call(pages.pages, function(page) {
		if ( hasClass(page, 'visible') ) {
			page.classList.remove("visible");

			pages.iframe = page.querySelector('iframe');

			if ( pages.iframe ) {

				if (audio.playing ) {
					audio.actual.play();
					audio.actual.volume(0.5);
				}

				pages.player = new Vimeo.Player(pages.iframe);

				pages.player.pause().then(function() {

				}).catch(function(error) {
					console.log(error.name);
				});
			}
		}
		if (audio.playing ) {
			audio.actual.play();
			audio.actual.volume(0.5);
			if ( escenas.actual == "ep_one" ) {
				sounds.ep_one.ambient_hervor.volume(0.1);
				sounds.ep_one.ambient_hervor.play();
				sounds.ep_one.ambient_viento.volume(0.1);
				sounds.ep_one.ambient_viento.play();
			}
		}
	});

	// Cambiar valor de scroll
	modal.scroll = true;
}

function func__pages() {
	pages.btns = document.querySelectorAll(".js--pages__btn");
	pages.close = document.querySelectorAll(".js--pages__cerrar");
	pages.pages = document.querySelectorAll(".js--page");

	Array.prototype.forEach.call(pages.btns, function( btn ) {
		btn.addEventListener("click", function (e) {
			e.preventDefault();
			pages.target = btn.getAttribute("data-page");

			pages.page = document.querySelector(".js--page[data-page='" + pages.target + "']");

			pages.page.classList.toggle("visible");

			func__menu_close();
			func__mute__ambients();

			// Cambiar valor de scroll
			modal.scroll = false;
		});
	});

	Array.prototype.forEach.call(pages.close, function( close ) {
		close.addEventListener("click", function (e) {
			e.preventDefault();
			func__pages_close();
		});
	});
}

function func__map(){
	let map = {};
	map.icons = document.querySelectorAll(".js--map__icon");

	map.icons?.forEach(icon => {
		icon.addEventListener("mouseenter", () => {
			map.icons?.forEach(i => {
				if (i != icon ) {
					i.classList.add("fade");
				}
			});
		});
		icon.addEventListener("mouseleave", () => {
			map.icons?.forEach(i => {
				if (i != icon && hasClass(i, "fade") ) {
					i.classList.remove("fade");
				}
			});
		});
	});
}

function func__records(){
	let records = {};
	records.groups = document.querySelectorAll(".js--records__group");
	records.groups_section = document.querySelectorAll(".js--records__section");
	records.records = document.querySelectorAll(".js--record");
	records.records_information = document.querySelectorAll(".js--record__information");
	records.image_container = document.querySelector(".js--record__image");

	records.groups?.forEach(group => {
		group.addEventListener("click", () => {
			records.group = group.getAttribute("data-group");
			records.group_container = document.querySelector(".js--records__section[data-group='" + records.group + "']");

			if ( !hasClass(records.group_container, "visible") ) {
				records.group_container.classList.add("visible");
			}
			records.groups_section?.forEach(other => {
				if ( other != records.group_container && hasClass(other, "visible" )) {
					other.classList.remove("visible");
				}
			});

			if ( !hasClass(group, "active") ) {
				group.classList.add("active");
			}
			records.groups?.forEach(button => {
				if ( button != group && hasClass(button, "active" )) {
					button.classList.remove("active");
				}
			});
		});
	});

	records.records?.forEach(record => {
		record.addEventListener("click", () => {
			records.record = record.getAttribute("data-record");
			records.record_image = record.querySelector("img").getAttribute("src");

			records.record_container = document.querySelector(".js--record__information[data-record='" + records.record + "']");
			records.image_container.setAttribute("src", records.record_image);

			if ( !hasClass(records.record_container, "visible") ) {
				records.record_container.classList.add("visible");
			}

			records.records_information?.forEach(g => {
				if ( g != records.record_container && hasClass(g, "visible" )) {
					g.classList.remove("visible");
				}
			});
		});
	});
}

function func__navigation() {
	let nav = {};
	nav.btns = document.querySelectorAll(".js--escene--exit");

	Array.prototype.forEach.call(nav.btns, function( btn ) {
		btn.addEventListener("click", () => {

			func__pages_close();

			nav.to = btn.getAttribute("data-scena");
			// console.log(nav.to);

			escenas.escena.classList.remove("visible");

			func__mute__ambients();

			if ( nav.to == "ep_one" ) {
				setTimeout( () => {
					escenas.actual = "ep_one";
					escenas.escena = document.querySelector(".js--escena[data-scena='" + escenas.actual + "']");
					escenas.escena.classList.add("visible");

					audio.actual = sounds.ep_one.ambient;
					if ( audio.playing ) {
						sounds.ep_one.ambient.play();
					}

				}, 100);
			} else if ( nav.to == "ep_two" ) {
				setTimeout( () => {
					escenas.actual = "ep_two";
					escenas.escena = document.querySelector(".js--escena[data-scena='" + escenas.actual + "']");
					escenas.escena.classList.add("visible");

					audio.actual = sounds.ep_two.ambient;
					if ( audio.playing ) {
						sounds.ep_two.ambient.play();
					}

				}, 100);
			} else if ( nav.to == "ep_three" ) {
				setTimeout( () => {
					escenas.actual = "ep_three";
					escenas.escena = document.querySelector(".js--escena[data-scena='" + escenas.actual + "']");
					escenas.escena.classList.add("visible");

					audio.actual = sounds.ep_three.ambient;
					if ( audio.playing ) {
						sounds.ep_three.ambient.play();
					}

				}, 100);
			} else if ( nav.to == "ep_four" ) {
				setTimeout( () => {
					escenas.actual = "ep_four";
					escenas.escena = document.querySelector(".js--escena[data-scena='" + escenas.actual + "']");
					escenas.escena.classList.add("visible");

					audio.actual = sounds.ep_four.ambient;
					if ( audio.playing ) {
						sounds.ep_four.ambient.play();
					}

				}, 100);
			} else if ( nav.to == "ep_five" ) {
				setTimeout( () => {
					escenas.actual = "ep_five";
					escenas.escena = document.querySelector(".js--escena[data-scena='" + escenas.actual + "']");
					escenas.escena.classList.add("visible");

					audio.actual = sounds.ep_five.ambient_ext;
					if ( audio.playing ) {
						sounds.ep_five.ambient_ext.play();
					}

				}, 100);
			} else if ( nav.to == "ep_six" ) {
				setTimeout( () => {
					escenas.actual = "ep_six";
					escenas.escena = document.querySelector(".js--escena[data-scena='" + escenas.actual + "']");
					escenas.escena.classList.add("visible");

					audio.actual = sounds.ep_six.ambient;
					if ( audio.playing ) {
						sounds.ep_six.ambient.play();
					}

				}, 100);
			}

			func__reset_position();

		});
	});
}

function func__fullScreen() {
	let apagador = 0;
	function launchFullScreen(element) {
		if(element.requestFullScreen) {
			element.requestFullScreen();
		} else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if(element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		} else if(element.msRequestFullScreen) {
			element.msRequestFullScreen();
		}
	}
	function exitFullscreen() {
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}

	let btn_fullScreen = document.querySelector(".js--inter__btn--fullscreen");

	if (btn_fullScreen) {
		btn_fullScreen.onclick = function(e) {
			e.preventDefault();
			if (apagador === 0) {
				launchFullScreen(document.documentElement);
				apagador = 1;
			} else {
				exitFullscreen();
				apagador = 0;
			}
			// setTimeout(function() {
			// 	rsize();
			// },milSec);
		};
	}
}


// Detectar movimiento del Mouse wheel
function scroll_func(){

	function wheel_move( e ) {
		if ( modal.scroll ) {
			e = window.event || e;
			keyframe.forward = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

			keyframe_func( keyframe.forward );
		}
	}

	keyframe.canvas = $sel(".js--body");
	keyframe.canvas.addEventListener("mousewheel", wheel_move, false);
	keyframe.canvas.addEventListener("DOMMouseScroll", wheel_move, false);
}

// Detectar movimiento del Presionar teclas
function key_func() {
	document.addEventListener("keydown", function ( e ) {
		keyframe.key = e.keyCode || e.which;
		// console.log(keyframe.key)

		if ( e.code === "Escape" || e.keyCode === 27 ) {
		// Funciones
			func__menu_close();
			func__pages_close();
			func__modal_close__all();
		}

		// if ( modal.scroll ) {

			if ( keyframe.key === 38 ) {
				// Up
				keyframe.forward = -1;
				keyframe_func( keyframe.forward );
			} else if ( keyframe.key === 40 ) {
				// Down
				keyframe.forward = 1;
				keyframe_func( keyframe.forward );
			} else if ( keyframe.key === 37 ) {
				// Left
				keyframe.rotate = 1;
				keyframe_rotate_func( keyframe.rotate );
			} else if ( keyframe.key === 39 ) {
				// Right
				keyframe.rotate = -1;
				keyframe_rotate_func( keyframe.rotate );
			} else if ( keyframe.key === 32 ) {
				// Space
			}
		// }

	}, {passive: true});
}

// Detectar movimiento de swipe
function swipe_func() {
	/*
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
		keyframe.forward = (ev.distance / 20).toFixed(0);

		if ( keyframe.forward_count > keyframe.forward ) {
			keyframe.forward_count = keyframe.forward_count - keyframe.forward;
		}

		esc__forward();
	});
	mc.on("swipedown", function(ev) {
		// Swipe down avanza
		keyframe.forward = (ev.distance / 20).toFixed(0);
		keyframe.forward = parseInt(keyframe.forward);

		if ( ( keyframe.forward_count + keyframe.forward ) < keyframe.total ) {
			keyframe.forward_count = keyframe.forward_count + keyframe.forward;
		}

		esc__forward();
	});
	*/
}


function func__dev() {
	// ** Pruebas ** Saltar a escena
	/*
	func__audios__ep_one();
	func__audios__ep_two();
	func__audios__ep_three();
	func__audios__ep_four();
	func__audios__ep_five();
	func__audios__ep_six();

	escenas.actual = "ep_six";
	escenas.escena = document.querySelector(".js--escena[data-scena='ep_six']");
	escenas.escena.classList.add("visible");

	audio.actual = sounds.ep_six.ambient;

	func__audio_control();
	interactivo.container.classList.remove("oculto");
	 */

	// sounds.ep_four.ambient.play();
	// sounds.ep_five.ambient_ext.play();
	// sounds.ep_five.ambient_ext.volume(0.5);
	
}

function agentHas(keyword) {
	return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}

function arrancar() {
	// console.log('Arrancando');
			
	modal.loader.classList.remove("visible");
	interactivo.container = document.querySelector(".js--interactivo");

	// ** Pruebas **
	func__dev();

	// func__audios();

	entrada();
	func__fullScreen();
	func__menu();
	func__navigation();

	// Movimiento
	scroll_func();
	key_func();
	swipe_func();

	// Movimiento al arrancar
	// mover_hash();
	keyframe_func( 1 );
	// para Probar
	// keyframe.forward_count = 1155;
	// esc__forward();
	// para Probar


	// Otros elementos
	func__modales();
	
	// func__audio_control();
	func__pages();
	func__map();
	func__records();

	func__videos();

	func__trailer();

}

function onAlways( ) { //instance
	// console.log('all images are loaded');
	setTimeout( () => {
		if ( !interactivo.arranca ) {
			console.log('Posiblemente no se encontraron todas las imágenes.');
			// modal.spine.classList.add("invisible");
			// modal.loader_leyenda.innerHTML = '<p>Posiblemente no se encontraron todas las imágenes,<br> ¡Pero empecemos!</p>';
			interactivo.arranca = true;
			imgLoad.off( 'always', onAlways );

			// Agregar alerta
			setTimeout( () => {
				arrancar();
			}, 500);
		}
	}, 6000);
}

document.addEventListener('DOMContentLoaded', function(){
	// Acomodo de elementos
	imagenes_func();

	// Loader
	imgLoad = imagesLoaded( $sel('#masalladelasombra') );
	modal.loader = $sel(".js--loader");
	// modal.loader_leyenda = $sel(".js--loader__leyenda");
	// modal.spine = $sel(".js--spinner");

	imgLoad.on( 'always', onAlways );

	imgLoad.on( 'done', function( ) { // instance
		// console.log('Imágenes cargadas');
		// modal.spine.classList.add("invisible");
		// modal.loader_leyenda.innerHTML = '<p>Listo</p>';
		interactivo.arranca = true;

		setTimeout( () => {
			arrancar();
		}, 500);
	});

});

window.addEventListener("unhandledrejection", (event) => {
  console.log(event.reason);
});

