"use strict";var RMVP={isHomepage:function(){return"/"===window.location.pathname||1===window.location.pathname.indexOf("webhp")},toUrl:function(e){return-1===e.indexOf("//")&&(e="//"+e),e},isUrl:function(e){return/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(e)},onLoad:function(){RMVP.html=document.getElementsByTagName("html")[0],RMVP.search=document.getElementById("lst-ib"),console.log("RMVP loaded"),RMVP.search.addEventListener("keyup",function(e){if(13===(e.which||e.keyCode)){var t=RMVP.toUrl(RMVP.search.value);if(RMVP.isUrl(t))return console.log("RMVP redirect"),RMVP.html.style.display="none",window.location=t,e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1}return!0})}};RMVP.isHomepage()&&document.addEventListener("DOMContentLoaded",RMVP.onLoad,!1);