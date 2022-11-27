/* ----- animate navbar items when scrolling ----- */
const scroll= document.getElementById("scroll");
const git = document.getElementById("git");
const linked = document.getElementById("linked");

const checkScrollDistance = () => {
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const half = document.documentElement.clientHeight * 0.75;

  if (scrollTop < half && scroll.classList.contains("flip")) {
    scroll.classList.remove("flip"); 
    git.classList.remove("trans-left");
    linked.classList.remove("trans-right");
  }
  else if (scrollTop > half && !scroll.classList.contains("flip")) {
    scroll.classList.add("flip"); 
    git.classList.add("trans-left");
    linked.classList.add("trans-right");
  }
  
}

document.addEventListener("scroll", checkScrollDistance);

/* ----- scroll up / down when clicking scroll button ----- */
const intro = document.getElementById("intro");
const projects = document.getElementById("projects");

scroll.addEventListener("click", () => {
  if (scroll.classList.contains("flip")) {
    intro.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  else {
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

});

