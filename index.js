//DEFINE NECESSARY FORM VARIABLES
const titleTag = document.querySelector("title");
const sectionA = document.querySelector(".sectionA");
const sectionB = document.querySelector(".sectionB");
const sectionC = document.querySelector(".sectionC");
const report = document.querySelector(".report");
const review = document.querySelector(".review");
const date2 = document.querySelector(".date2");
const submission = document.querySelector(".submission");
const progressBar = document.querySelector(".progressBar");
const progressBarFilled = document.querySelector(".progressBarFilled");
const nextButton = document.querySelector("button.next");
const sectionInputsA = document.querySelectorAll(".myInputA");
const sectionInputsB = document.querySelectorAll(".myInputB");
const sectionInputsC = document.querySelectorAll(".myInputC");
const checkerA = document.querySelectorAll(".requiredA");
const checkerB = document.querySelectorAll(".requiredB");
const checkerC = document.querySelectorAll(".requiredC");

//USED FUNCTIONS
const Add = (DOM, classname) => {
	return DOM?.classList.add(classname);
};
const Remove = (DOM, classname) => {
	return DOM?.classList.remove(classname);
};
const Inner = (DOM, text) => {
	return (DOM.innerHTML = text);
};

//REMOVE LOADER ON PAGE LOAD
$(window).on("load", function () {
	var loader = $("#loadingPageWrapper");
	var spinner = $(".spinner");
	var body = $(".noscroll");
	spinner.delay(2500).fadeOut();
	loader.delay(2900).fadeOut("slow");
	setTimeout(() => {
		body.removeAttr("class");
		Inner(titleTag, "Form | Section A");
	}, 2950);
});

//NAVIGATING BACK THE PAGE
const goBack = () => {
	if (sectionA.classList.contains("translated") === true) {
		return;
	} else if (sectionB.classList.contains("translated") === true) {
		Remove(sectionB, "translated");
		Add(sectionA, "translated");
		Remove(progressBar, "progressing");
		Inner(progressBar, "0%");
		Remove(progressBarFilled, "progress1");
		Inner(titleTag, "Form | Section A");
	} else if (sectionC.classList.contains("translated") === true) {
		Remove(sectionC, "translated");
		Add(sectionB, "translated");
		Inner(progressBar, "30%");
		Remove(progressBarFilled, "progress2");
		Inner(titleTag, "Form | Section B");
	} else if (report.classList.contains("translated") === true) {
		Remove(report, "translated");
		Add(sectionC, "translated");
		Inner(progressBar, "50%");
		Remove(progressBarFilled, "progress3");
		Inner(titleTag, "Form | Section C");
	} else if (review.classList.contains("translated") === true) {
		Remove(review, "translated");
		Add(report, "translated");
		Inner(progressBar, "70%");
		Remove(progressBarFilled, "progress4");
		Inner(titleTag, "Form | Report");
	} else if (date2.classList.contains("translated") === true) {
		Remove(date2, "translated");
		Add(review, "translated");
		Inner(progressBar, "80%");
		Remove(progressBarFilled, "progress5");
		Inner(progressBar, "Form | Review");
	} else if (submission.classList.contains("translated") === true) {
		Remove(submission, "translated");
		Add(date2, "translated");
		progressBar.style.display = "inline";
		Inner(progressBar, "90%");
		Inner(progressBarFilled, "");
		Remove(progressBarFilled, "progress6");
		Remove(progressBarFilled, "progress7");
		Inner(nextButton, "Next");
		Inner(titleTag, "Form | Date2");
	}
};
//NAVIGATING FORWARD THE PAGE & VALIDATION
const goNext = () => {
	if (sectionA.classList.contains("translated") === true) {
		let i = 0;
		while (i < sectionInputsA.length) {
			const fillIn = sectionInputsA[i];
			if (fillIn.value == " " || fillIn.value == "") {
				Add(checkerA[i], "display");
			} else if (fillIn.value != "" || fillIn.value != " ") {
				Remove(checkerA[i], "display");
			} else {
				return;
			}
			i++;
		}
		let u = 0;
		while (u < sectionInputsA.length) {
			const fillIn = sectionInputsA[u];
			const qckCheck = checkerA[u];
			var incompleteVal = fillIn.value.length > 0 && fillIn.value.length < 3;
			if (incompleteVal === true) {
				Inner(qckCheck, "*This Field must be more than 3 characters");
				Add(qckCheck, "display");
			} else if (fillIn.value > 3) {
				Inner(qckCheck, "*This Field is required");
				Remove(qckCheck, "display");
			}
			u++;
		}
		let x = 0;
		while (x < checkerA.length) {
			const spanCheck = checkerA[x];
			const prospect = spanCheck.classList.contains("display") === true;
			if (prospect === true) {
				return false;
			} else if (prospect === false) {
				console.log("No, there are no checks");
			} else {
				return false;
			}
			x++;
		}
		Add(sectionA, "transOut");
		Remove(sectionA, "translated");
		Add(sectionB, "translated");
		Add(progressBar, "progressing");
		Inner(progressBar, "30%");
		Add(progressBarFilled, "progress1");
		Inner(titleTag, "Form | Section B");
	} else if (sectionB.classList.contains("translated") === true) {
		let w = 0;
		while (w < sectionInputsB.length) {
			const fillIn = sectionInputsB[w];
			if (fillIn.value == " " || fillIn.value == "") {
				Add(checkerB[w], "display");
			} else if (fillIn.value != "" || fillIn.value != " ") {
				Remove(checkerB[w], "display");
			} else {
				return;
			}
			w++;
		}
		let v = 0;
		while (v < sectionInputsB.length) {
			const fillIn = sectionInputsB[v];
			const qckCheck = checkerB[v];
			var incompleteVal = fillIn.value.length > 0 && fillIn.value.length < 3;
			if (incompleteVal === true) {
				Inner(qckCheck, "*This Field must be more than 3 characters");
				Add(qckCheck, "display");
			} else if (fillIn.value > 3) {
				Inner(qckCheck, "*This Field is required");
				Remove(qckCheck, "display");
			}
			v++;
		}
		let y = 0;
		while (y < checkerB.length) {
			const spanCheck = checkerB[y];
			const prospect = spanCheck.classList.contains("display") == true;
			if (prospect === true) {
				return false;
			} else if (prospect === false) {
				console.log("No there are checks");
			} else {
				return false;
			}
			y++;
		}
		Add(sectionB, "transOut");
		Remove(sectionB, "translated");
		Add(sectionC, "translated");
		Add(progressBar, "progressing");
		Inner(progressBar, "50%");
		Add(progressBarFilled, "progress2");
		Inner(titleTag, "Form | Section C");
	} else if (sectionC.classList.contains("translated") == true) {
		let h = 0;
		while (h < sectionInputsC.length) {
			const fillIn = sectionInputsC[h];
			if (fillIn.value == " " || fillIn.value == "") {
				Add(checkerC[h], "display");
			} else if (fillIn.value != "" || fillIn.value != " ") {
				Remove(checkerC[h], "display");
			} else {
				return;
			}
			h++;
		}
		let g = 0;
		while (g < sectionInputsC.length) {
			const fillIn = sectionInputsC[g];
			const qckCheck = checkerC[g];
			var incompleteVal = fillIn.value.length > 0 && fillIn.value.length < 3;
			if (incompleteVal === true) {
				Inner(qckCheck, "*This Field must be more than 3 characters");
				Add(qckCheck, "display");
			} else if (fillIn.value > 3) {
				Inner(qckCheck, "*This Field is required");
				Remove(qckCheck, "display");
			}
			g++;
		}
		let j = 0;
		while (j < checkerC.length) {
			const spanCheck = checkerC[j];
			const prospect = spanCheck.classList.contains("display") === true;
			if (prospect === true) {
				return false;
			} else if (prospect === false) {
				console.log("No there are checks");
			} else {
				return false;
			}
			j++;
		}
		Add(sectionC, "transOut");
		Remove(sectionC, "translated");
		Add(report, "translated");
		Add(progressBar, "progressing");
		Inner(progressBar, "70%");
		Add(progressBarFilled, "progress3");
		titleTag.innerHTML = "Form | Report";
	} else if (report.classList.contains("translated") === true) {
		Add(report, "transOut");
		Remove(report, "translated");
		Add(review, "translated");
		Add(progressBar, "progressing");
		Inner(progressBar, "80%");
		Add(progressBarFilled, "progress4");
		Inner(titleTag, "Form | Review");
	} else if (review.classList.contains("translated") === true) {
		review.classList.add("transOut");
		Remove(review, "translated");
		Add(date2, "translated");
		Add(progressBar, "progressing");
		Inner(progressBar, "90%");
		Add(progressBarFilled, "progress5");
		Inner(titleTag, "Form | Date2");
	} else if (date2.classList.contains("translated") === true) {
		Add(date2, "transOut");
		Remove(date2, "translated");
		Add(submission, "translated");
		Add(progressBar, "progressing");
		Inner(progressBar, "95%");
		Add(progressBarFilled, "progress6");
		Inner(nextButton, "Submit");
		Inner(titleTag, "Form | Submission");
	} else if (submission.classList.contains("translated") === true) {
		Add(submission, "translated");
		progressBar.style.display = "none";
		Add(progressBarFilled, "progress7");
		Inner(progressBarFilled, "100%");
		Inner(nextButton, "Submitted");
	}
};
//DATE & TIME INPUT FUNCTION
const dateInput = (dateInput) => {
	const Input = dateInput;
	const todayDate = new Date();
	var day = todayDate.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	var month = todayDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var year = todayDate.getFullYear();
	Input.value = `${year}-${month}-${day}`;
};
const timeInput = (timeInput) => {
	const Input = timeInput;
	const todayDate = new Date();
	var hour = todayDate.getHours();
	if (hour < 10) {
		hour = "0" + hour;
	}
	var minute = todayDate.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	}
	var seconds = todayDate.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	Input.value = `${hour}:${minute}:${seconds}`;
};

//SUBMIT BUTTONS SWITCHING
const checkBoxparaOn = $(".switchValueOn");
const checkBoxparaOff = $(".switchValueOff");
const checkBoxparaOn1 = $(".switchValueOn1");
const checkBoxparaOff1 = $(".switchValueOff1");
const changeVa = () => {
	const classCheckOn = checkBoxparaOn[0].classList.contains("show");
	const classCheckOff = checkBoxparaOff[0].classList.contains("noshow");
	if (classCheckOn === true && classCheckOff === true) {
		checkBoxparaOn.toggleClass("show");
		checkBoxparaOn.toggleClass("noshow");
		checkBoxparaOff.toggleClass("noshow");
		checkBoxparaOff.toggleClass("show");
	} else {
		checkBoxparaOn.toggleClass("show");
		checkBoxparaOn.toggleClass("noshow");
		checkBoxparaOff.toggleClass("show");
		checkBoxparaOff.toggleClass("noshow");
	}
};
const changeVal = () => {
	const classCheckOn = checkBoxparaOn1[0].classList.contains("show");
	const classCheckOff = checkBoxparaOff1[0].classList.contains("noshow");
	if (classCheckOn === true && classCheckOff === true) {
		checkBoxparaOn1.toggleClass("show");
		checkBoxparaOn1.toggleClass("noshow");
		checkBoxparaOff1.toggleClass("noshow");
		checkBoxparaOff1.toggleClass("show");
	} else {
		checkBoxparaOn1.toggleClass("show");
		checkBoxparaOn1.toggleClass("noshow");
		checkBoxparaOff1.toggleClass("show");
		checkBoxparaOff1.toggleClass("noshow");
	}
};
