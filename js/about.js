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
