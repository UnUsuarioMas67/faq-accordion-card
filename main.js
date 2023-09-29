let questionContainers = document.getElementsByClassName("accordion_question-answer");

for (i = 0; i < questionContainers.length; i++) {
	let element = questionContainers[i];
	let question = element.getElementsByClassName("question")[0];

	question.addEventListener("click", () => {
		openAccordion(element)
	});
}

function openAccordion(accordionElement) {
	if (accordionElement.classList.contains("active")) {
		accordionElement.classList.remove("active")
		return
	}

	accordionElement.classList.add("active")
	closeOtherAccordions(accordionElement)
}

function closeOtherAccordions(accordionElement) {
	for (i = 0; i < questionContainers.length; i++) {
		let otherElement = questionContainers[i]

		if (otherElement != accordionElement) {
			otherElement.classList.remove("active")
		}
	}
}