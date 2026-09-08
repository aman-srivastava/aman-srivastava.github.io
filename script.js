document.querySelector(".print-button").addEventListener("click", () => window.print());
document.querySelector("#year").textContent = new Date().getFullYear();

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.6,
    },
  });
}