$(document).ready(function(){$("#nav").onePageNav({currentClass:"active",changeHash:!1,scrollSpeed:750})}),$(document).ready(function(){$("#nav-min").onePageNav({currentClass:"active",changeHash:!1,scrollSpeed:750})}),$(document).ready(function(){$('a[href="#other"]').click(function(){var e=$(this).attr("href");return $("body").animate({scrollTop:$(e).offset().top},750),!1})}),$(document).ready(function(){$.goup({location:"right",locationOffset:25,bottomOffset:20,zIndex:9999,containerRadius:4,containerColor:"#008ee6",containerClass:"button_up",title:"Go UP!",titleAsText:!1})});