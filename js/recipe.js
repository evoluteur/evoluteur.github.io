/*
  https://evoluteur.github.io/
  (c) 2026 Olivier Giulieri
  Recipe pages: tap an ingredient or a step to cross it off while cooking.
 */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = (li) => {
    const done = li.classList.toggle("done");
    li.setAttribute("aria-checked", done);
  };
  document.querySelectorAll(".checklist > li").forEach((li) => {
    li.tabIndex = 0;
    li.setAttribute("role", "checkbox");
    li.setAttribute("aria-checked", "false");
    li.addEventListener("click", (e) => {
      if (!e.target.closest("a")) toggle(li);
    });
    li.addEventListener("keydown", (e) => {
      if (e.target !== li || (e.key !== " " && e.key !== "Enter")) return;
      e.preventDefault();
      toggle(li);
    });
  });
});
