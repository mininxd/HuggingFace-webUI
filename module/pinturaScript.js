import { image } from "../js/variabel.js";
import { openDefaultEditor } from "./pintura.js";

image.addEventListener("click", () => editorScreen());
function editorScreen() {
  
  const editor = openDefaultEditor({
    src: image,
  });
  editor.on("process", (res) =>
    image.setAttribute("src", URL.createObjectURL(res.dest))
  );
}
