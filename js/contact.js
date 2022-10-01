const sumbitBtn = document.querySelector(".sumbitBtn");

//const ForumComplete = document.querySelectorAll("label");
//sumbitBtn.disabled = true; //disable button

//let inp = document.querySelectorAll("label");

console.log(sumbitBtn);

//let counteralon = document.querySelectorAll('[type="text"]');
//let counteralon = document.querySelectorAll(".checkforsend");
//let counteralon = document.querySelectorAll(".checkforsend" , ".textarea"  );

let i = 0;

let counteralon = document.querySelectorAll(".checkforsend");
for (let i = 0; i < counteralon.length; i++) {
  counteralon[i].oninput = () => {
    if (!(counteralon[0].value == "") && !(counteralon[3].value == "")) {
      sumbitBtn.removeAttribute("disabled");
    }
  };
}
console.log(counteralon);
