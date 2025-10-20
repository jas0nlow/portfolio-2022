function toggleMenu() {
  let navLinks = document.getElementById("nav-links");
  let hmbgrIcon = document.getElementById("hmbgr-menu");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    hmbgrIcon.innerHTML = '<i class="fa fa-bars"></i>';
  } else {
    navLinks.style.display = "block";
    hmbgrIcon.innerHTML = '<i class="fa fa-close"></i>';
  }
} 