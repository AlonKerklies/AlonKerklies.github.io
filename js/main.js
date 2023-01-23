const GITHUB_URL = "https://api.github.com/users/AlonKerklies";
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    const profileImage = data["avatar_url"];
    const profileName = data["name"];

    // console.log(data["avatar_url"]);

    document.getElementById("profile-name").innerHTML = profileName;

    document.getElementById("profile-image").src = profileImage;
  });
