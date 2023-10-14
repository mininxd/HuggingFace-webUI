import { errorMsg, btnGen, deployLoading, deployBar } from "../js/variabel.js";

export function deploy() {
  btnGen.style.display = "none";
  deployBar.style.display = "block";
  let i = 0;
  var timer = setInterval(function () {
    i++;
    console.log(i);
    if (i == 30) {
      deployBar.style.display = "none";
      btnGen.style.display = "block";
      errorMsg.style.display = "none";
      clearInterval(timer);
    }
  }, 1000);
}
