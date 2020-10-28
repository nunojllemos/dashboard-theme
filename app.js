// elements
const switchButton = document.querySelector(".switch");
const switchCircle = document.querySelector(".switch-circle");
const theme = document.querySelector(".theme-name");
const body = document.querySelector("body");
const divColor = document.querySelector(".color");
const title = document.querySelector("h1");
const cardsBig = document.querySelectorAll(".card-big");
const statsBig = document.querySelectorAll(".number");
const cardsSmall = document.querySelectorAll(".card-small");
const statsSmall = document.querySelectorAll(".number-stats");

// variables
isDark = true;
const lightMode = {
	name: "Light Mode",
	background: "white",
	topDiv: "#f6f8ff",
	text: "hsl(228, 12%, 44%)",
	card: "hsl(227, 47%, 96%)",
	darkText: "hsl(230, 17%, 14%)",
};
const darkMode = {
	name: "Dark Mode",
	background: "hsl(230, 17%, 14%)",
	topDiv: "hsl(232, 20%, 17%)",
	text: "hsl(228, 34%, 66%)",
	card: "hsl(228, 28%, 20%)",
	lightText: "white",
};

// events
switchButton.addEventListener("click", () => {
	toggleLeft(switchCircle);
	if (!isDark) {
		theme.innerText = lightMode.name;
		theme.style.color = lightMode.darkText;
		switchButton.style.backgroundColor = "hsl(230, 22%, 74%)";
		switchButton.style.backgroundImage = "none";
		switchCircle.style.backgroundColor = lightMode.topDiv;
		body.style.backgroundColor = lightMode.background;
		body.style.color = lightMode.text;
		divColor.style.backgroundColor = lightMode.topDiv;
		title.style.color = lightMode.darkText;
		cardsBig.forEach((card) => {
			card.style.backgroundColor = lightMode.card;
		});
		statsBig.forEach((number) => {
			number.style.color = lightMode.darkText;
		});
		cardsSmall.forEach((card) => {
			card.style.backgroundColor = lightMode.card;
		});
		statsSmall.forEach((number) => {
			number.style.color = lightMode.darkText;
		});
	} else {
		theme.innerText = "Dark Mode";
		theme.style.color = darkMode.lightText;
		switchButton.style.backgroundImage =
			"linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
		switchCircle.style.backgroundColor = darkMode.topDiv;
		body.style.backgroundColor = darkMode.background;
		body.style.color = darkMode.text;
		divColor.style.backgroundColor = darkMode.topDiv;
		title.style.color = darkMode.lightText;
		cardsBig.forEach((card) => {
			card.style.backgroundColor = darkMode.card;
		});
		statsBig.forEach((number) => {
			number.style.color = darkMode.lightText;
		});
		cardsSmall.forEach((card) => {
			card.style.backgroundColor = darkMode.card;
		});
		statsSmall.forEach((number) => {
			number.style.color = darkMode.lightText;
		});
	}
});

// functions
const toggleLeft = (element) => {
	if (isDark) {
		element.style.left = "20px";
		isDark = false;
	} else {
		element.style.left = "0";
		isDark = true;
	}
};
