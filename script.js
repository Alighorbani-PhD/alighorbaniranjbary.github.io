
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const mobile = document.querySelector(".mobile-nav");
  if(btn && mobile){
    btn.addEventListener("click", () => mobile.classList.toggle("open"));
  }
});
