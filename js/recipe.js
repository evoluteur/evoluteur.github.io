/*
  https://evoluteur.github.io/
  (c) 2026 Olivier Giulieri
  Recipe pages: servings picker, and tap an ingredient or a step to cross it
  off while cooking.
 */

// Servings picker: <span class="recipe-yield" data-options="10,20,30,40">20</span>
// becomes a dropdown; elements with data-y10, data-y20... show that quantity.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".recipe-yield[data-options]").forEach((span) => {
    const select = document.createElement("select");
    select.className = "recipe-yield";
    select.setAttribute("aria-label", "Number of servings");
    span.dataset.options.split(",").forEach((n) => {
      const opt = new Option(n, n);
      opt.selected = n === span.textContent.trim();
      select.add(opt);
    });
    select.addEventListener("change", () => {
      const key = "y" + select.value;
      document.querySelectorAll(`[data-${key}]`).forEach((el) => {
        el.textContent = el.dataset[key];
      });
    });
    span.replaceWith(select);
  });
});

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
