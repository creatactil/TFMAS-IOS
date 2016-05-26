function inicio(){
	//globo();
	comprobarid();
	
	if (localStorage.idioma == 'en') {
		$.mobile.changePage("#page1");
		
		$("#reg").text("Sign Up");
		$("#pro").text("Programme");
		$("#not").text("News");
		$("#str").text("Streaming");
		$("#pat").text("Sponsorship");
		$("#red").text("Web and Social networks");
		$("#men").text("Close menu");
		
		$("#ult").text("Last News");
		$("#texto1").text("Congress still alive");
		$("#texto2").text("International Tenerife + Sostenible");
		$("#titulo-noticias").text("News");
		
		
		
		}else{
		$.mobile.changePage("#page1");
		
		$("#reg").text("Registro");
		$("#pro").text("Programa");
		$("#not").text("Noticias");
		$("#str").text("Streaming");
		$("#pat").text("Patrocinadores");
		$("#red").text("Web y Redes sociales");
		$("#men").text("Cerrar menú");
		
		$("#ult").text("Últimas Noticias");
		$("#texto1").text("Sigue en vivo el Congreso");
		$("#texto2").text("Internacional Tenerife + Sostenible");
		$("#titulo-noticias").text("Noticias");	
			
		
		}
	
	
	
	
	
	
	
	//window.location.reload(true);
	crearListaNovedades();
}