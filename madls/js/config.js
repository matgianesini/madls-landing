// Grab the HTML source that needs to be compiled
var menuSource = document.getElementById( 'contenedor-Template' ).innerHTML;

// Compiles the source
var menuTemplate = Handlebars.compile( menuSource );

// Process Template with Data
document.getElementById( 'corrupcionario' ).innerHTML = menuTemplate( contenidoInteractivo );