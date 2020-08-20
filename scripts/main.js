"use strict";!function(){var e=function(e){return window.environment=-1!==e.indexOf("localhost")?"development":-1!==e.indexOf("staging")?"staging":"production",window.environment}(window.location.hostname);window.Sentry&&window.Sentry.init({dsn:"https://dae18034fa014d1eb5a5ac9d8f0659da@sentry.io/1518770",environment:e})}(),function(){if("development"!==window.environment)for(var e=document.querySelectorAll(".navigation .popover-link"),t=0;t<e.length;t++)e[t].href.match(/#/g)&&(e[t].href="https://milligram.io/#"+e[t].href.split("#")[1])}(),function(){if(window.ClipboardJS){for(var e=document.querySelectorAll(".code:not(.lang-md)"),t=0;t<e.length;t++)e[t].insertAdjacentElement("beforebegin",function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}('<button class="button--clipboard" data-clipboard-action="copy" title="Copy"><img src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy"></button>')),e[t].previousElementSibling.setAttribute("data-clipboard-text",function(e){return e.replace(/\$ /g,"").replace(/<!--(.*?)-->/g,"").replace(/\/\* (.*?)\/\ */g,"").replace(/\n\s*\n/g,"\n").trim()}(e[t].firstChild.innerHTML));var n=new window.ClipboardJS(".button--clipboard");n.on("success",function(e){e.clearSelection(),e.trigger.classList.add("tooptip--clipboard"),setTimeout(function(){e.trigger.classList.remove("tooptip--clipboard")},500)}),n.on("error",function(e){console.error("[clipboard]",e.trigger)})}}(),function(){if("development"!==window.environment){!function(e,t,n,o,r,i,c){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,i=t.createElement(n),c=t.getElementsByTagName(n)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),window.ga("create","UA-24389952-15","auto"),window.ga("send","pageview")}}(),function(){function e(e){for(var t=0;t<o.length;t++)o[t].classList.remove("popover-open")}function t(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).classList.contains("popover-open")?document.querySelector(this.getAttribute("href")).classList.remove("popover-open"):(e(),document.querySelector(this.getAttribute("href")).classList.add("popover-open")),t.stopImmediatePropagation()}for(var n=document.querySelectorAll("[data-popover]"),o=document.querySelectorAll(".popover"),r=0;r<n.length;r++)n[r].addEventListener("click",t);document.addEventListener("click",e)}(),function(){for(var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},t=document.querySelectorAll(".code-content"),n=0;n<t.length;n++)t[n].innerHTML=function(t){return String(t).replace(/[&<>"']/g,function(t){return e[t]})}(t[n].innerHTML)}(),function(){"serviceWorker"in window.navigator&&"https:"===window.location.protocol&&window.navigator.serviceWorker.register("/service-worker.js")}(),function(){function e(){if(this.status<200&&this.status>=400)return void console.error("[error] There was a connection error of some sort");var e=JSON.parse(this.response).version||"";t.innerHTML=t.innerHTML+" <br><i><small>"+t.getAttribute("data-version")+" v"+e+"</small></i>",n.setAttribute("href","https://github.com/milligram/milligram/archive/v"+e+".zip")}var t=document.querySelector(".description"),n=document.querySelector(".download");if(t&&n){var o=new window.XMLHttpRequest;o.open("GET","//raw.githubusercontent.com/milligram/milligram/master/package.json",!0),o.onload=e,o.send()}}();