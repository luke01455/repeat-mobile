!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t,o,i;t=jQuery,o=t(window),i=t("body"),breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),o.on("load",function(){window.setTimeout(function(){i.removeClass("is-preload")},100)}),browser.mobile&&i.addClass("is-touch"),t(".scrolly").scrolly({speed:2e3}),t("#nav > ul").dropotron({alignment:"right",hideDelay:350}),t('<div id="titleBar"><a href="#navPanel" class="toggle"></a><span class="title">'+t("#logo").html()+"</span></div>").appendTo(i),t('<div id="navPanel"><nav>'+t("#nav").navList()+"</nav></div>").appendTo(i).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"left",target:i,visibleClass:"navPanel-visible"}),"ie"==browser.name||browser.mobile?t.fn._parallax=function(){return t(this)}:(t.fn._parallax=function(){return t(this).each(function(){var e,n,i=t(this);e=function(){i.css("background-position","center 0px"),o.on("scroll._parallax",function(){var e=parseInt(o.scrollTop())-parseInt(i.position().top);i.css("background-position","center "+-.15*e+"px")})},n=function(){i.css("background-position",""),o.off("scroll._parallax")},breakpoints.on("<=medium",n),breakpoints.on(">medium",e)}),t(this)},o.on("load resize",function(){o.trigger("scroll")})),t(".spotlight")._parallax().each(function(){var e,n,o=t(this);e=function(){var e,n,t;o.css("background-image",'url("'+o.find(".image.main > img").attr("src")+'")'),o.hasClass("top")?(t="top",e="-20%",n=0):o.hasClass("bottom")?(t="bottom-only",e=0,n="20%"):(t="middle",e=0,n=0),o.scrollex({mode:t,top:e,bottom:n,initialize:function(e){o.addClass("inactive")},terminate:function(e){o.removeClass("inactive")},enter:function(e){o.removeClass("inactive")}})},n=function(){o.css("background-image",""),o.unscrollex()},breakpoints.on("<=medium",n),breakpoints.on(">medium",e)}),t(".wrapper").each(function(){var e,n,o=t(this);e=function(){o.scrollex({top:250,bottom:0,initialize:function(e){o.addClass("inactive")},terminate:function(e){o.removeClass("inactive")},enter:function(e){o.removeClass("inactive")}})},n=function(){o.unscrollex()},breakpoints.on("<=medium",n),breakpoints.on(">medium",e)}),t("#banner")._parallax()}]);