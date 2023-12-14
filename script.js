//import { hapuswm } from "./module/watermark.js";

import {getPrompt, getRandPrompt} from "./js/promptGen.js"
import {
  loadRand,
  loadGen,
  btnGen,
  promptGenBtn,
  promptGenBtnRan,
  promptGenInput,
  image,
  Xdel,
  errorMsg,
  running,
  spinner,
  seedSlider,
  seedEl,
  imgState,
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
  editBtn,
} from "./js/variabel.js";
import { run } from "./fetch.js";
import { api } from "./js/api.js";

/*function hitung() {
  var i = 0;
  i = 0;
  setInterval(function () {
    i += 0.01;
    running.innerHTML = "Running..." + parseFloat(i).toFixed(2);
  }, 10);
}
*/
btnGen.addEventListener("click", () => generate());
function generate() {
  running.style.display = "block";
  errorMsg.innerHTML = "";
  if (input.value.length < 1) {
    errorMsg.innerHTML = "Masukan Prompt";
    input.focus();
  } else {
    // hitung();
    run();
  }
}

Xdel.addEventListener("click", () => (input.value = ""));

seedSlider.addEventListener("change", () => (seedEl.value = seedSlider.value));

inferenceSlider.addEventListener(
  "change",
  () => (inference.innerHTML = inferenceSlider.value)
);

guidanceSlider.addEventListener(
  "change",
  () => (guidance.innerHTML = guidanceSlider.value)
);

negativeSelect.addEventListener(
  "change",
  () => (negativePrompt.value = negativeSelect.value)
);

promptGenInput.addEventListener("keyup", () =>
{
if(promptGenInput.value.length >= 1) {
  promptGenBtn.style.display = 'block';
  promptGenBtnRan.style.display = 'none';
  
} else {
  promptGenBtn.style.display = 'none';
  promptGenBtnRan.style.display = 'block';
}
})
promptGenBtn.style.display = 'none';


promptGenBtn.addEventListener("click", () => {
  getPrompt();
  promptGenBtn.disabled = true;
  promptGenInput.disabled = true;
  loadGen.style.display = "inline-block";
})

promptGenBtnRan.addEventListener("click", () => {
  getRandPrompt();
  loadRand.style.display = "inline-block";
  promptGenBtnRan.disabled = true;
  promptGenInput.disabled = true;
  
})



//getPrompt();