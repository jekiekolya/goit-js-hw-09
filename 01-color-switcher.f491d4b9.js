!function(){const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n=null;function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(t){n=setInterval(e,1e3),t.currentTarget.disabled=!0})),t.btnStop.addEventListener("click",(function(e){clearInterval(n),t.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.f491d4b9.js.map
