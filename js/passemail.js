function passEmail(){
	
	var xusuario = $("#usuario").val();
	
	
	if(xusuario == ""){
		
		alert("Escriba su correo eléctronico y presione He olvidado mi contraseña");
		$("#usuario").focus();
		return false;
		
			
	}else{
	
	$.ajax({
		url: 'http://apptfmas.creatactil.com/php/passemail.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {usuario: xusuario},
		error: function() {
       	 
		 	
				alert("Correo incorrecto");
		
		
   		},
		success: function(data, response){

			if (response == 'success'){
    
			$.each(data, function(i,item){
			
			
				alert("Se le ha enviado los datos a su correo electrónico");
			
				
				
								
			});
			}
		
		},
		
	});	
		}

}


function passEmail2(){
	
	var xusuario2 = $("#usuario2").val();
	
	
	if(xusuario2 == ""){
		
		alert("Enter your Email and press I forgot my password");
		$("#usuario2").focus();
		return false;
		
			
	}else{
	
	$.ajax({
		url: 'http://apptfmas.creatactil.com/php/passemail.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {usuario: xusuario2},
		error: function() {
       	 
		 	alert("Bad mail");
					
		
   		},
		success: function(data, response){

			if (response == 'success'){
    
			$.each(data, function(i,item){
			
			alert("It sent you the data to your email");
								
				
								
			});
			}
		
		},
		
	});	
		}

}


				
				
				
				