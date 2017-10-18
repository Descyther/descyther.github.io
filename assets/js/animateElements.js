document.addEventListener("DOMContentLoaded", handleDocumentLoad); /* //you can call the handleDocumentLoad part anything as it is an ID */

function handleDocumentLoad()
{
	(function() {

		"use strict";

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		
		toggle.addEventListener( "click", function(e) {
		e.preventDefault();
		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	});
	}
	})();
	
	
	
	

	
}