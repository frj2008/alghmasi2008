
// ملف: script.js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("actionButton");
    if (button) {
        button.addEventListener("click", () => {
            alert("مرحباً بك في الموقع!");
        });
    }
});
