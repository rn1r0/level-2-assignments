

let clickCount = 0;

// checked if theres a stored click count
if (localStorage.getItem("clickCount")) {
  clickCount = parseInt(localStorage.getItem("clickCount"));
  document.getElementById("clickCount").textContent = clickCount;
}

// Update click count and display it to the user
function updateClickCount() {
  clickCount++;
  document.getElementById("clickCount").textContent = clickCount;
  localStorage.setItem("clickCount", clickCount);
}

// Handle button clicks
document.getElementById("clickBtn").addEventListener("click", function () {
  if (clickBtn) {
    updateClickCount();
  }
});
     