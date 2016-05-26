function cargarPrograma() {
				
		$.mobile.changePage("#page18", {transition: "fade"}, true, true);
	
		//$('#page18 .contenedorPrograma').empty();
        //$("#cargando-tfmas").show();
		
		var altura_iframe = $(window).height() - 109;
		//alert(altura_iframe);
						
		$('.contenedorPrograma').html(

		  '<iframe class="iframe_completo" src="" style="width: 100%; height: '+altura_iframe+'px; border: none;">'+
			'<p>Descargando Programa...</p>'+
		  '</iframe>'
		);
		
		$('.iframe_completo').css({'background-image' : 'url(imagenes/cargando.svg)', 
		                           'background-repeat': 'no-repeat',
								   'background-position-x': 'center',
								   'background-position-y': 'center'});
								   

		if (localStorage.idioma == 'en') {
			$(".iframe_completo").prop('src','http://congresotenerifemassostenible.com/programa/?lang=en');
			$('#titulo-programa').html('Programme');

		}else{
			$(".iframe_completo").prop('src','http://congresotenerifemassostenible.com/programa/');
			$('#titulo-programa').html('Programa');
		}

		//$('.iframe_completo').css({'background-image' : 'none'});
			
}

function cargarPatrocinadores() {
				
		$.mobile.changePage("#page16", {transition: "fade"}, true, true);
	
		//$('#page18 .contenedorPrograma').empty();
        //$("#cargando-tfmas").show();
		
		var altura_iframe = $(window).height() - 109;
		//alert(altura_iframe);
						
		$('.contenedorPatrocinadores').html(

		  '<iframe class="iframe_completo" src="" style="width: 100%; height: '+altura_iframe+'px; border: none;">'+
			'<p>Descargando Programa...</p>'+
		  '</iframe>'
		);
		
		$('.iframe_completo').css({'background-image' : 'url(imagenes/cargando.svg)', 
		                           'background-repeat': 'no-repeat',
								   'background-position-x': 'center',
								   'background-position-y': 'center'});

		$(".iframe_completo").prop('src','http://congresotenerifemassostenible.com/patrocinios/');

		if (localStorage.idioma == 'en') {
			$('#titulo-patrocinadores').html('Sponsorship');

		}else{
			$('#titulo-patrocinadores').html('Patrocinadores');
		}
		
		//$('.iframe_completo').css({'background-image' : 'none'});
			
}


function cargarStreaming() {
				
    	var xcorreo = localStorage.correo;
				
		$.ajax({
		url: 'http://apptfmas.creatactil.com/php/enlacestreaming.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {correo: xcorreo},
		
		success: function(data){			
	   	 
			$.each(data, function(index, item) {
				
				if(item.id == 1) {
					localStorage.enlaceEsp = item.enlace;
				}
				if(item.id == 2) {
					localStorage.enlaceEng = item.enlace;
				}

			});
	
			cargarStreaming2();
		}
		
		});		 
}


function cargarStreaming2() {
				
		$.mobile.changePage("#page17", {transition: "fade"}, true, true);
		
		var ancho_pantalla = $(window).width();
		var alto_pantalla = $(window).height() - 109;
		
		var ratio = 16/9;
		var altura_iframe = ancho_pantalla/ratio;
		
		if(alto_pantalla < altura_iframe){
			
			var ancho_iframe = alto_pantalla*ratio;
			
			$('.contenedorStreaming').html(
	
			  '<iframe class="iframe_streaming" src="" style="width: '+ancho_iframe+'px; height: '+alto_pantalla+'px; border: none;" allowfullscreen>'+
				'<p>Descargando Streaming...</p>'+
			  '</iframe>'
			  
			);				
			
		}else{
			
			$('.contenedorStreaming').html(
	
			  '<iframe class="iframe_streaming" src="" style="width: 100%; height: '+altura_iframe+'px; border: none;" allowfullscreen>'+
				'<p>Descargando Streaming...</p>'+
			  '</iframe>'
			  
			);		
		
		}
		
		$('.iframe_streaming').css({'background-image' : 'url(imagenes/cargando.svg)', 
		                           'background-repeat': 'no-repeat',
								   'background-position-x': 'center',
								   'background-position-y': 'center'});

		if (localStorage.idioma == 'en') {
			//$(".iframe_streaming").prop('src','http://broadcaststreaming.es/tenerifemas_eng.php');
			$(".iframe_streaming").prop('src',localStorage.enlaceEng);

		}else{
			//$(".iframe_streaming").prop('src','http://broadcaststreaming.es/tenerifemas_esp.php');
			$(".iframe_streaming").prop('src',localStorage.enlaceEsp);
		}
		
		
		//$('.iframe_streaming').css({'background-image' : 'none'});
			
}
