	$(document).ready(function () {
    	var heights = $(".same-height-panel").map(function() {
              return $(this).height();
          }).get(),

          maxHeight = Math.max.apply(null, heights);

          $(".same-height-panel").height(maxHeight);
        });

	window.onload = writeConstants;

	function writeConstants() {
		document.getElementById("addressSHIELD").innerHTML = "SHIELD 2016<br/>301 Foxhall Drive<br/>Lexington, SC 29073";
	}