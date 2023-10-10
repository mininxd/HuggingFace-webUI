import { auth } from "./js/api.js";
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

export function process() {
  btnGen.disabled = true;
  btnGen.classList.add("btn-secondary");
  var input = document.getElementById("input");

  console.log("proses: " + input.value);
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/" + modelInput.value,
      {
        headers: {
          Authorization: "Bearer " + auth,
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

      if (response.size < 500) {
        errorMsg.innerHTML = `Error : <br><ul>
          <li>Cek kembali prompt kamu</li>
          <li>Ada typo saat penulisan model</li>
          <li>Model tersebut tidak bisa di deploy</li>
          <li>Coba untuk mengubah seed</li>
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
