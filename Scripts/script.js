const iconmenu = document.getElementById("iconmenu");

 iconmenu.addEventListener("click", () => {
  const navmobile = document.getElementById("navbar-mobile");
  if ((navmobile.style.display === "none") | (navmobile.style.display === "")) {
    navmobile.style.display = "flex";
    navmobile.classList.add("active");
    iconmenu.src = '../Image/close-30.png'
  } else {
    navmobile.style.display = "none";
    navmobile.classList.remove("active");
    iconmenu.src = '../Image/menu.png'
  }
});
