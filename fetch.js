import { deploy } from "./module/deployLoading.js";
import { api } from "./js/api.js";
import {
  image,
  btnGen,
  seedEl,
  errorMsg,
  spinner,
  input,
  running,
  modelInput,
  negativePrompt,
  inference,
  inferenceSlider,
  guidance,
  guidanceSlider,
  schedulerSelect,
} from "./js/variabel.js";

export function run() {
  btnGen.disabled = true;
  spinner.style.display = "inline-block";
  btnGen.classList.add("btn-secondary");
  var input = document.getElementById("input");

  console.log("proses: " + input.value);
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/" + modelInput.value,
      {
        headers: {
          Authorization: "Bearer " + api,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }
  query({
    inputs: '"' + input.value + '"',
    prompt: '"' + input.value + '"',
    negative_prompt: '"' + negativePrompt.value + '"',
    model_id: '"' + modelInput.value + '"',
    seed: seedEl.value,
    num_inference_steps: inferenceSlider.value,
    guidance_scale: parseFloat(guidanceSlider.value),
    // multi_lingual: "yes",
    enhance_prompt: "yes",
    dropdown: schedulerSelect.value,
    scheduler: schedulerSelect.value,
  })
    .then((response) => {
      btnGen.disabled = false;
      btnGen.classList.remove("btn-secondary");
      console.log(response);
      image.src = URL.createObjectURL(response);
      console.log(URL.createObjectURL(response));
      spinner.style.display = "none";
      running.style.display = "none";
      image.style.opacity = "1";
      if (response.size < 200) {
        deploy();
        image.style.opacity = "0";

        errorMsg.innerHTML = `Proses deploy model...
        <br>
        Jika di run tapi masih proses deploy :
        <ul>
        <li>Pastikan nama model tidak typo</li>
       <li>Jika tidak ada typo, Run kembali setelah beberapa saat</li>
        <li>Cek kembali Access Token</li>
        <li>Model tersebut tidak dapat di deploy</li>
        </ul>
          `;
      }
    })
    .catch((error) => {
      console.log(error);
      running.style.display = "none";
      btnGen.disabled = false;
      btnGen.classList.remove("btn-secondary");
    });
}
