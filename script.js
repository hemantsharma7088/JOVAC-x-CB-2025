function getUser() {
  const username = document.getElementById("username").value.trim();
  const url = `https://api.github.com/users/hemantsharma7088`;

  if (!username) {
    alert("Please enter a GitHub username");
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("User not found");
      return response.json();
    })
    .then(data => {
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name || data.login;
      document.getElementById("profile").href = data.html_url;
      document.getElementById("result").style.display = "block";
    })
    .catch(error => {
      alert("GitHub user not found");
      document.getElementById("result").style.display = "none";
    });
}
