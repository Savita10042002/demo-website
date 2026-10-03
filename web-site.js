// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const currentItem = question.parentElement;

    document.querySelectorAll(".faq-item").forEach(function (item) {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    currentItem.classList.toggle("active");
  });
});

// BUTTON CLICK MESSAGE

document.querySelectorAll(".primary-btn, .cta-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("User clicked:", button.innerText);
  });
});
