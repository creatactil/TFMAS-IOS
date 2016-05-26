function crearListaNovedades() {
				
		//$.mobile.changePage("#page1", {transition: "fade"}, true, true);
	
		$('#lista-novedades').empty();
        $("#carga23-novedades").show();
		                 
						
		$.ajax({
		url: 'http://apptfmas.creatactil.com/php/listanovedades.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
	
			var registro = item.registro;
            //var codigo = item.codigo;
			var estado = item.estado;
			var id_aux = item.id_aux;
			var numero = item.codigo;
			
			$('#idn_'+index).remove();
			
			var colorfecha = "#000000";
				
			estado = 0;
			if(estado==0){
				var tema = "#000000";
				var listo = "#lista-novedades";
				//color:#BCBCBC;
				}else{	
				var tema = "#A4A4A4";
				var listo = "#lista-novedades";}
			
			if(item.enlace == ''){
				var enlace = "recursos/img-noticia-default.png"
			}else{
				var enlace = "http://tfmas.creatactil.com/files/"+item.enlace
			}
					
			$(listo).append(			
		
       		'<li class="ui-li-has-alt ui-li-has-thumb" style="height: 80px"><a href="#" class="ui-btn" onclick="changePage(idn_' + index + '), contador(\''+registro+'\');" style="height: 80px;padding: 0px;margin: 0;border: solid 1px silver;" >'+
			
			'<div style="margin-top: 5px;margin-left: 5px;background-image:url(\''+enlace+'\');width:70px;height:70px;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;"></div>'+
			
		    '<p style="margin-left:80px;margin-right:5px;margin-top:-70px;font-weight:bold;font-size:12px;color:'+tema+';white-space: normal;max-height: 56px;" >'+item.titulo+'</p>'+
		
		    '<p style="margin-left:80px; margin-top:-5px; padding:0; color:'+colorfecha+'; font-size: 0.7em ">'+item.fecha+'</p>'+
		
    	    '</li>'
			
			);

			if(localStorage.idioma=='en') {var noticia = 'News';}else{var noticia = 'Noticia';}
			if($(window).width()>$(window).height()) {var anchoNoticia = 'width:60%';}else{var anchoNoticia = '';}
			
			/*Pagina dinamica*/
		    content = 
			'<div data-role="page"  id="idn_' + index + '" data-url="idn_' + index + '" data-theme="a" >' +	
			'<div style="height:20px; visibility:hidden"></div>'+
			'<div data-role="header" data-theme="a">' + 
			'<a onClick="inicio()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
			'<h1 style="margin: 0 15%">' + noticia + '</h1>' +
			'</div>' +
			'<div data-role="content" id="contenido-novedades" style="'+anchoNoticia+' ;margin: auto;">' +
			'<p style="margin:-1em; padding:0;">' +
            '<div data-role="fieldcontain" class="result" >' +
            '<img src="'+enlace+'" style="width: 100%;">'+
            '<p style="margin:0; padding:0; color:#000; font-size: 14px; font-weight: bold; margin-top: 15px">'+item.titulo+'</p>'+
            '<p style="margin:0; padding:0; color:#000; font-size: 0.9em ">'+item.fecha+'</p>'+
			'<p>'+ item.texto + '</p>' +
            '</div>' +								  
            '</p>' +							  
			'</div>';
			
			
			$('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga23-novedades").hide(); 
		}
		
		});
			
			
		$('#lista-novedades').listview('refresh', true);
			
}
 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
//Añade al contador de mensaje
function contador(registro){
	
	var registro3 = registro;
	var xnumero3 = localStorage.numero;
	
	
	$.ajax({
		url: 'http://apptfmas.creatactil.com/php/contador.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {numero: xnumero3, registro: registro3},
		success: function(data){}
		
		});
	//modificaEstado(registro3);
	//globo();
}
