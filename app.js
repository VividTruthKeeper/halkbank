const faq = document.querySelectorAll(".faq-li");

faq.forEach((el) =>
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  })
);

const changeTab = (buttons, blocks) => {
  buttons.forEach((button) => {
    const id = button.getAttribute("data-option");
    button.addEventListener("click", () => {
      blocks.forEach((block) => block.classList.remove("active"));
      buttons.forEach((btn) => btn.classList.remove("active"));
      blocks[id - 1].classList.add("active");
      button.classList.add("active");
    });
  });
};

const faqUls = document.querySelectorAll(".faq-content");
const faqButtons = document.querySelectorAll(".faq-button");

changeTab(faqButtons, faqUls);
