const collapsibles = function() {
	let elements = document.getElementsByClassName("collapser");

	for(element of elements) {
		element.addEventListener("click", function() {
			this.classList.toggle("active");
			let content = this.nextElementSibling;

			if(this.innerHTML.match(/.{1,20}\+/)) this.innerHTML = this.innerHTML.replace(/ \+ /, " - ");
			else if(this.innerHTML.match(/.{1,20}-/)) this.innerHTML = this.innerHTML.replace(/ - /, " + ");

			if(content.style.maxHeight) content.style.maxHeight = null;
			else content.style.maxHeight = content.scrollHeight + "px";
		});

	}
}

collapsibles();
