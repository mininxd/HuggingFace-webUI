import { image } from "../js/variabel.js";
 export async function query(filename) {
  const data = fs.readFileSync(filename);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large",
    {
      headers: {
        Authorization: "Bearer " + api,
      },
      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  return result;
}

query(image).then((response) => {
  console.log(JSON.stringify(response));
});
