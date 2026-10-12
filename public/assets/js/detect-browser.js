// detect-browser.js

(function() {
    // Check if the browser is Safari
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        alert("You are using Safari. Unfortunately, this theme does not properly display + projects in Safari. Consider using a Chromium-based browser like Chrome, Edge, or Arc.");
        // window.location.href = window.history.back;
    }
})();

console.log("Browser detection script loaded.");