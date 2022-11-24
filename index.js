/* scroll to projects upon scroll click */
let atTop = true;
const scroll= document.getElementById('scroll');
const frontPage = document.getElementById("front-page");
const projects = document.getElementById("projects");

scroll.onclick = () => {
  if (atTop) {
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    atTop = false;
  }
  else {
    frontPage.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    atTop = true;
  }
}
