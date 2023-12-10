var image = "images";
var recent1, recent2, recent3;
var obj = {
  recent1: image,
  recent2: JSON.stringify(recent1),
  recent3: JSON.stringify(recent2),
};

export function saveRecent() {
  console.log(JSON.stringify(localStorage.getItem("recent")));
  localStorage.setItem("recent", JSON.stringify(obj));
}
