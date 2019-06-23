function my_select()
  {
  	var x=document.getElementById("select").value;
  	switch(x){
  		case "Load Not Tracking GPS":
  			document.getElementById("load_not_tracking_gps").style.display="block";
  			break;

  		case "Superfile":
  			document.getElementById("super_file").style.display="block";
  			break;
  	}
  	if (x!="") {
  		document.getElementById("select_button").disabled = true;
  		document.getElementById("select").disabled = true;
  	}
  	else{
  		alert("Select the issue dumbass!!!");
  	}

  }

function my_reset()
{
	var x=document.getElementById("select").value;
	if (x=="") {
  		alert("Select the issue dumbass!!!");
  	}
	switch(x){
  		case "Load Not Tracking GPS":
  			document.getElementById("load_not_tracking_gps").style.display="none";
  			break;

  		case "Superfile":
  			document.getElementById("super_file").style.display="none";
  			break;
  	}

  	document.getElementById("select").value="";
  	document.getElementById("select_button").disabled = false;
  	document.getElementById("select").disabled = false;
}
