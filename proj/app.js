function getUser() {
    const username = document.getElementById("username").value.trim();
  
    if (!username) {
      alert("Please enter a GitHub username");
      return;
    }
  
    const url = https://api.github.com/users/${username};
  
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
      .catch(() => {
        alert("GitHub user not found");
        document.getElementById("result").style.display = "none";
      });
  }
