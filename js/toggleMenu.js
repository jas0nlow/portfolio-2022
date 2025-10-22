function toggleMenu() {
  let navLinks = document.getElementById("nav-links");
  let hmbgrIcon = document.getElementById("hmbgr-menu");
  if (navLinks.className === "nav-links menu-open") {
    navLinks.className = "nav-links menu-closed";
    hmbgrIcon.innerHTML = '<i class="fa fa-bars"></i>';
  } else {
    navLinks.className = "nav-links menu-open";
    hmbgrIcon.innerHTML = '<i class="fa fa-close"></i>';
  }
} 