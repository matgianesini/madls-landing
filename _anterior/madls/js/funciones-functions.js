var proyecto = {};
proyecto.variable = 5;
//...time goes by...
console.log(proyecto.variable);

console.log(proyecto.variable, proyecto.variable2);
console.log({proyecto.variable, proyecto.variable2});

function menuActivo() {
	var url = window.location.pathname,
	urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
	if( url != '/'){

		var links = document.querySelectorAll('nav ul li a');
		Array.prototype.forEach.call(links, function(el, i){
			if(urlRegExp.test(el.href.replace(/\/$/,''))){
				el.classList.add("activo");
			}
		});

	}
}

document.addEventListener('DOMContentLoaded', function() {
	menuActivo();
});

function arranque() {
}

function scrolls() {
	var vent_top = 0;

	$(window).scroll(function() {

		vent_top = $(window).scrollTop();
		
		var logo = $(".logo a");
		if ( top > 305 ){
			logo.addClass("fijo");
		} else {
			logo.removeClass("fijo");
		}

	});
}

function scrolls() {
	window.onscroll = function () {
		parallax();
		var divSocialBlack = $('#divSocialBlack');

		if (divSocialBlack) {
			if (mywindow.scrollTop() > 10) {
				divSocialBlack.fadeIn();
			}
			else {
				divSocialBlack.fadeOut();
			}
		}
		mypos = mywindow.scrollTop();
	};
}


// anchos - responsive

function imagenFondo() {
	if ((screen.width<=800) && (screen.height<=600)) {
		
	}
	else {
		
	}
}

// Funcion al finalizar resize

function rsizeItems() {
	console.log("ancho final:"+document.body.offsetWidth);
}

var tOut = false;
var milSec = 500;
window.onresize = function(event) {
	if(tOut !== false)
		clearTimeout(tOut);
	tOut = setTimeout(rsizeItems, milSec);
};

// Docs

for (var j in arr_videos ) {
	//arr_videos[j];
}

setTimeout(function() {
	// code
}, 0);

setInterval(function() {
	// code
}, 3000);

if ( document.body.offsetWidth <=500 ) {
	// code
}

var body = $('body');
body.attr('class', ' inicio');

var	body = document.body,
			html = document.documentElement;

var alto_ventana = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


var alto = window.innerHeight;
var js_fondo = document.querySelector(".js-fondo");
js_fondo.style.height = alto+"px";


susc_nombre = document.querySelector('#susc-nombre').value;
susc_genero = $("input[name='genero']:checked").val();


var url_completa = window.location.href.replace(/\?.+/gi, "");
window.location.hash = '';


var element = document.querySelector("div");
var elements = document.querySelectorAll(".container div");
var ejemplo = document.getElementsByTagName("div");

var el = document.querySelector(".main-content");
el.className = "foo";
el.className += " foo";
el.classList.add("someClass");
el.classList.remove("someClass");
el.setAttribute('class', 'awesome');
if ( el.classList.contains("someClass") ) {

}

// Getting the parent node
var parent = document.querySelector("div").parentNode;

// Getting the next node
var next = document.querySelector("div").nextSibling;

// Getting the previous node
var next = document.querySelector("div").previousSibling;

// Getting the first child element
var child = document.querySelector("div").children[0];

// Getting the last child
var last = document.querySelector("div").lastElementChild;

// Clone it
var clone = element.cloneNode(true);

// Get the color value of .element:before
var color = window.getComputedStyle(
	document.querySelector('.element'), ':before'
).getPropertyValue('color');

// Get the content value of .element:before
var content = window.getComputedStyle(
	document.querySelector('.element'), ':before'
).getPropertyValue('content');

var str = "David is an Arsenal fan, which means David is great";
str.replace(/David/g, "Darren"); // "Darren is an Arsenal fan, which means Darren is great"

/*
if(v){
   var x = v;
} else {
   var x =10;
}
*/
var x = v || 10;
/*
var direction;
if(x > 100){
   direction = 1;
} else {
   direction = -1;
}
*/
var direction = (x > 100) ? 1 : -1;


var names = ['George',
	'Ringo',
	'Paul',
	'John'];
for(var i=0,j=names.length;i<j;i++) {
	doSomethingWith(names[i]);
}




var elem = document.getElementById('my-element'),
	startTime = null,
	endPos = 500, // in pixels
	duration = 2000; // in milliseconds

function render(time) {
	if (time === undefined)
	{
		time = new Date().getTime();
	}
	if (startTime === null)
	{
		startTime = time;
	}

	elem.style.left = ((time - startTime) / duration * endPos % endPos) + 'px';
}
 
elem.onclick = function() {
	(function animationLoop() {
		render();
		requestAnimationFrame(animationLoop, elem);
	})();
};

setInterval(function() {
	alert("Hello");
},3000);



total_cant = (total_cant > 0) ? total_cant-- : total_cant;

// Once

function once(fn, context) {
	var result;

	return function() {
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

// Usage
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada


var event = document.createEvent('HTMLEvents');
event.initEvent('click', true, false);
transp.dispatchEvent(event);


function getOffsetTop( obj ) {
	var curtop = 0;
	if (obj.offsetParent) {
		do {
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
		return curtop;
	}
}

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function hasClass(el, cls) {
	return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}


function findParentNode(parentName, childObj) {
    var testObj = childObj.parentNode;
    var count = 1;
    while(testObj.getAttribute('name') != parentName) {
        alert('My name is ' + testObj.getAttribute('name') + '. Let\'s try moving up one level to see what we get.');
        testObj = testObj.parentNode;
        count++;
    }
    // now you have the object you are looking for - do something with it
    alert('Finally found ' + testObj.getAttribute('name') + ' after going up ' + count + ' level(s) through the DOM tree');
}

variable = (condition) ? true-value : false-value;


parseInt();



var getAbsoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();



// Forma más rápida de incluir elementos en el dom
var c = document.createDocumentFragment();
for (var i=0; i<10000; i++) {
    var e = document.createElement("div");
    e.className = "test-div";
    c.appendChild(e);
}
document.body.appendChild(c);

var color = window.getComputedStyle(
	document.querySelector('.element'), ':before'
).getPropertyValue('color')