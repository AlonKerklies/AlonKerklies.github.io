//replace with your user:
//const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

const GITHUB_URL = "https://api.github.com/users/AlonKerklies";
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");

    console.log(profileImage);
    console.log(profileName);
    console.log(GITHUB_URL);
    console.log(data);
    console.log(data["name"]);
    console.log(data["avatar_url"]);

 ;



document.getElementById("profile-name").innerHTML =
data["name"];

document.getElementById("profile-image").src  =
data["avatar_url"];


    // update the profileImage and profileName with the information retrieved.
  });


  
const codingLanguages = ["HTML", "CSS", "JavaScript"];
document.getElementById("i_made_it").innerHTML =
  codingLanguages[0] +
  " , " +
  codingLanguages[1] +
  " and " +
  codingLanguages[2];
[0] + "," + codingLanguages[1];






var inp = document.getElementsByTagName("input");
var btn = document.getElementById("btn");
for (var i = 0; i < inp.length; i++) {
  // Code
}

//

//const testalon = [data];
//document.getElementById("profile-name").innerHTML =
//testalon[0];
