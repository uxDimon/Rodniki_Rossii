// Слайдер https://www.npmjs.com/package/tiny-slider
if (document.querySelector(".slider-main")) {
	var injury = tns({
		container: ".slider-main",
		items: 1,
		gutter: 20,
		mouseDrag: true,
		speed: 400,
		controls: false,
		autoplay: true,
		autoplayButtonOutput: false,
	});
}
