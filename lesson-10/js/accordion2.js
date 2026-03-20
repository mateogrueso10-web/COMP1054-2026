// STEP 6: Nab all the SUMMARY elements
const detailsElements = document.querySelectorAll("details");

// STEP 7: Loop through the element array, and add an event listener for the toggle event
detailsElements.forEach(details => {
	console.log(details);
	details.addEventListener("toggle", (event) => {
		console.log(event);
		// STEP 8a: Check to see whether the DETAILS event that was toggled has the "open" attribute
		if (details.hasAttribute("open")) {
			// STEP 8b: The browser just added the "open" attribute, so this DETAILS element was previously closed
			detailsElements.forEach((detail) => {
				// STEP 8c: If this DETAILS element is NOT the one that was just clicked, close it by removing the "open" attribute
				if (detail !== details) {
					detail.removeAttribute("open");
				}
			});
		}
	});
});
		
	


// This experiment based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
