/* scroll button to scroll up and down */
let atTop = true;
const scroll= document.getElementById("scroll");
const intro = document.getElementById("intro");
const projects = document.getElementById("projects");
const git = document.getElementById("git");
const linked = document.getElementById("linked");

scroll.onclick = () => {
  /* animate the navbar items */
  scroll.classList.toggle("flip");
  git.classList.toggle("trans-left");
  linked.classList.toggle("trans-right");

  if (atTop) {
    atTop = false;
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  else {
    atTop = true;
    intro.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
