function crearLista() {
				
    	//var xnumero = localStorage.numero;
		$.mobile.changePage("#page4", {transition: "fade"}, true, true);
	
		$('#page4 ul').empty();
        $("#carga23").show();
		                 
						
		$.ajax({
		url: 'http://apptfmas.creatactil.com/php/listamensajes.php',
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
			
			$('#id_'+index).remove();
			
			var colorfecha = "#000000";
				
			estado = 0;
			if(estado==0){
				var tema = "#000000";
				var listo = "#lista";
				//color:#BCBCBC;
				}else{	
				var tema = "#A4A4A4";
				var listo = "#lista";}
			
			if(item.enlace == ''){
				var enlace = "recursos/img-noticia-default.png"
			}else{
				var enlace = "http://tfmas.creatactil.com/files/"+item.enlace
			}
					
			$(listo).append(			
		
       		'<li class="ui-li-has-alt ui-li-has-thumb" style="height: 80px"><a href="#" class="ui-btn" onclick="changePage(id_' + index + '), contador(\''+registro+'\');" style="height: 80px;padding: 0px;margin: 0;border: solid 1px silver;" >'+
			
			//'<img src="'+enlace+'" class="ui-li-thumb" style="margin-top: 5px;margin-left: 5px;height: 50px;border-radius: 50%;">'+
			
			'<div style="margin-top: 5px;margin-left: 5px;background-image:url(\''+enlace+'\');width:70px;height:70px;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;"></div>'+
			
		    '<p style="margin-left:80px;margin-right:5px;margin-top:-70px;font-weight:bold;font-size:12px;color:'+tema+';white-space: normal;max-height: 56px;" >'+item.titulo+'</p>'+
		
		    '<p style="margin-left:80px; margin-top:-5px; padding:0; color:'+colorfecha+'; font-size: 0.7em ">'+item.fecha+'</p>'+
		
            //'<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-b" onClick="borrarMensaje(\''+item.id_aux+'\' )" style="height: 62px;"></a>'+
    	    '</li>'
			
			);

			if(localStorage.idioma=='en') {var noticia = 'News';}else{var noticia = 'Noticia';}
			if($(window).width()>$(window).height()) {var anchoNoticia = 'width:60%';}else{var anchoNoticia = '';}
			
			/*Pagina dinamica*/
		    content = 
			'<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="a" >' +
			'<div style="height:20px; visibility:hidden"></div>'+
			'<div data-role="header" data-theme="a">' + 
			'<a href="#page4" onClick="crearLista()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
			'<h1 style="margin: 0 15%">' + noticia + '</h1>' +
			'</div>' +
			'<div data-role="content" id="contenido" style="'+anchoNoticia+' ;margin: auto;">' +
			'<p style="margin:-1em; padding:0;">' +
            '<div data-role="fieldcontain" class="result" >' +
            '<img src="'+enlace+'" style="width: 100%;">'+
            '<p style="margin:0; padding:0; color:#000; font-size: 14px; font-weight: bold; margin-top: 15px">'+item.titulo+'</p>'+
            '<p style="margin:0; padding:0; color:#000; font-size: 0.9em ">'+item.fecha+'</p>'+
			'<p>'+ item.texto + '</p>' +
			//'<p><strong>'+item.nombre+'</strong></p>'+
            //'<a href="" onclick="descargarArchivo(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
			//'<br>'+
			//'<a href="#page11" style="color:#dea300"  data-rel="pop" onClick="textofirma(\''+item.registro+'\' ), textofirma2(\''+item.titulo+'\' )">'+item.firma+'</a>'+
			//'<br>'+
			//'<center>'+
			//'<a id="favorito" data-role="button" data-icon="star" data-inline="true" onclick="favorito(\''+id_aux+'\');" data-theme="a">Añadir a Favorito</a>'+
			//'</center>'+
            '</div>' +								  
            '</p>' +							  
			'</div>';
			
			
			$('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga23").hide(); 
		}
		
		});
	
			
		  	$('#lista').listview('refresh', true);
			$('#lista1').listview('refresh', true);
			//globo();
			
    } 
	 



 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
	
function borrar1(id_aux){
	
	var elidaux = id_aux; 
	$("#id_aux3").val(elidaux);	
	
	}
	
//Camabia el estado del mensaje de no leido a leido
/* function modificaEstado(registro){
	
	var registro2 = registro;
	var xnumero2 = localStorage.numero;
	
	
	$.ajax({
		url: 'http://apptfmas.creatactil.com/php/modificaestado.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {numero: xnumero2, registro: registro2},
		success: function(data){}
		
		});
		globo();
	} */
	
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
	

function textofirma(registro){
	
	$("#registrofirma").text(registro);

	}
	
function textofirma2(nombre){

	$("#titulofirma").text(nombre);
	
	}
	
function textofirma3(cial){
	
	$("#cialfirma").text(cial);

	}
	
function textofirma4(codigo){
	
	$("#codigofirma").text(codigo);

	}
	
	//DESCARGA DE ARCHIVO AL MOVIL FILE TRANSFER
function descargarArchivo(nombre){
	
	            
                var server = "http://creatactil.com/tfmas/web/files/";
                var filename = nombre;
                var uri = encodeURI(server + filename);
                
				abrirfichero(uri);

                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onErrorCallback);

                function onFileSystemSuccess(fileSystem) {
                    
                    // alert("got filesystem");

                    fileSystem.root.getDirectory('TFMAS',
                        { create:true },
                        transferFile,
                        onErrorCallback
                    );

                }                

                // console.log(uri);
                //alert("here");

                function transferFile(dir){
                    
                    // alert("got dir");
                    console.log(dir.toURL());
                    console.log(uri);
					
					   //modificacion por path  
					
                    path = dir.toURL() + '/' + filename;//AQUI ES EL CAMBIO de fullpath por toURL()
					
                    var fileTransfer = new FileTransfer();

                    fileTransfer.download(
                        uri,
                        path,
                        function(entry) {
                            console.log("download complete: " + entry.toURL());
                                                
                        },
                        function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code " + error.code);
                        }
                    );
               
	

            }

            // a generic error callback function
            function onErrorCallback(error) {
                alert("Error!" + error.code);
                console.log(error);
            }
 

}

function abrirfichero(ruta3){
	
	
	console.log(ruta3);
	window.open (ruta3, '_system', 'location=yes,closebuttoncaption=done,enableViewportScale=yes');
	
	
	}
