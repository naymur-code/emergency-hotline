// heart count implement

let count = 0;
const heartBtn = document.getElementsByClassName("heart-btn");
for (const heart of heartBtn) {
  heart.addEventListener("click", function () {
    count++;
    document.getElementById("heartText").innerText = count;
  });
}

// call feature
const collBtn = document.getElementsByClassName("coll-btn");
let coin = parseInt(document.getElementById("coin").innerText);
for (const coll of collBtn) {
  coll.addEventListener("click", function (event) {
    const item = event.target.parentNode.parentNode;
    const callHistory = document.getElementById("call-history");

    if (coin >= 20) {
      alert(
        ` 
       Calling ${item.children[1]?.innerText} ${item.children[3]?.innerText}...
      `
      );

      const newElement = document.createElement("div");
      newElement.classList.add(
        "flex",
        "justify-between",
        "p-4",
        "bg-white",
        "rounded-lg"
      );
      newElement.innerHTML = `
                    <div>
                  <h3 class="font-bold text-lg">${
                    item.children[1]?.innerText
                  }</h3>
                        <p>${item.children[3]?.innerText}</p>
                    </div>              
                       <p>${new Date().toLocaleTimeString()}</p>
      `;
      callHistory.appendChild(newElement);

      coin = coin - 20;
    } else {
      alert("Not coin!");
      return;
    }
    document.getElementById("coin").innerText = coin;
  });
}

// clear history
document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistory = document.getElementById("call-history");
  callHistory.innerHTML = "";
});

// copy btn feature

const copyBtn = document.getElementsByClassName("copy-btn");
let copyCount = parseInt(document.getElementById("copyText").innerText);

for (const copy of copyBtn) {
  copy.addEventListener("click", function (event) {
    alert(`Copy ${event.target.parentNode.parentNode.children[3].innerText}`);
    navigator.clipboard.writeText(
      event.target.parentNode.parentNode.children[3].innerText
    );

    copyCount++;

    document.getElementById("copyText").innerText = copyCount;
  });
}
