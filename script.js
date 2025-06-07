// Testimonial Data
const testimonials = [
  {
    stars: 5,
    text: "Excellent team. Very responsive and professional. I would recommend them to anyone!",
    author: "Jane D.",
    meta: "2 months ago · Google"
  },
  {
    stars: 4,
    text: "Quick repair and transparent pricing. I appreciated the photo updates during the work.",
    author: "John R.",
    meta: "1 month ago · Google"
  }
];

let current = 0;
const container = document.getElementById("testimonial-slider");

function renderTestimonial(index) {
  const t = testimonials[index];
  const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
  container.innerHTML = `
    <div class="testimonial-slide active">
      <div class="testimonial-stars">${stars}</div>
      <div class="testimonial-text">“${t.text}”</div>
      <div class="testimonial-author">${t.author}</div>
      <div class="testimonial-meta">${t.meta}</div>
      <div class="quote-icon">”</div>
    </div>
  `;
}

// Initialize first testimonial
if (container) {
  renderTestimonial(current);
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    renderTestimonial(current);
  }, 5000); // Change testimonial every 5 seconds
}

// Hamburger menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('active');
  document.getElementById('settingsPanel').classList.remove('active'); // Close settings if open
});

// Settings panel toggle
document.getElementById('settingsToggle').addEventListener('click', () => {
  document.getElementById('settingsPanel').classList.toggle('active');
  document.getElementById('mobileMenu').classList.remove('active'); // Close menu if open
});

