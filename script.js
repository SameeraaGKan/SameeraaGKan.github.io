// --- PORTFOLIO CORE ROUTING & COMPONENT MATRIX ---
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

// --- IMAGE FALLBACK SCRIPT ---
document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.opacity = "0";
    image.setAttribute("aria-hidden", "true");
  });
});

// --- PROJECT MODAL ENGINE ---
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
  if (modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

if (closeButton) {
  closeButton.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.classList.contains("show")) {
    closeModal();
  }
});

/// --- INTERACTIVE FIRECRACKER BURST ENGINE ---
const canvas = document.getElementById("burstCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  let particles = [];
  let animationFrameId;

  let lastX = 0;
  let lastY = 0;
  let stopTimer;

  const burstColors = [
  "#F8C8DC", // sakura pink
  "#E8A0BF", // dusty rose
  "#FFE5EC", // pale pink
  "#FFFFFF", // sparkle white
  "#D8B4A0"  // soft beige
];

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  class Ember {
    constructor(x, y) {
      this.x = x;
      this.y = y;

      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = -0.4 - Math.random() * 0.7;

      this.size = 1.5 + Math.random() * 2.5;

      this.alpha = 1;
      this.decay = 0.02 + Math.random() * 0.015;

      this.color =
        Math.random() > 0.5
          ? "255,180,80"
          : "255,120,40";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      this.vx *= 0.98;
      this.vy *= 0.98;

      this.alpha -= this.decay;
    }

    draw() {
      ctx.save();

      ctx.shadowBlur = 20;
      ctx.shadowColor = "#22c4cc";

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();

      ctx.restore();
    }
  }

  class Spark {
    constructor(x, y, angle, speed) {
      this.x = x;
      this.y = y;

      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      this.gravity = 0.03;

      this.size = 2 + Math.random() * 3;

      this.alpha = 1;
      this.decay = 0.008 + Math.random() * 0.01;

      this.color =
        burstColors[Math.floor(Math.random() * burstColors.length)];

      this.trail = [];
    }

    update() {
      this.trail.push({
        x: this.x,
        y: this.y
      });

      if (this.trail.length > 8) {
        this.trail.shift();
      }

      this.x += this.vx;
      this.y += this.vy;

      this.vx *= 0.985;
      this.vy *= 0.985;

      this.vy += this.gravity;

      this.alpha -= this.decay;
    }

    draw() {
      ctx.save();

      for (let i = 0; i < this.trail.length; i++) {
        const point = this.trail[i];
        const trailAlpha = (i / this.trail.length) * this.alpha * 0.5;

        ctx.beginPath();
        ctx.arc(point.x, point.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = hexToRGBA(this.color, trailAlpha);
        ctx.fill();
      }

      ctx.shadowBlur = 20;
      ctx.shadowColor = this.color;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      ctx.fillStyle = hexToRGBA(this.color, this.alpha);
      ctx.fill();

      ctx.restore();
    }
  }

  function hexToRGBA(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function createFirecrackerBurst(x, y) {
    const rings = [
      { count: 24, speed: 2.5 },
      { count: 32, speed: 4 },
      { count: 16, speed: 6 }
    ];

    rings.forEach((ring) => {
      for (let i = 0; i < ring.count; i++) {
        const angle = (Math.PI * 2 * i) / ring.count;

        particles.push(
          new Spark(
            x,
            y,
            angle,
            ring.speed + Math.random()
          )
        );
      }
    });
  }

  function animate() {
    const rect = canvas.getBoundingClientRect();

    // Soft fade for motion trails
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.fillRect(0, 0, rect.width, rect.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];

      particle.update();
      particle.draw();

      if (particle.alpha <= 0) {
        particles.splice(i, 1);
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();

    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      return;
    }

    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;

    particles.push(new Ember(lastX, lastY));

    clearTimeout(stopTimer);

    stopTimer = setTimeout(() => {
      createFirecrackerBurst(lastX, lastY);
    }, 150);
  });

  // Optional click mega-burst
  window.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();

    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      createFirecrackerBurst(
        e.clientX - rect.left,
        e.clientY - rect.top
      );
    }
  });

  window.addEventListener("resize", resizeCanvas);

  setTimeout(() => {
    resizeCanvas();

    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillRect(0, 0, rect.width, rect.height);

    animate();
  }, 60);
}