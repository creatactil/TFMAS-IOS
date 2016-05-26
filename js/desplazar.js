$(document).on("pagecreate","#page1",function(){
	  
	  $("#page1").on("swipeleft",function(){
	   lasesion();
	   globo();
	  });                       

	$("#page4").on("swiperight",function(){
	   $.mobile.changePage("#page1", {transition: "slide", reverse: true });
	   globo();
	  }); 

	$("#page4").on("swipeleft",function(){
	   listafavorito()
	   globo();
	  });
	$("#page14").on("swiperight",function(){
	   $.mobile.changePage("#page4", {transition: "slide", reverse: true });
	   globo();
	  });
	

	$("#page14").on("swipeleft",function(){
	   listaweb()
	   globo();
	  });
	$("#page6").on("swiperight",function(){
	   $.mobile.changePage("#page14", {transition: "slide", reverse: true });
	   globo();
	  });

});