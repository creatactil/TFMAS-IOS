function mostrarDatos(){
	
	
	if (localStorage.idioma == 'en') {
			$.mobile.changePage("#page2en", {transition: "slide"},
            true,
            true);

		}else{
			$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
		}
	
	
	
	
	
	var vnumero = localStorage.numero;
	var vnombre = localStorage.nombre;
	
	var vcorreo = localStorage.correo;
	var vpass = localStorage.pass;
	
	
	
	
	$("#numero").val(vnumero);
	$("#nombre").val(vnombre);
	$("#nombre2").val(vnombre);
	
	
	$("#correo").val(vcorreo);
	$("#correo2").val(vcorreo);
	
	$("#pa1").val(vpass);
	$("#pa12").val(vpass);
		
	}

