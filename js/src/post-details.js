// build time:Sun Oct 28 2018 10:04:57 GMT+0800 (中国标准时间)
$(document).ready(function(){t();NexT.utils.needAffix()&&i();e();function t(){var t=".post-toc";var i=$(t);var e=".active-current";i.on("activate.bs.scrollspy",function(){var i=$(t+" .active").last();a();i.addClass("active-current")}).on("clear.bs.scrollspy",a);$("body").scrollspy({target:t});function a(){$(t+" "+e).removeClass(e.substring(1))}}function i(){var t=$(".header-inner").height();var i=parseInt($(".main").css("padding-bottom"),10);var e=CONFIG.sidebar.offset_float===0?t+CONFIG.sidebar.offset:t;$(".sidebar-inner").affix({offset:{top:e,bottom:i}});$(document).on("affixed.bs.affix",function(){a(document.body.clientHeight-100)})}function e(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-100;a(t)},0)});a(document.body.clientHeight-100);var i=NexT.utils.getScrollbarWidth();$(".post-toc").css("width","calc(100% + "+i+"px)")}function a(t){t=t||"auto";$(".post-toc").css("max-height",t)}});$(document).ready(function(){var t=$("html");var i=200;var e=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var a="sidebar-nav-active";var o="sidebar-panel-active";if(t.hasClass(a)){return}var s=$("."+o);var n=$("."+t.data("target"));e?s.velocity("transition.slideUpOut",i,function(){n.velocity("stop").velocity("transition.slideDownIn",i).addClass(o)}):s.animate({opacity:0},i,function(){s.hide();n.stop().css({opacity:0,display:"block"}).animate({opacity:1},i,function(){s.removeClass(o);n.addClass(o)})});t.siblings().removeClass(a);t.addClass(a)});$(".post-toc a").on("click",function(i){i.preventDefault();var a=NexT.utils.escapeSelector(this.getAttribute("href"));var o=$(a).offset().top;e?t.velocity("stop").velocity("scroll",{offset:o+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:o},500)});NexT.motion.middleWares.sidebar=function(){var t=$(".post-toc-content");if(CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always"){if(t.length>0&&t.html().trim().length>0){NexT.utils.displaySidebar()}}}});
//rebuild by neat 