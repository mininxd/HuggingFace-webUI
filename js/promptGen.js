import {
  btnGen,
  promptGenBtn,
  promptGenBtnRan,
  promptGenInput,
  input
} from "./variabel.js";

import {AiAuth} from "./a.js";
export function getRandPrompt() {
  fetch('https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=' + AiAuth, 
{
  method: 'POST',
   body: JSON.stringify({"prompt": 
      { "text": "Write a random good image prompt"} 
   }),
   
   headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  }
  
}).then((res) => {
  return res.json();
}).then((data) => {
    // console.log(data.candidates[0].output);
  input.value = JSON.stringify(data.candidates[0].output).toString().replace(/"/g,"");
  promptGenBtnRan.disabled = false;
  promptGenInput.disabled = false;
  promptGenBtnRan.classList.remove("btn-secondary");
  
}).catch((error) => {
  console.log(error)
})

}


export function getPrompt() {
 
  fetch('https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=' + AiAuth, 
{
  method: 'POST',
   body: JSON.stringify({"prompt": 
      { "text": "Make image prompt of " + promptGenInput.value} 
   }),
   
   headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  }
  
}).then((res) => {
  return res.json();
}).then((data) => {
  // console.log(data.candidates[0].output);
  input.value = JSON.stringify(data.candidates[0].output).toString().replace(/"/g,"");
  promptGenBtn.disabled = false;
  promptGenInput.disabled = false;
  btnGen.classList.remove("btn-secondary");
  
}).catch((error) => {
  console.log(error)
})
}