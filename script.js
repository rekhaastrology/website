document.getElementById("year").textContent = new Date().getFullYear();

const videos = document.querySelectorAll("video");
videos.forEach(v => v.addEventListener("play", () => {
  videos.forEach(other => { if (other !== v) other.pause(); });
}));

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "82px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "25px";
  nav.style.flexDirection = "column";
  nav.style.background = "rgba(7,9,15,.97)";
  nav.style.borderBottom = "1px solid rgba(239,208,139,.15)";
});
