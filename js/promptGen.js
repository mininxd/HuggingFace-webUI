import {
  btnGen,
  promptGenBtn,
  promptGenBtnRan,
  promptGenInput,
  input
} from "./variabel.js";

import {AiAuth} from "./a.js";
export function getRandPrompt() {
  fetch("https://api.mininxd.my.id/gemini/?q= make an image generator prompt, only prompt").then((res) => {
  return res.json();
}).then((data) => {
    // console.log(data.text);
  input.value = JSON.stringify(data.text).toString().replace(/"/g,"");
  promptGenBtnRan.disabled = false;
  promptGenInput.disabled = false;
  loadRand.style.display = "none";
  
}).catch((error) => {
  console.log(error)
})

}


export function getPrompt() {
 
  fetch(`https://api.mininxd.my.id/gemini/?q=make an prompt of ${promptGenInput.value}, image prompt, and only prompt`).then((res) => {
  return res.json();
}).then((data) => {
  // console.log(data.text);
  input.value = JSON.stringify(data.text).toString().replace(/"/g,"");
  promptGenBtn.disabled = false;
  promptGenInput.disabled = false;
  loadGen.style.display = "none";
  
}).catch((error) => {
  console.log(error)
})
}
