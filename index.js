/* contact button to open and use contact form */
const contactOpen = document.getElementById("contact-open");
const contact = document.getElementById("contact");
contactOpen.onclick = () => {
  contact.style.display = "flex"; 
}

/* scroll-relevant elements */
const scroll= document.getElementById("scroll");
const git = document.getElementById("git");
const linked = document.getElementById("linked");
const intro = document.getElementById("intro");
const projects = document.getElementById("projects");
let scrollThreshReached = false;
let scrollFinished = null;

/* scroll up/down and animate navbar items */
const toggleScroll = () => {
  // remove scroll event listener until scroll finishes
  document.removeEventListener("scroll", checkToggle); 
  if (scrollFinished === null) {
    clearTimeout(scrollFinished);
  }  

  scrollFinished = setTimeout(() => document.addEventListener("scroll", checkToggle), 500);

  // scroll up or down
  if (scrollThreshReached) {
   intro.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  else {
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  scrollThreshReached = !scrollThreshReached;

  // animate navbar items
  scroll.classList.toggle("flip");
  git.classList.toggle("trans-left");
  linked.classList.toggle("trans-right");
}

/* scroll up/down if scroll threshold crossed */
const checkToggle = () => {
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const half = document.documentElement.clientHeight / 2;

  if ((scrollThreshReached && scrollTop < half) ||
      !scrollThreshReached && scrollTop > half) {
    toggleScroll();
  }
}

/* scroll up/down on clicking scroll button or crossing scroll threshold */
document.addEventListener("scroll", checkToggle);
scroll.addEventListener("click", toggleScroll);
