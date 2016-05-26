function registrarColegiado() {

               	
		//var xnumero = $("#numero").val().toLowerCase();
		//var xapellidos = $("#apellidos").val().toUpperCase();
		//var xtelefono = $("#telefono").val();
		//var xisla = $("#isla").val();		
		var xnombre = $("#nombre").val().toUpperCase();		
		var xcorreo = $("#correo").val();
		var xpa1 = $("#pa1").val();
		var xregid = $("#regId").val();
		//alert(xnombre);
		
		var xcorreo_anterior=localStorage.correo;
		var xpass_anterior=localStorage.pass;
		var xnombre_anterior=localStorage.nombre;

		if(xnombre == ""){
		alert("Escriba su nombre");
		$('#nombre').focus();
		return false;
		
		}else if(xcorreo == ""){
		alert("Escriba su correo");
		$('#correo').focus();
		return false;
		
		}else if(xpa1 == ""){
		alert("Escriba su contraseña");
		$('#pa1').focus();
		return false;
		
		}else		

		   $.ajax({
           type: "POST",
           url: "http://apptfmas.creatactil.com/php/registrocolegiado.php",
           data: ({nombre: xnombre, correo: xcorreo, regid: xregid, pa1: xpa1, correo_anterior: xcorreo_anterior, pass_anterior: xpass_anterior, nombre_anterior: xnombre_anterior}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
					function onSuccess(data)
					{
							
					alert(data);
					
					if (data=="Datos guardados"){
					
						localStorage.correo = xcorreo;
						localStorage.pass = xpa1;
						localStorage.nombre = xnombre;
						//localStorage.numero = xnumero;				
						//localStorage.apellidos = xapellidos;
						//localStorage.telefono = xtelefono;
						//localStorage.isla = xisla;
					
						inicio();
						//globo();
					}
					
					if (data=="Datos actualizados"){
					
						localStorage.correo = xcorreo;
						localStorage.pass = xpa1;
						localStorage.nombre = xnombre;
					
						inicio();
						//globo();
					}
					}//fin onSuccess
			
				
		
  }
  
  
 function registrarColegiado2() {

               	
		//var xnumero = $("#numero").val().toLowerCase();
		//var xapellidos = $("#apellidos").val().toUpperCase();
		//var xtelefono = $("#telefono").val();
		//var xisla = $("#isla").val();		
		var xnombre2 = $("#nombre2").val().toUpperCase();		
		var xcorreo2 = $("#correo2").val();
		var xpa12 = $("#pa12").val();
		var xregid = $("#regId").val();
		
				
		var xcorreo_anterior = localStorage.correo;
		var xpass_anterior = localStorage.pass;
		var xnombre_anterior = localStorage.nombre;
		
			
		if(xnombre2 == ""){
		alert("Enter your name");
		$('#nombre2').focus();
		return false;
		
		}else if(xcorreo2 == ""){
		alert("Enter your email");
		$('#correo2').focus();
		return false;
		
		}else if(xpa12 == ""){
		alert("Enter your password");
		$('#pa12').focus();
		return false;
		
		}else		

		   $.ajax({
           type: "POST",
           url: "http://apptfmas.creatactil.com/php/registrocolegiado.php",
           data: ({nombre: xnombre2, correo: xcorreo2, regid: xregid, pa1: xpa12, correo_anterior: xcorreo_anterior, pass_anterior: xpass_anterior, nombre_anterior: xnombre_anterior}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
					function onSuccess(data)
					{
					
					if(data == "Datos actualizados"){
						alert("Updated Data");
					
					}else if (data == "No se permite modificar el email, solo el Nombre y/o la contraseña"){
						alert("No to modify the email, only the name and/or password");
					
					}else if(data == "Ya existe un usuario registrado con ese email."){
						alert("Already a registered user with that email exists.");
						
					}else if(data == "Datos guardados"){
						alert("Saved Data");
					}
					
					
					if (data=="Datos guardados"){
					
						localStorage.correo = xcorreo2;
						localStorage.pass = xpa12;
						localStorage.nombre = xnombre2;
						//localStorage.numero = xnumero;				
						//localStorage.apellidos = xapellidos;
						//localStorage.telefono = xtelefono;
						//localStorage.isla = xisla;
					
						inicio();
						//globo();
					}
					
					if (data=="Datos actualizados"){
					
						localStorage.correo = xcorreo2;
						localStorage.pass = xpa12;
						localStorage.nombre = xnombre2;
					
						inicio();
						//globo();
					}
					}//fin onSuccess
			
				
		
  }