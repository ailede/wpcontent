!function(){var r=!1;_load=function(){r||jQuery(function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.setAttribute("src",CZRParams.mainScriptUrl),t.setAttribute("id","tc-scripts"),t.setAttribute("defer","defer"),e&&e.appendChild(t),r=!0})};var t=function(e){e=e||0,void 0!==window.jQuery?_load():e<30?setTimeout(function(){t(++e)},200):alert("Customizr problem : jQuery.js was not detected on your website")},e=document.querySelectorAll('[src*="wp-includes/js/jquery/jquery.js"]');e[0]&&e[0].addEventListener("load",function(){t()});try{t()}catch(e){console.log("tc-init error",e)}}();