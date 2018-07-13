// alert('hola');
$(function() {
	// alert('dom loaded');

	$('#formRegistro').on('submit', function(e) {
		

		// e.preventDefault();
		// return;
		var algo_fallo = false;
		var mensaje_error = '';
		
		if ( $('[name=nombre]').val() == '' ) {
			algo_fallo = true;
			mensaje_error = mensaje_error + '- Debes llenar tu nombre\n';
		} 

		if ($('[name=clave]').val() == '') {
			algo_fallo = true;
			mensaje_error = mensaje_error + '- Debes ingresar una clave\n';
		} 

		if ($('[name=clave]').val() != $('[name=repite_clave]').val()) {
			algo_fallo = true;
			mensaje_error = mensaje_error + '- las claves no coinciden\n';
		} 

		if ( ! $('[name=acepto_terminos]').is(':checked') ) {
			algo_fallo = true;
			mensaje_error = mensaje_error + '- Debes aceptar los terminos\n';
		}




		if (algo_fallo) {

			swal("", 'Debes solucionar los siguientes errores: \n\n' + mensaje_error, "error");
			e.preventDefault();
			return;
		}

		swal('Todo bien', 'se envio tu fromualrio corecatamente', 'success');
		e.preventDefault();


		return;
		//Esto de abajo no se ejecuta, era una prueba iniciarl

		
		if ( $('[name=clave]').val() == '' ) {
			//Ejectura esto si la condicion es true
			alert('Debes llenar la clave');
			e.preventDefault();
			return;
		}

		if ($('[name=clave]').val() != $('[name=repite_clave]').val()) {
			// Esta erroneo
			alert('Las contraseñas no conciden loji');
			e.preventDefault();
			return;
		} 

		if ( ! $('[name=acepto_terminos]').is(':checked') ) {
			//Ejectura esto si la condicion es true
			alert('Debes aceptar los terminos');
			e.preventDefault();
			return;
		}

		
		
	})
})