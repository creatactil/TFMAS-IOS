function init(){
	
	//var xnumero = localStorage.numero;
	var xcorreo = localStorage.correo;
	var xidioma = localStorage.idioma;
	
	$("#usuario").val(localStorage.correo);
	$("#pa2").val(localStorage.pass);
	//$("#pa2").focus();
	
	
	
	if ((typeof xcorreo == 'undefined') || (xcorreo == "")){
		
			if (xidioma == 'en') {
				$.mobile.changePage("#pagina0en", {transition: "slide"}, true, true);
			
			}else{
				$.mobile.changePage("#pagina0", {transition: "slide"}, true, true);
			}
		
	}else{
		inicio();
		comprobarid();
	}
	}
	

