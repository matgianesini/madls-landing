// Codigo js para formularios
function borrar_form (input_nombre, input_tel, input_cel, input_email, input_comentarios, mensaje)
{
	// Función de limpiar formulario
	input_nombre.value = '';
	input_tel.value = '';
	input_cel.value = '';
	input_email.value = '';
	input_comentarios.value = '';
	input_nombre.classList.remove('correcto', 'error');
	input_tel.classList.remove('correcto', 'error');
	input_cel.classList.remove('correcto', 'error');
	input_email.classList.remove('correcto', 'error');
	input_comentarios.classList.remove('correcto', 'error');

	mensaje.classList.remove('faltante', 'enviando', 'exito');
	mensaje.innerHTML = '';
}

function validateEmail(email)
{
	// Función para validar correo con respecto a regex específico.
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validacion(este)
{
	var validando = document.querySelector( este );
	var valor = validando.value;
	var con_valor = true;
	// Si está vacio
	if( valor === "")
	{

		validando.classList.add("error");
		validando.classList.remove("correcto");

	// Si no está vacio
	} else {

		if ( este === "#contact-email")
		{
			if ( validateEmail(valor) )
			{
				validando.classList.add("correcto");
				validando.classList.remove("error");
				return con_valor;
			} else {
				validando.classList.add("error");
				validando.classList.remove("correcto");
			}
		} else {
			validando.classList.add("correcto");
			validando.classList.remove("error");
			return con_valor;
		}
	}
}

function enviando ()
{
	// Función para enviar formulario.
	// Captura de valores.
	// Validación de campos.
	// Envío con Ajax.


	var input_nombre = document.querySelector("#contact-nombre");
	var input_tel = document.querySelector("#contact-tel");
	var input_cel = document.querySelector("#contact-cel");
	var input_email = document.querySelector("#contact-email");
	var input_comentarios = document.querySelector("#contact-comentarios");
	var input_destinatario = document.querySelector("#contact-destinatario");

	var val_nombre = input_nombre.value;
	var val_tel = input_tel.value;
	var val_cel = input_cel.value;
	var val_email = input_email.value;
	var val_comentarios = input_comentarios.value;
	var val_destinatario = input_destinatario.options[input_destinatario.selectedIndex].value;

	var url_blog = document.querySelector("#contact-url").value;

	var mensaje = document.querySelector(".js-mensaje");

	// Validar los campos
	validacion('#contact-nombre');
	validacion('#contact-tel');
	validacion('#contact-email');
	validacion('#contact-comentarios');
	validacion('#contact-destinatario');

	// Si los campos son válidos, mandar correo
	if (
		validacion('#contact-nombre') &&
		validacion('#contact-tel') &&
		validacion('#contact-email') &&
		validacion('#contact-comentarios') &&
		validacion('#contact-destinatario')
	)
	{
		mensaje.classList.add('enviando');
		mensaje.innerHTML = '<p>Enviando...</p>';
		var data =
		"&nombre="			+ val_nombre		+
		"&tel="				+ val_tel			+
		"&cel="				+ val_cel			+
		"&email="			+ val_email			+
		"&comentarios="	+ val_comentarios	+
		"&destinatario="	+ val_destinatario;

		$.ajax({
			type: "POST",
			url: url_blog+'/send-mail.php',
			data: data,
			error: function () {
				borrar_form(input_nombre, input_tel, input_cel, input_email, input_comentarios, mensaje);
				mensaje.classList.add('exito');
				mensaje.innerHTML = '<p>Sus datos no pudieron ser enviados. Por favor intenta de nuevo.</p>';
			},
			success: function(){
				borrar_form(input_nombre, input_tel, input_cel, input_email, input_comentarios, mensaje);
				mensaje.classList.add('exito');
				mensaje.innerHTML = '<p>Sus datos ha sido enviados, nos contactaremos a la brevedad. Si desea enviar otro mensaje llene de nuevo el formulario.</p>';
			}
		});

	} else {
		mensaje.innerHTML = '<p>Llena todos los campos necesarios de forma correcta</p>';
	}
}

/* Falta Arreglar este */
function validar()
{
	var campo = this.getAttribute("id");
	var email = '';
	var valor = this.value;

	if( $(this).next(".retro") ){
		$(this).next(".retro").removeClass('retro').text("");
	}
	if( valor !== ""){
		mostrar_borrar("mostrar");

		if ( campo === "form-correo"){
			email = this.value;
			if ( validateEmail(email) ) {
				this.classList.add("correcto");
				this.classList.remove("error");
			} else {
				this.classList.add("error");
				this.classList.remove("correcto");
				$(this).next().addClass('retro').text("El correo ingresado no es correcto.");
			}
		} else {
			this.classList.add("correcto");
			this.classList.remove("error");
		}

	} else {
		if (campo !== "form-correo") {
			this.classList.add("error");
			this.classList.remove("correcto");
		}
		$(this).next().addClass('retro').text("Este campo es requerido.");
	}

	// Checar si está el mensaje de alerta, y si ya están todos los campos, y ya tienen valor, desaparece la alerta
	if( $('.js-mensaje').html('<p>Por favor completa todos los campos, son requeridos.</p>') )
	{
		if( ( campo === "form-correo" || campo === "form-telefono" ) && valor !== ""  )
		{
			$('.js-mensaje').removeClass('faltante enviando exito').html('');
		}
	}
}

function btn_enviar ()
{
	var js_enviar = document.querySelector('.js-enviar');
	if (js_enviar) {
		js_enviar.onclick = function ()
		{
			enviando();
		};
	}
}

$('#formulario').submit(function(){
	return false;
});

var js_input = document.querySelector('.js-input');
if (js_input) {
	js_input.onchange = function ()
	{
		validar();
	};
}

var js_enviar = document.querySelector('.js-enviar');
if (js_enviar) {
	js_enviar.onclick = function ()
	{
		enviando();
	};
}
var js_borrar = document.querySelector('.js-borrar');
if (js_borrar) {
	js_borrar.onclick = function ()
	{
		borrar_form();
	};
}

btn_enviar();