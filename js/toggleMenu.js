function toggleMenu() {
  let navLinks = document.getElementById("nav-links");
  let hmbgrIcon = document.getElementById("hmbgr-menu");
  if (navLinks.className === "nav-links menu-open") {
    navLinks.className = "nav-links menu-closed";
    hmbgrIcon.innerHTML = '<img class="svg-menu" src="/assets/svg/menu_24dp.svg"/>';
  } else {
    navLinks.className = "nav-links menu-open";
    hmbgrIcon.innerHTML = '<img class="svg-menu" src="/assets/svg/close_24dp.svg"/>';
  }
} 