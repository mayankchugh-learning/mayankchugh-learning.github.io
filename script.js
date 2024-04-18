class TypingAnimation {
  constructor(elementId, strings, typeSpeed = 70, backSpeed = 30, loop = true) {
    this.typed = new Typed(elementId, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: loop,
    });
  }
}

class Counter {
  constructor(selector, target, increment, interval) {
    this.counterElement = document.querySelector(selector);
    this.target = target;
    this.increment = increment;
    this.interval = interval;
    this.count = 0;
  }

  startCounting() {
    if (parseInt(this.counterElement.textContent) !== 0) {
      return;
    }

    const duration = Math.floor(this.interval / this.target);
    const counter = setInterval(() => {
      this.count += this.increment;
      this.counterElement.textContent = this.count;
      if (this.count >= this.target) {
        this.counterElement.textContent = `${this.count}+`;
        clearInterval(counter);
      }
    }, duration);
  }
}

function startCountersIfNeeded() {
  const followersCounter = new Counter('#followers-text', 70000, 50, 4000);
  const subscribersCounter = new Counter('#subscribers-text', 4000, 10, 4000);

  followersCounter.startCounting();
  subscribersCounter.startCounting();
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollForCounters() {
  const countersSection = document.querySelector('#stat-counter-section');
  if (isInViewport(countersSection)) {
    startCountersIfNeeded();
    window.removeEventListener('scroll', handleScrollForCounters);
  }
}

// Check if counters section is in viewport, if yes, start counting
window.addEventListener('scroll', handleScrollForCounters);

// Initialize typing animation
const typingAnimation = new TypingAnimation("#typing-text", ["Visionary Enterprise Architect", "Generative AI Architect", "Solution Architect", "Data Scientist", "DevOps/MLOps/LLMOps", "Driving Strategic Innovation", "Cloud Governance", "Integration & Digital Transformation" ]);
s
window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  if (window.scrollY > 250) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});