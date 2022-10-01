console.log("yeahh the about connect");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  // remove the existing
  currentlySelected = currentlySelected - 1;
  //add -1 to currentlySelected existing
  galleryImgs[currentlySelected].classList.add("active");
  //will active the i frame numberd -1
  nextBtn.disabled = false; //when we have -1 nextBtn will be enable

  if (currentlySelected === 0)
    //if the number of the items reach the count
    prevBtn.disabled = true;
});

nextBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  // remove the existing
  currentlySelected = currentlySelected + 1;
  //add +1 to currentlySelected existing
  galleryImgs[currentlySelected].classList.add("active");
  //will active the i frame numberd +1
  prevBtn.disabled = false; //when we have +1 prevBtn will be enable
  if (galleryImgs.length === currentlySelected + 1)
    //if the number of the items reach the count
    nextBtn.disabled = true;
});

console.log(currentlySelected);

//function myMap() {
// var mapProp = {
//  center: new google.maps.LatLng(51.508742, -0.12085),
//  zoom: 15,
// };
// var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
//}

//
//var map1 = new google.maps.Map(
// document.getElementById("googleMap1"),
// mapOptions1
//);
//var map2 = new google.maps.Map(
// document.getElementById("googleMap2"),
// mapOptions2
//);
//var map3 = new google.maps.Map(
// document.getElementById("googleMap3"),
//mapOptions3
//);
