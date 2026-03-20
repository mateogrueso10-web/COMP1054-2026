// STEP 6: Nab all the SUMMARY elements
summaryElements = document.querySelectorAll("summary");

// STEP 7: Loop through the element array to add an event listener, and reference a function called closeOpenDetails
summaryElements.forEach(summary => {
	summary.addEventListener("click", closeOpenDetails);
});

// STEP 8a: Create the closeOpenDetails() function
function closeOpenDetails(event) {
	// STEP 8a: Check to see whether the SUMMARY element that was clicked is a child of a DETAILS element that has the "open" attribute
	if (event.target.parentElement.hasAttribute("open")) {
	// STEP 8b: Loop through the summaries array again
		summaryElements.forEach(summary => {
			// STEP 8c: Check to make sure the DETAILS element is not the parent of the SUMMARY that was clicked 
			if (summary.parentElement !== event.target.parentElement) {
				summary.parentElement.removeAttribute("open");
			}
		});
	}
}

// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step
console.log(summaryElements);