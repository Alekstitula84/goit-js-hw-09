!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(o)}));var o=void 0}();
//# sourceMappingURL=01-color-switcher.bc890cbd.js.map
