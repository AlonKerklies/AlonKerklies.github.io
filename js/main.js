//replace with your user:
const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

//const GITHUB_URL = "https://api.github.com/users/AlonKerklies";
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");

    console.log(profileImage);
    console.log(profileName);

    // update the profileImage and profileName with the information retrieved.
  });
