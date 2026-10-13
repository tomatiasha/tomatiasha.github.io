const slideNames = ["home","work","practice","about","contact"];
const labels = ["WELCOME / START HERE","SELECTED WORK / CLICK TO EXPLORE","PRACTICE / WHAT I DO","ABOUT / THE PERSON BEHIND THE WORK","CONTACT / MAKE SOMETHING"];
let current = 0;
let activeProject = 0;
const slides = [...document.querySelectorAll(".slide")];
const currentNumber = document.querySelector("#currentNumber");
const slideLabel = document.querySelector("#slideLabel");
const menuButton = document.querySelector("#menuButton");
const menuPanel = document.querySelector("#menuPanel");
const viewer = document.querySelector("#projectViewer");

const projects = [
  {title:"Quiet monument", category:"ARCHITECTURE", year:"2025", medium:"SPACE / MATERIAL / LIGHT", image:"assets/projects/project-01.jpg", description:"A study in atmosphere, proportion, and the way daylight moves through a space. Replace this text with the project context, your design intent, process, and individual contribution."},
  {title:"Where water remembers", category:"LANDSCAPE", year:"2024", medium:"ECOLOGY / PUBLIC REALM", image:"assets/projects/project-02.jpg", description:"A landscape proposal connecting people and place through water, habitat, and public life. Add your site analysis, ecological strategy, and key design decisions here."},
  {title:"Soft geometry", category:"VISUALIZATION", year:"2024", medium:"RENDERING / ATMOSPHERE", image:"assets/projects/project-03.jpg", description:"An exploration of form, light, and material through visual studies. Describe the tools you used, the atmosphere you wanted to create, and your role."},
  {title:"Notes from elsewhere", category:"ART & ILLUSTRATION", year:"2026", medium:"DRAWING / COLOR / MEMORY", image:"assets/projects/project-04.jpg", description:"A personal collection of visual experiments, illustration, and drawing. Add the story behind the series and the techniques that shaped it."},
  {title:"A small moving world", category:"ANIMATION", year:"2026", medium:"MOTION / STORY", image:"assets/projects/project-05.jpg", description:"A short moving image exploring character, rhythm, and visual storytelling. Add a video link, storyboard, tools, and your role in the production."}
];

function goTo(name) {
  const next = slideNames.indexOf(name);
  if (next < 0 || next === current) { menuPanel.classList.remove("open"); menuButton.setAttribute("aria-expanded","false"); return; }
  slides[current].classList.remove("is-active");
  current = next;
  slides[current].classList.add("is-active");
  currentNumber.textContent = String(current).padStart(2,"0");
  slideLabel.textContent = labels[current];
  menuPanel.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
}
document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", e => { e.preventDefault(); goTo(el.dataset.go); }));
document.querySelector("#prevSlide").addEventListener("click", () => goTo(slideNames[(current - 1 + slideNames.length) % slideNames.length]));
document.querySelector("#nextSlide").addEventListener("click", () => goTo(slideNames[(current + 1) % slideNames.length]));
menuButton.addEventListener("click", () => {
  const open = menuPanel.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector("span").textContent = open ? "−" : "＋";
});

function showProject(index) {
  activeProject = (index + projects.length) % projects.length;
  const p = projects[activeProject];
  document.querySelector("#viewerNumber").textContent = `PROJECT / ${String(activeProject+1).padStart(2,"0")}`;
  document.querySelector("#viewerCategory").textContent = p.category;
  document.querySelector("#viewerTitle").textContent = p.title;
  document.querySelector("#viewerDescription").textContent = p.description;
  document.querySelector("#viewerYear").textContent = p.year;
  document.querySelector("#viewerMedium").textContent = p.medium;
  const area = document.querySelector("#viewerImage");
  area.querySelector("img")?.remove();
  const img = document.createElement("img");
  img.src = p.image; img.alt = p.title;
  img.onerror = () => img.remove();
  area.prepend(img);
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden","false");
  document.body.classList.add("viewer-open");
}
function closeProject() { viewer.classList.remove("open"); viewer.setAttribute("aria-hidden","true"); }
document.querySelectorAll("[data-project]").forEach(btn => btn.addEventListener("click", () => showProject(Number(btn.dataset.project))));
document.querySelector("#viewerClose").addEventListener("click", closeProject);
document.querySelector("#prevProject").addEventListener("click", () => showProject(activeProject-1));
document.querySelector("#nextProject").addEventListener("click", () => showProject(activeProject+1));
document.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => {
  const wanted = btn.dataset.filter.toLowerCase();
  goTo("work");
  document.querySelectorAll(".work-card").forEach(card => {
    const text = card.querySelector(".card-label").textContent.toLowerCase();
    card.style.opacity = text.includes(wanted) ? "1" : ".22";
    card.style.pointerEvents = text.includes(wanted) ? "auto" : "none";
  });
}));
document.addEventListener("keydown", e => {
  if (viewer.classList.contains("open")) {
    if (e.key === "Escape") closeProject();
    if (e.key === "ArrowRight") showProject(activeProject+1);
    if (e.key === "ArrowLeft") showProject(activeProject-1);
    return;
  }
  if (e.key === "Escape") { menuPanel.classList.remove("open"); menuButton.setAttribute("aria-expanded","false"); }
  if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(slideNames[(current+1)%slideNames.length]);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(slideNames[(current-1+slideNames.length)%slideNames.length]);
});
