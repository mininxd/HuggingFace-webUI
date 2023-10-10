import {
  btnGen,
  image,
  Xdel,
  errorMsg,
  running,
  spinner,
  seedSlider,
  seedEl,
  input,
  modelSelect,
  modelOption,
  modelInput,
  negativeSelect,
  negativePrompt,
  inference,
  inferenceSlider,
  guidance,
  guidanceSlider,
  schedulerSelect,
} from "./js/variabel.js";
import { images } from "./fetch.js";

function hitung() {
  spinner.style.display = "inline-block";
  var i = 0;
  i = 0;
  setInterval(function () {
    i += 0.01;
    running.innerHTML = "Running..." + parseFloat(i).toFixed(2);
  }, 10);
}
btnGen.addEventListener("click", () => generate());
function generate() {
  running.style.display = "block";
  errorMsg.innerHTML = "";
  if (input.value.length < 1) {
    errorMsg.innerHTML = "Masukan Prompt";
  } else {
    hitung();
    images();
  }
}
Xdel.addEventListener("click", () => deletePrompt());
function deletePrompt() {
  input.value = "";
}

seedSlider.addEventListener("change", () => seeds());
function seeds() {
  seedEl.value = seedSlider.value;
}
inferenceSlider.addEventListener("change", () => inferences());
function inferences() {
  inference.innerHTML = inferenceSlider.value;
}

guidanceSlider.addEventListener("change", () => guidances());
function guidances() {
  guidance.innerHTML = guidanceSlider.value;
}

modelSelect.addEventListener("change", () => model());
function model() {
  modelInput.value = modelSelect.value;
}

negativeSelect.addEventListener("change", () => negative());
function negative() {
  negativePrompt.value = negativeSelect.value;
}

schedulerSelect.addEventListener("change", () => scheduler());
function scheduler() {
//  console.log(schedulerSelect.value);
}
