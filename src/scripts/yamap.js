// ymaps.ready(init);
// // var myMap;

// function init() {
// 	var myMap = new ymaps.Map(
// 			"map",
// 			{
// 				center: [55.76, 37.64],
// 				zoom: 10,
// 			},
// 			{
// 				searchControlProvider: "yandex#search",
// 			}
// 		),
// 		objectManager = new ymaps.ObjectManager({
// 			// Чтобы метки начали кластеризоваться, выставляем опцию.
// 			clusterize: true,
// 			// ObjectManager принимает те же опции, что и кластеризатор.
// 			gridSize: 32,
// 			clusterDisableClickZoom: false,
// 		});

// 	// Чтобы задать опции одиночным объектам и кластерам,
// 	// обратимся к дочерним коллекциям ObjectManager.
// 	objectManager.objects.options.set("preset", "twirl#blueIcon");
// 	objectManager.clusters.options.set("preset", "twirl#blueClusterIcons");
// 	myMap.geoObjects.add(objectManager);

// 	$.ajax({
// 		url: "assets/scripts/data.json",
// 	}).done(function (data) {
// 		objectManager.add(data);
// 	});

// 	myMap.setBounds(myMap.geoObjects.getBounds(), {
// 		checkZoomRange: true,
// 		zoomMargin: 35,
// 	});
// }

ymaps.ready().done(function (ym) {
	var myMap = new ym.Map(
		"map",
		{
			center: [55.751574, 37.573856],
			zoom: 2,
		},
		{
			searchControlProvider: "yandex#search",
		}
	);

	jQuery.getJSON("assets/scripts/data.json", function (json) {
		var geoObjects = ym.geoQuery(json).addToMap(myMap).applyBoundsToMap(myMap, {
			checkZoomRange: true,
		});
	});
});
