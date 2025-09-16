// heart count implement

let count = 0;
const heartBtn = document.getElementsByClassName("heart-btn");
for (const heart of heartBtn) {
  heart.addEventListener("click", function () {
    count++;
    document.getElementById("heartText").innerText = count;
  });
}
