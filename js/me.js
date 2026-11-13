/*
 	https://evoluteur.github.io/
 	(c) 2026 Olivier Giulieri
 */

const pixAreas = [
  "code",
  "comics",
  "comics_us",
  "comics_euro_us",
  "recipes",
  "movies",
  "movies_fr",
  "inspiration",
  "art",
  "omg-art",
  "meditation",
];
const brTitles = [
  { id: "code", br: "Code" },
  { id: "comics", br: "Graphic Novels" },
  { id: "recipes", br: "Cooking" },
  { id: "movies", br: "Movies" },
  { id: "inspiration", br: "Inspiration" },
  { id: "meditation", br: "Meditation" },
  { id: "name", br: "your name" },
  { id: "congrats", br: "Congratulations!" },
  {
    id: "learn",
    br: "You are now familiar with the Braille alphabet.",
  },
  {
    id: "alphabet",
    br: "abcdefghij\nklmnopqrst\nuvwxyz",
  },
];
const pixFormat = {
  code: ".png",
  recipes: ".webp",
  inspiration: ".webp",
  meditation: ".webp",
  "omg-art": ".webp",
};
let pixMeIdx = 0;
const isMobile = navigator.maxTouchPoints > 0;
const $ = (id) => document.getElementById(id);

function otherMe(direction) {
  const pix = $("og-pix");
  const maxIdx = pixMe.length - 1;
  if (direction === "+") {
    pixMeIdx++;
  } else {
    pixMeIdx--;
  }
  if (pixMeIdx < 0) {
    pixMeIdx = maxIdx;
  } else if (pixMeIdx > maxIdx) {
    pixMeIdx = 0;
  }
  const src = `pix/olivier/${pixMe[pixMeIdx]}.webp`;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !pix.animate) {
    pix.src = src;
    return;
  }
  // Card flip in the arrow's direction; preload so there's no blank frame
  const sign = direction === "+" ? 1 : -1;
  const next = new Image();
  next.src = src;
  const half = (from, to, easing) =>
    pix.animate(
      [{ transform: `perspective(800px) rotateY(${from}deg)` },
       { transform: `perspective(800px) rotateY(${to}deg)` }],
      { duration: 200, easing }
    ).finished;
  const ready = next.decode ? next.decode().catch(() => {}) : Promise.resolve();
  pix.getAnimations().forEach((a) => a.finish());
  const token = (otherMe.token = (otherMe.token || 0) + 1);
  Promise.all([half(0, -90 * sign, "ease-in"), ready]).then(() => {
    if (token !== otherMe.token) return; // a newer click took over
    pix.src = src;
    return half(90 * sign, 0, "ease-out");
  });
}
function more(id) {
  const elem = $(id + "_x");
  elem.className = "";
  elem.innerHTML = mosaic(id, true);
}
const linkCaptions = {
  comics: "Show more graphic novels",
  comics_2: "Show even more graphic novels",
  movies: "Show more sci-fi movies",
  movies_fr: "Show more French movies",
};
const pixDir = (id) => {
  if (id === "inspiration") {
    return "pix/fractals/";
  }
  return id.startsWith("comic") ? "pix/comics/" : `pix/${id}/`;
};
const cLink = (m) => m.url || "http://www.imdb.com/title/" + m.imdb;

function mosaic(id, more) {
  if (id === "comics_2") {
    id = "comics";
    more = 2;
  } else {
    more = more ? 1 : 0;
  }
  const previewCount = {
    movies: 8,
    movies_fr: 5,
    comics: 8,
  };
  const preview = previewCount[id] || 10;
  const ext = pixFormat[id] || ".jpg";
  const arrList = mediaList[id];
  let ml = id === "comics" && more ? 30 : arrList.length,
    arrListP,
    pixPath = pixDir(id),
    imageLink = function (m) {
      let pix = `<img src="${pixPath + m.id + ext}" alt="${m.title}" loading="lazy" />`;
      if (m.title) {
        pix += `<div class="pixTitle">${m.title}</div>`;
      }
      return (
        `<div class="pixTitleHolder"><a href="${cLink(m)}" aria-label="${
          m.title
        }"` +
        (id !== "recipes" && id !== "omg-art"
          ? ' target="_blank" rel="noopener"'
          : "") +
        `>${pix}</a></div>`
      );
    },
    mm;

  if (more === 2) {
    arrListP = arrList.slice(ml, arrList.length);
  } else if (id === "code") {
    arrListP = arrList;
  } else {
    arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview);
  }
  mm = arrListP.map(imageLink);
  if (arrList.length > preview && !more && id !== "code") {
    mm.push(linkMore(id, preview));
  }
  if (more === 1 && id === "comics") {
    mm.push(linkMore(id + "_2", 0));
  }
  return mm.join("");
}
const linkMore = (id, preview) =>
  `<span id="${id}_x" class="block"><button class="linkMore" onclick="more('${id}',${preview})">${linkCaptions[id]}</button></span>`;

function setMosaic(id) {
  $(id + "2").innerHTML = mosaic(id);
}

const setBraille = (id, txt) => ($(id + "-braille").innerHTML = braille(txt));

function setupHomePage() {
  pixAreas.forEach(setMosaic);
  if (isMobile) {
    setBraille("name", "your name");
  } else {
    brTitles.forEach((b) => setBraille(b.id, b.br));
  }
  document.querySelector(".arrow-left")?.addEventListener("click", () => otherMe("-"));
  document.querySelector(".arrow-right")?.addEventListener("click", () => otherMe("+"));
  const ogPix = $("og-pix");
  if (ogPix) {
    ogPix.style.cursor = "pointer";
    ogPix.addEventListener("click", () => otherMe("+"));
  }
  const omImg = document.querySelector(".om");
  if (omImg) {
    omImg.addEventListener("mouseover", playOm);
    omImg.addEventListener("mouseout", stopOm);
  }
  const nameBox = document.querySelector(".name-box");
  if (nameBox) {
    nameBox.addEventListener("keyup", (e) => yourBrName(e.target));
  }
}

document.addEventListener("DOMContentLoaded", setupHomePage);

const yourBrName = (elem) => setBraille("name", elem.value);

const braille = (message) => {
  let h = "";
  let myChar, prevCharNum, inQuote;
  const BrChar = (bPix, bAlt) =>
    `<div class="br br-${bPix}"><span>${bAlt}</span></div>`;

  for (let i = 0; i < message.length; i++) {
    myChar = message.charAt(i);
    if (myChar >= "a" && myChar <= "z") {
      // a to z
      h += BrChar(myChar, myChar);
      prevCharNum = false;
    } else if (myChar >= "A" && myChar <= "Z") {
      // A to Z
      h += BrChar("cap", "Caps") + BrChar(myChar.toLowerCase(), myChar); // Caps
      prevCharNum = false;
    } else if (myChar > "0" && myChar <= "9") {
      if (!prevCharNum) {
        h += BrChar("num", "Number");
      }
      h += BrChar(String.fromCharCode(myChar.charCodeAt(0) + 48), myChar);
      prevCharNum = true;
    } else {
      switch (myChar) {
        case " ":
          h += BrChar("sp", ""); //Space
          prevCharNum = false;
          break;
        case "0":
          if (!prevCharNum) {
            h += BrChar("num", "Number");
          }
          h += BrChar("j", "0");
          prevCharNum = true;
          break;
        case "\n":
          h += "<br>";
          prevCharNum = false;
          break;
        case ".":
          if (prevCharNum) {
            h += BrChar("dec", ".");
          } else {
            h += BrChar("period", ".");
          }
          break;
        case "$":
          h += BrChar("period", "$");
          prevCharNum = false;
          break;
        case "%":
          h += BrChar("col", "%") + BrChar("p", "");
          prevCharNum = false;
          break;
        case "'":
          h += BrChar("qs", "'");
          prevCharNum = false;
          break;
        case ",":
          h += BrChar("comma", ",");
          prevCharNum = false;
          break;
        case "?":
          h += BrChar("qu", "?");
          prevCharNum = false;
          break;
        case "(":
        case ")":
          h += BrChar("par", "parenthesis");
          prevCharNum = false;
          break;
        case "*":
          h += BrChar("ast", "*") + BrChar("ast", "*");
          prevCharNum = false;
          break;
        case "//":
          h += BrChar("sla", "//");
          prevCharNum = false;
          break;
        case "!":
          h += BrChar("ex", "!");
          prevCharNum = false;
          break;
        case "'":
          if (inQuote) h += BrChar("qc", "Close Quote");
          else h += BrChar("qo", "Open Quote");
          inQuote = !inQuote;
          prevCharNum = false;
          break;
        case ":":
          h += BrChar("col", ":");
          prevCharNum = false;
          break;
        case ";":
          h += BrChar("sc", ";");
          prevCharNum = false;
          break;
        case "[":
          h += BrChar("cap", "[") + BrChar("par", "");
          break;
        case "]":
          h += BrChar("par", "]") + BrChar("qs", "");
          break;
      }
    }
  }
  return h;
};

function playOm() {
  const omSound = $("om-sound");
  omSound.play();
}
function stopOm() {
  const omSound = $("om-sound");
  omSound.pause();
  omSound.currentTime = 0;
}

// "Hello" in many languages (typewriter effect)
const hellos = [
  "Hello", "Bonjour", "Hola", "Ciao", "Hallo", "Olá", "Привет",
  "你好", "안녕", "नमस्ते", "Merhaba", "Hej", "Aloha", "שלום", "Salut",
];

function helloTypewriter() {
  const el = document.getElementById("hello-word");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Split into graphemes so scripts like Devanagari type correctly
  const seg = window.Intl?.Segmenter ? new Intl.Segmenter() : null;
  const chars = (w) => (seg ? [...seg.segment(w)].map((s) => s.segment) : [...w]);
  let i = 0;
  el.classList.add("typing");
  const erase = () => {
    const c = chars(el.textContent);
    if (c.length) {
      el.textContent = c.slice(0, -1).join("");
      setTimeout(erase, 70);
    } else {
      i = (i + 1) % hellos.length;
      setTimeout(() => type(chars(hellos[i]), 0), 300);
    }
  };
  const type = (c, n) => {
    el.textContent = c.slice(0, n + 1).join("");
    if (n + 1 < c.length) setTimeout(() => type(c, n + 1), 120);
    else setTimeout(erase, 2000);
  };
  setTimeout(erase, 2500);
}

document.addEventListener("DOMContentLoaded", helloTypewriter);

// Nav dots: highlight the dot of the section currently in view
function navDotsSpy() {
  const links = [...document.querySelectorAll(".c7-dots > a[href^='#']")];
  const items = links
    .map((a) => ({ a, sec: document.getElementById(a.getAttribute("href").slice(1)) }))
    .filter((x) => x.sec);
  if (!items.length) return;
  let current = null;
  const update = () => {
    // current = last section whose top passed 40% of the screen (else the first one)
    const line = window.innerHeight * 0.4;
    let active = items[0];
    items.forEach((x) => {
      if (x.sec.getBoundingClientRect().top <= line) active = x;
    });
    // at the very bottom, select the last section
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      active = items[items.length - 1];
    }
    if (active === current) return;
    current = active;
    items.forEach(({ a }) => {
      a.classList.toggle("active", a === active.a);
      if (a === active.a) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

document.addEventListener("DOMContentLoaded", navDotsSpy);
