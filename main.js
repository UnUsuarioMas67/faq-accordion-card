let questionContainers = document.getElementsByClassName("accordion_question-answer");

for (i = 0; i < questionContainers.length; i++) {
	let element = questionContainers[i];
	let question = element.getElementsByClassName("question")[0];

	question.addEventListener("click", () => {
		if (!element.classList.contains("active")) {
			element.classList.add("active");
		} else {
			element.classList.remove("active");
		}
	});
}
