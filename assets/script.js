const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imagesPath = "/assets/images/slideshow/";

document.querySelector(".arrow_left").addEventListener("click", previous)
document.querySelector(".arrow_right").addEventListener("click", next)

let currentPosition = 0;
setValues();

function previous() {
	currentPosition = previousIndex(currentPosition, slides.length)
    console.log(currentPosition);
	setValues();
}

function previousIndex(currentPosition, length) {
 	if (length === 0) return 0;
    return (currentPosition - 1 + length) % length;
}

function next() {
	currentPosition = nextIndex(currentPosition, slides.length)
    console.log(currentPosition);
	setValues();
}

function nextIndex(currentPosition, length) {
	if (length === 0) return 0;
    return (currentPosition + 1) % length;
}

function setPosition(position) {
	currentPosition = position;
	setValues();
}

function setValues(){
	let image = document.querySelector(".banner-img");
	image.src = imagesPath + slides[currentPosition].image;

	let text = document.querySelector("#banner p");
	text.innerHTML = slides[currentPosition].tagLine;

	let allDot = document.querySelectorAll(".dots .dot");
	allDot.forEach((elem, index) => {

		elem.className = "dot";
		if (index === currentPosition) {
			elem.className += " dot_selected";
		}
	})
}