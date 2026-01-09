function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Scroll-based text color transition
function updateTextColorOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(scrollTop / documentHeight, 1); // 0 to 1
    
    // Color values (hex to RGB)
    const yankeesBlue = { r: 13, g: 39, b: 61 }; // #0D273D - dark (top)
    const white = { r: 255, g: 255, b: 255 }; // white - light (bottom)
    
    // Interpolate between colors
    const r = Math.round(yankeesBlue.r + (white.r - yankeesBlue.r) * scrollProgress);
    const g = Math.round(yankeesBlue.g + (white.g - yankeesBlue.g) * scrollProgress);
    const b = Math.round(yankeesBlue.b + (white.b - yankeesBlue.b) * scrollProgress);
    
    // Update CSS variable
    document.documentElement.style.setProperty('--color-text-dynamic', `rgb(${r}, ${g}, ${b})`);
}

// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(updateTextColorOnScroll);
});

// Initialize color on page load
updateTextColorOnScroll();

// Animate skill progress bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const proficiency = entry.target.getAttribute('data-proficiency');
                entry.target.style.width = proficiency + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skill bars when DOM is loaded
document.addEventListener('DOMContentLoaded', initSkillBars);

// Modal functionality
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('#projects .details-container');
    const closeBtn = document.querySelector('.modal-close');
    
    // Open modal when clicking on a project card
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const image = this.getAttribute('data-image');
            const title = this.getAttribute('data-title');
            const tools = this.getAttribute('data-tools');
            const description = this.getAttribute('data-description');
            const github = this.getAttribute('data-github');
            const devpost = this.getAttribute('data-devpost');
            const figma = this.getAttribute('data-figma');
            
            // Populate modal content
            document.getElementById('modalImage').src = image;
            document.getElementById('modalImage').alt = title;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTools').textContent = `Tools: ${tools}`;
            document.getElementById('modalDescription').textContent = description;
            
            // Clear and populate buttons
            const modalButtons = document.getElementById('modalButtons');
            modalButtons.innerHTML = '';
            
            if (github) {
                const githubBtn = document.createElement('button');
                githubBtn.className = 'btn btn-color-2';
                githubBtn.textContent = 'GitHub';
                githubBtn.onclick = () => window.open(github, '_blank');
                modalButtons.appendChild(githubBtn);
            }
            
            if (devpost) {
                const devpostBtn = document.createElement('button');
                devpostBtn.className = 'btn btn-color-1';
                devpostBtn.textContent = 'Devpost';
                devpostBtn.onclick = () => window.open(devpost, '_blank');
                modalButtons.appendChild(devpostBtn);
            }
            
            if (figma) {
                const figmaBtn = document.createElement('button');
                figmaBtn.className = 'btn btn-color-2';
                figmaBtn.textContent = 'Figma';
                figmaBtn.onclick = () => window.open(figma, '_blank');
                modalButtons.appendChild(figmaBtn);
            }
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjectModal);
