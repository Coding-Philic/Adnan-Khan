// Staggered reveal for hero elements
window.addEventListener("DOMContentLoaded", () => {
  const animatedNodes = Array.from(
    document.querySelectorAll(".hero-animate")
  );

  // sort by data-animate-order
  animatedNodes.sort((a, b) => {
    const orderA = Number(a.dataset.animateOrder || 0);
    const orderB = Number(b.dataset.animateOrder || 0);
    return orderA - orderB;
  });

  const baseDelay = 0.15; // seconds between elements
  animatedNodes.forEach((el, index) => {
    const delay = (index + 1) * baseDelay;
    el.style.setProperty("--delay", `${delay}s`);

    setTimeout(() => {
      el.classList.add("show");
    }, delay * 1000);
  });
});
// Skills bar animation on scroll using IntersectionObserver
window.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const level = card.getAttribute("data-skill-level") || "0";
            const fill = card.querySelector(".skill-bar-fill");

            // Mark card as visible (for lift animation)
            card.classList.add("in-view");

            // Trigger bar fill like a download
            requestAnimationFrame(() => {
              fill.style.width = level + "%";
            });

            // Optional: stop observing once animated
            obs.unobserve(card);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    skillCards.forEach((card) => observer.observe(card));
  } else {
    // Fallback: just show all bars
    skillCards.forEach((card) => {
      const level = card.getAttribute("data-skill-level") || "0";
      const fill = card.querySelector(".skill-bar-fill");
      card.classList.add("in-view");
      fill.style.width = level + "%";
    });
  }
});
// Projects animation (50% threshold)
const projectCards = document.querySelectorAll('.project-card');

const projectObserverOptions = {
  threshold: 0.5, // Trigger at 50% visibility
  rootMargin: '0px 0px -10% 0px'
};

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, projectObserverOptions);

projectCards.forEach(card => projectObserver.observe(card));
// Experience timeline animation (50% threshold)
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -15% 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('in-view');
      }, index * 150); // Staggered animation
    }
  });
}, timelineObserverOptions);

timelineItems.forEach(item => timelineObserver.observe(item));
// Education cards animation (50% threshold)
const educationCards = document.querySelectorAll('.education-card');

const educationObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -10% 0px'
};

const educationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('in-view');
      }, index * 200); // Staggered entrance
    }
  });
}, educationObserverOptions);

educationCards.forEach(card => educationObserver.observe(card));
// Resume card animation (50% threshold)
const resumeCard = document.querySelector('.resume-card');

const resumeObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -10% 0px'
};

const resumeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, resumeObserverOptions);

if (resumeCard) resumeObserver.observe(resumeCard);
// Contact section animation (50% threshold)
const contactElements = document.querySelectorAll('[data-contact]');

const contactObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -10% 0px'
};

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('in-view');
      }, index * 150);
    }
  });
}, contactObserverOptions);

contactElements.forEach(el => contactObserver.observe(el));

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here (EmailJS, etc.)
  alert('Message sent! (Demo - add EmailJS for production)');
  this.reset();
});
// Scroll to top functionality
const scrollTopBtn = document.querySelector('.scroll-top');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide scroll button
window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});
// About section animation (50% threshold, staggered)
const aboutElements = document.querySelectorAll('[data-about]');

const aboutObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -15% 0px'
};

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.getAttribute('data-about')) * 200;
      setTimeout(() => {
        entry.target.classList.add('in-view');
      }, delay);
    }
  });
}, aboutObserverOptions);

aboutElements.forEach(el => aboutObserver.observe(el));
