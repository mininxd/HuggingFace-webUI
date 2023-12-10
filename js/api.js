import { btnGen, inputApi, loginEl } from "./variabel.js";
var getAPI = localStorage.getItem("hugface-api-mininxd");
export const api = getAPI;
var apikey = document.getElementById("apikey");
var showApi = document.getElementById("showApi");

var promptGenerator = document.getElementById("promptGenLoginFirst");
export const promptGenBtn = document.getElementById("promptGenBtn");
export const promptGenBtnRan = document.getElementById("promptGenBtnRan");
export const promptGenInput = document.getElementById("promptGenInput");

apikey.innerHTML = "Your API : ******************";

showApi.addEventListener("click", () => show());
function show() {
  apikey.innerHTML = "Your API : " + getAPI;
  showApi.style.display = "none";
}

if (getAPI == null) {
  inputApi.style.display = "block";
  loginEl.style.display = "block";
  loginEl.addEventListener("click", () => login());
  function login() {
    if (inputApi.value.length < 5) {
      inputApi.focus();
    } else {
      localStorage.setItem("hugface-api-mininxd", inputApi.value);
      location.reload();
    }
  }
  btnGen.disabled = true;
  showApi.style.display = "none";
  apikey.innerHTML =
    "<a href='https://huggingface.co/settings/tokens'> Get huggingface Access Token </a>";
  apikey.style.fontSize = "16px";
  promptGenerator.style.display = "block";
  promptGenBtn.disabled = true;
  promptGenBtn.style.display = "none";
  promptGenBtnRan.disabled = true;
  promptGenBtnRan.style.display = "none";
  promptGenInput.disabled = true;
}

document.getElementById("deleteApi").addEventListener("click", () => del());
function del() {
  localStorage.removeItem("hugface-api-mininxd");
  location.reload();
}
