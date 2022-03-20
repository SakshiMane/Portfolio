function hamopen() {
    var x = document.getElementById("lik");
    var y = document.getElementById("prt");
    var z=document.getElementById("ico");
    if (x.style.display === "none") {
      z.style.marginRight="10px";
      x.style.display = "block";
    } else {
      x.style.display = "none";
      z.style.marginRight="10px";
    }
    
  }