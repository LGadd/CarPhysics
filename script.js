// script.js

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// If a theme was previously selected, apply it
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
    }
}

// Event Listener for Theme Toggle Button
themeToggleBtn.addEventListener('click', () => {
    // Toggle between light and dark themes
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
    }
});

// Unity WebGL Integration
// Replace 'Build/yourUnityBuild.json' with the path to your Unity project's Build.json file
// Ensure that Unity's loader script is correctly referenced in index.html
window.addEventListener('load', () => {
    createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "Build/yourUnityBuild.data.unityweb",
        frameworkUrl: "Build/yourUnityBuild.framework.js.unityweb",
        codeUrl: "Build/yourUnityBuild.wasm.unityweb",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Your Company",
        productName: "Car Physics Tool",
        productVersion: "1.0",
    }).then((unityInstance) => {
        // Unity is loaded and running
        console.log("Unity WebGL loaded successfully.");
    }).catch((message) => {
        alert("Failed to load Unity WebGL: " + message);
    });
});
