/*
 	https://evoluteur.github.io/
 	(c) 2023 Olivier Giulieri
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
const isMobile = typeof window.orientation !== "undefined";
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
  pix.src = "pix/olivier/" + pixMe[pixMeIdx] + ".webp";
}
function more(id) {
  const elem = $(id + "_x");
  elem.className = "";
  elem.innerHTML = mosaic(id, true);
}
const linkCaptions = {
  comics: "Show more French graphic novels",
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
    arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview),
    pixPath = pixDir(id),
    imageLink = function (m) {
      let pix = `<img src="${pixPath + m.id + ext}" alt="${m.title}" />`;
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
  } else {
    arrListP = more ? arrList.slice(preview, ml) : arrList.slice(0, preview);
  }
  mm = arrListP.map(imageLink);
  if ((arrList.length > preview) & !more) {
    mm.push(linkMore(id, preview));
  }
  if (more === 1 && id === "comics") {
    mm.push(linkMore(id + "_2", 0));
  }
  return mm.join("");
}
const linkMore = (id, preview) =>
  `<span id="${id}_x" class="block"><button class="linkMore" onclick="javascript:more('${id}',${preview})">${linkCaptions[id]}</button></span>`;

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
}

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
          nbCharsInLine = -1;
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
