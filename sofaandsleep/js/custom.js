// for footer toggle
if (screen.width < 767) { 
 $(document).ready(function(){
      $("#first h3").click(function(){
       $("#first ul").show("slow");
	   $("#second ul").hide("slow");
	   $("#third ul").hide("slow");
	   $("#fourth ul").hide("slow");
	   $("#fifth ul").hide("slow");
      });
	  
	   $("#second h3").click(function(){
        $("#first ul").hide("slow");
	    $("#second ul").show("slow");
	    $("#third ul").hide("slow");
	    $("#fourth ul").hide("slow");
		$("#fifth ul").hide("slow");
      });
	  
	  $("#third h3").click(function(){
        $("#first ul").hide("slow");
	    $("#second ul").hide("slow");
	    $("#third ul").show("slow");
	    $("#fourth ul").hide("slow");
		$("#fifth ul").hide("slow");
      });
	  
	  $("#fourth h3").click(function(){
        $("#first ul").hide("slow");
	    $("#second ul").hide("slow");
	    $("#third ul").hide("slow");
	    $("#fourth ul").show("slow");
		$("#fifth ul").hide("slow");
      });
	  
	  $("#fifth h3").click(function(){
        $("#first ul").hide("slow");
	    $("#second ul").hide("slow");
	    $("#third ul").hide("slow");
	    $("#fourth ul").hide("slow");
		$("#fifth ul").show("slow");
      });
	  
	 });
}