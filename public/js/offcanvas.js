document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-link");
    const menuContents = document.querySelectorAll(".menu-content");
    const closeMenuLink = document.getElementById("close-menu");
  
    menuLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = this.getAttribute("data-target");
  
        menuContents.forEach((content) => {
          if (content.id === target) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });
  
    closeMenuLink.addEventListener("click", function () {
      menuContents.forEach((content) => {
        content.style.display = "none";
      });
    });
  });
  