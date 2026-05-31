const tabButtons = document.querySelectorAll("[data-tab-link]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");
const browserAddress = document.getElementById("browserAddress");

const tabRoutes = {
  home: "sameeraa.kan/home",
  about: "sameeraa.kan/about-me",
  skills: "sameeraa.kan/technical-skills",
  highlights: "sameeraa.kan/highlights",
  projects: "sameeraa.kan/projects",
  photography: "sameeraa.kan/photography",
  contact: "sameeraa.kan/contact",
};

function showTab(tabName, updateHash = true) {
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tabPanel === tabName);
  });

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tabLink === tabName);
    button.setAttribute("aria-selected", String(button.dataset.tabLink === tabName));
  });

  if (browserAddress) {
    browserAddress.textContent = tabRoutes[tabName] || tabRoutes.home;
  }

  if (updateHash) {
    history.replaceState(null, "", `#${tabName}`);
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showTab(button.dataset.tabLink);
  });
});

function initFromHash() {
  const tabName = window.location.hash.replace("#", "") || "home";
  const hasPanel = document.querySelector(`[data-tab-panel="${tabName}"]`);
  showTab(hasPanel ? tabName : "home", false);
}

window.addEventListener("hashchange", initFromHash);
initFromHash();

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.opacity = "0";
    image.setAttribute("aria-hidden", "true");
  });
});

const modal = document.getElementById("projectModal");
const closeButton = document.querySelector(".modal-close");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalTools = document.getElementById("modalTools");
const modalDescription = document.getElementById("modalDescription");
const modalButtons = document.getElementById("modalButtons");

function addModalButton(label, url, style = "secondary") {
  const button = document.createElement("button");
  button.className = `btn ${style}`;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", () => window.open(url, "_blank", "noopener,noreferrer"));
  modalButtons.appendChild(button);
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.image || "";
    modalImage.alt = card.dataset.title || "Project image";
    modalTitle.textContent = card.dataset.title || "";
    modalTools.textContent = card.dataset.tools ? `Tools: ${card.dataset.tools}` : "";
    modalDescription.textContent = card.dataset.description || "";
    modalButtons.innerHTML = "";

    if (card.dataset.github) addModalButton("GitHub", card.dataset.github, "secondary");
    if (card.dataset.devpost) addModalButton("Devpost", card.dataset.devpost, "primary");
    if (card.dataset.figma) addModalButton("Figma", card.dataset.figma, "secondary");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
