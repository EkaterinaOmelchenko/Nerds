(function() {
  var link = document.querySelector(".map-adds-btn");
  var popup = document.querySelector(".b-popup");
  var close = popup.querySelector(".modal-content-close");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
  });


  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map('map', {
        center: [59.939055, 30.319613],
        zoom: [17],
        controls: []
      }),
      myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');


    myPlacemark = new ymaps.Placemark([59.938554, 30.32248], {
      hintContent: '',
      balloonContent: ''
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../nerds/img/nerds-mark.png',
      iconImageSize: [231, 190],
      iconImageOffset: [0, -215]
    });

    myMap.geoObjects.add(myPlacemark);
  }
})();