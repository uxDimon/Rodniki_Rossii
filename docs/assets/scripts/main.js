// // Бургер меню
const burgerButton = document.querySelector("button[data-burger]"),
	header__body = document.querySelector(".header__body-bot-button"),
	header__search = document.querySelector(".header__search"),
	header__menu = document.querySelector(".header__menu");

burgerButton.addEventListener("click", () => {
	header__body.classList.toggle("active-inline-flex");
	header__search.classList.toggle("active-block");
	header__menu.classList.toggle("active-block");
	burgerButton.classList.toggle("burger-botton_active");
});

// popup
const popup = document.querySelector("[data-popup]"),
	popupOpen = document.querySelectorAll("[data-popup-open]"),
	popupClose = document.querySelectorAll("[data-popup-close]");

for (const po of popupOpen) {
	po.addEventListener("click", () => {
		popup.style.display = "block";
	});
}
for (const po of popupClose) {
	po.addEventListener("click", () => {
		popup.style.display = "none";
	});
}

// input file
function uploadFile(target) {
	target.parentNode.querySelector("span").innerHTML = target.files[0].name;
}

// // Табы
// const tabsButton = document.querySelectorAll(".stages-work__button");
// const tabsContainerSW = document.querySelectorAll(".stages-work__tabs-item");

// const tabsButtonCalc = document.querySelectorAll(".calculator__head-booton");
// const tabsContainerCalc = document.querySelectorAll(".calculator__body");

// function mainTab(tabsButton, tabsContainer) {
// 	for (const i of tabsButton) {
// 		i.addEventListener("click", () => {
// 			for (const b of tabsButton) {
// 				b.classList.add("button_hgost-neutral");
// 			}
// 			i.classList.remove("button_hgost-neutral");

// 			for (const c of tabsContainer) {
// 				c.classList.remove("tab-container-active");
// 			}
// 			document.querySelector("#" + i.value).classList.add("tab-container-active");
// 		});
// 	}
// }

// mainTab(tabsButton, tabsContainerSW);
// mainTab(tabsButtonCalc, tabsContainerCalc);

// // Маска для телефона
// document.querySelectorAll(".phone-mask").forEach((item) => {
// 	let telMask = IMask(item, {
// 		mask: "+{7}(000)000-00-00",
// 	});
// 	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
// 	telMask.on("accept", function () {
// 		item.setCustomValidity("Укажите полностью номер телефона.");
// 	});
// 	telMask.on("complete", function () {
// 		item.setCustomValidity("");
// 	});
// });

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

if (document.querySelector(".springs-page__slider")) {
	var injury = tns({
		container: ".springs-page__slider",
		gutter: 30,
		items: 1,
		mouseDrag: true,
		loop: false,
		speed: 300,
		nav: false,
		controlsText: ["", ""],
		responsive: {
			580: {
				items: 2,
			},
			768: {
				items: 3,
			},
		},
	});
}

// if (document.querySelector(".gem-wiki__slider")) {
// 	var injury = tns({
// 		container: ".gem-wiki__slider",
// 		items: 3,
// 		gutter: 16,
// 		mouseDrag: true,
// 		autoWidth: true,
// 		loop: false,
// 		speed: 250,
// 		controls: false,
// 		nav: false,
// 		responsive: {
// 			768: {
// 				gutter: 32,
// 			},
// 		},
// 	});
// }

// // Галерея в статьях
// const mainGalleryWrap = document.querySelectorAll(".main-gallery__wrap");
// if (mainGalleryWrap) {
// 	for (const g of mainGalleryWrap) {
// 		const mainGallery = g.querySelector(".main-gallery");
// 		const mainGalleryControls = g.querySelector(".main-gallery-controls");

// 		var injury = tns({
// 			container: mainGallery,
// 			navContainer: mainGalleryControls,
// 			items: 1,
// 			gutter: 20,
// 			mouseDrag: true,
// 			loop: false,
// 			speed: 250,
// 			controls: false,
// 			navAsThumbnails: true,
// 			lazyload: true,
// 		});
// 	}
// }

// // Убирает tabIndex у ссылок внутри не активных слайдов
// window.onload = function () {
// 	const tnsItem = document.querySelectorAll(".tns-slider .tns-item");

// 	if (tnsItem) {
// 		for (const i of tnsItem) {
// 			console.log(i.ariaHidden);
// 			if (i.ariaHidden) {
// 				const tabs = i.querySelectorAll("a");
// 				for (const t of tabs) {
// 					t.tabIndex = -1;
// 				}
// 			}
// 		}
// 	}
// };

// // Аккардион
// if (document.querySelector(".faq")) {
// 	new Accordion(".faq");
// }

// if (document.querySelector(".footer__accordion")) {
// 	new Accordion(".footer__accordion");
// }

// Увеличения картинок
// https://github.com/francoischalifour/medium-zoom
mediumZoom("[data-zoomable]", {
	margin: 24,
});

// // popup
// const pooupBut = document.querySelectorAll(".popup-open");

// if (pooupBut) {
// 	const pooupWindow = document.querySelector(".certificate-popup"),
// 		pooupClose = document.querySelector(".popup--close"),
// 		pooupCloseArea = document.querySelector(".popup--close-area");

// 	for (const i of pooupBut) {
// 		i.addEventListener("click", () => {
// 			pooupWindow.classList.add("certificate-popup-active");
// 		});
// 	}

// 	pooupClose.addEventListener("click", () => {
// 		pooupWindow.classList.remove("certificate-popup-active");
// 	});

// 	pooupCloseArea.addEventListener("click", () => {
// 		pooupWindow.classList.remove("certificate-popup-active");
// 	});
// }

// // cookies close
// const cookiesBlock = document.querySelector(".cookies"),
// 	cookiesClose = document.querySelector(".cookies__close");

// if (cookiesBlock) {
// 	cookiesClose.addEventListener("click", () => {
// 		cookiesBlock.classList.add("cookies__close-none");
// 	});
// }

// Кнопка для видео
const videoWrap = document.querySelectorAll(".video-wrap"),
	playB = "<button data-play></button>";

// videoWrap.forEach(function (item) {
// 	console.log(item);
// 	item.insertAdjacentHTML("beforeend", playB);
// 	const video = item.querySelector("video");
// 	const buttonP = item.querySelector("button[data-play]");

// 	buttonP.addEventListener("click", function () {
// 		video.play();
// 		console.log("1");
// 	});
// 	video.addEventListener("play", function () {
// 		buttonP.style.opacity = 0;
// 		video.setAttribute("controls", "controls");
// 	});
// 	video.addEventListener("ended", function () {
// 		buttonP.style.opacity = 1;
// 		video.removeAttribute("controls");
// 	});
// });

for (const vw of videoWrap) {
	vw.insertAdjacentHTML("beforeend", playB);
	const video = vw.querySelector("video");
	const buttonP = vw.querySelector("button[data-play]");

	buttonP.addEventListener("click", () => {
		video.play();
		console.log("1");
	});
	video.addEventListener("play", () => {
		buttonP.style.opacity = 0;
		video.setAttribute("controls", "controls");
	});
	video.addEventListener("ended", () => {
		buttonP.style.opacity = 1;
		video.removeAttribute("controls");
	});
}
