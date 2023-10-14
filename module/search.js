import { modelInput, inputSearch } from "../js/variabel.js";

var result1 = document.getElementById("searchResult1");
var result2 = document.getElementById("searchResult2");
var result3 = document.getElementById("searchResult3");
var result4 = document.getElementById("searchResult4");
var result5 = document.getElementById("searchResult5");

function searchFetch() {
  fetch(
    "https://huggingface.co/api/models?pipeline_tag=text-to-image&search=" +
      inputSearch.value
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      result1.innerHTML = JSON.stringify(data[0].id)
        .toString()
        .replace(/"/g, "");
      result2.innerHTML = JSON.stringify(data[1].id)
        .toString()
        .replace(/"/g, "");
      result3.innerHTML = JSON.stringify(data[2].id)
        .toString()
        .replace(/"/g, "");
      result4.innerHTML = JSON.stringify(data[3].id)
        .toString()
        .replace(/"/g, "");
      result5.innerHTML = JSON.stringify(data[4].id)
        .toString()
        .replace(/"/g, "");
    });
}

function loading() {
  result1.innerHTML = `<span class="spinner-border spinner-border-sm text-light"></span>`;
  result2.innerHTML = `<span class="spinner-border spinner-border-sm text-light"></span>`;
  result3.innerHTML = `<span class="spinner-border spinner-border-sm text-light"></span>`;
  result4.innerHTML = `<span class="spinner-border spinner-border-sm text-light"></span>`;
  result5.innerHTML = `<span class="spinner-border spinner-border-sm text-light"></span>`;
}

//perlihatkan list saat mengetik
inputSearch.addEventListener(
  "focus",
  () => (document.getElementById("searchList").style.display = "block")
);
//Jika tidak dalam mengetik ngehide result
inputSearch.addEventListener("blur", () =>
  setTimeout(function () {
    document.getElementById("searchList").style.display = "none";
  }, 50)
);

inputSearch.addEventListener("input", () => find());
function find(){
setTimeout(function () {
  searchFetch();
  loading();
}, 100);
}
///
///
///

result1.addEventListener(
  "click",
  () => ((modelInput.value = result1.textContent), saveRecentModel())
);
result2.addEventListener(
  "click",
  () => ((modelInput.value = result2.textContent), saveRecentModel())
);
result3.addEventListener(
  "click",
  () => ((modelInput.value = result3.textContent), saveRecentModel())
);
result4.addEventListener(
  "click",
  () => ((modelInput.value = result4.textContent), saveRecentModel())
);
result5.addEventListener(
  "click",
  () => ((modelInput.value = result5.textContent), saveRecentModel())
);

function saveRecentModel() {
  setTimeout(function () {
    localStorage.setItem("recentModel", modelInput.value);
  }, 100);
}

modelInput.value = localStorage.getItem("recentModel");
