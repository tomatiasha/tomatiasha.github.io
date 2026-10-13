const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    projects.forEach((project) => {
      project.hidden = category !== "all" && project.dataset.category !== category;
    });
  });
});

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.querySelector("span").textContent = isOpen ? "−" : "＋";
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector("span").textContent = "＋";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
