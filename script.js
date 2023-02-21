function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("llight-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  }
  