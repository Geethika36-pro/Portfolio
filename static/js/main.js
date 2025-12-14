document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        // animate skill bars
        entry.target.querySelectorAll(".skill-fill").forEach(bar => {
          bar.style.width = bar.getAttribute("data-fill") + "%";
        });
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Active link highlight on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(a => a.classList.remove("active"));
        document.querySelector(`a[href="#${sec.id}"]`)?.classList.add("active");
      }
    });
  });

});
