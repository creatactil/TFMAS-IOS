function cargaweb(){

  
  	$.ajax({
		type: "GET",
		url: 'http://apptfmas.creatactil.com/php/cargaweb.php',
		dataType: "text",
		data: {},
		success:  function(data){
						  
						 var web = data;
						$(".web").prop("href", web);
						
							
				
						  
						 }//fin function
		}); //fin ajax
		
		

		
}// fin globo		

