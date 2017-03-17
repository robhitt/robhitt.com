
  document.getElementById("mainDiv").addEventListener("mouseover", displayDate);

  function displayDate() {
      var currDate = Date();
      document.getElementById("demo").innerText = currDate;
      setTimeout(displayName, 2000);
  }

  function displayName() {
      var name = "<h1>Rob Hitt</h1>"
      document.getElementById("demo").innerHTML = name;
  }
