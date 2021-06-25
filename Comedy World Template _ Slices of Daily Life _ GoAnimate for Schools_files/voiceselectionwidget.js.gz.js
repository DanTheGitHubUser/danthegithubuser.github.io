var VoiceSelectionWidget;(function(){VoiceSelectionWidget=function(g,c,d){var f=c;var h=null;var e=null;(function(){for(var n in c){if(!e){e=n}var l=jQuery(".templates .categorytab",g).clone();l.data("lang",n).addClass(n);(function(){var i=n;jQuery(".flag",l).click(function(){a.switchLanguageTab(i)}).attr("title",c[n].desc)})();var j=c[n].options;for(var k=0;k<j.length;k++){var m=jQuery(".templates .option",g).clone();m.data("voice-id",j[k].id);m.data("voice-info",j[k]);m.click(function(){a.selectVoiceById(jQuery(this).data("voice-id"))});jQuery("div.cflag",m).addClass(j[k].country||("lg_"+j[k].lang));jQuery("div.sex",m).addClass(j[k].sex=="M"?"male":"female");jQuery("span.desc",m).html(j[k].desc);if(!j[k].plus||d){jQuery("span.plus",m).hide()}(function(){var i=j[k].demo;i||m.find(".playercontrol",g).hide();m.find(".playercontrol .button",g).click(function(o){_playing=jQuery(this).hasClass("play");var p=jQuery(this).get(0);jQuery(".playercontrol .button",g).each(function(q,r){var s=jQuery(r);if(_playing){jQuery(".jplayer",g).jPlayer("setMedia",{mp3:i}).jPlayer("play")}else{jQuery(".jplayer",g).jPlayer("stop")}if(p==r&&_playing){s.removeClass("play");s.addClass("stop")}else{s.removeClass("stop");s.addClass("play")}})})})();m.appendTo(jQuery(".optionscontainer",l))}l.appendTo(jQuery(".voiceselector",g))}})();jQuery(".jplayer",g).jPlayer({ready:function(){if(typeof console!="undefined"){console.log("jplayer ready")}},swfPath:"http://goanimate.com/static/go/js/jquery/",pause:function(){jQuery(".playercontrol .button",g).removeClass("stop").addClass("play");jQuery(".jplayer",g).jPlayer("stop")},ended:function(){jQuery(".playercontrol .button",g).removeClass("stop").addClass("play");jQuery(".jplayer",g).jPlayer("stop")}});var b=function(){};var a={onChange:function(i){b=i},getSelectedVoice:function(){return h},selectVoiceById:function(i){var k=jQuery(".voiceselector .option",g).filter(function(){return jQuery(this).data("voice-id")==i});if(k.size()<=0){return}var j=(h!=i);h=i;jQuery(".voiceselector .option",g).removeClass("selected");a.switchLanguageTab(k.eq(0).addClass("selected").parents(".voiceselector .categorytab").data("lang"));if(j){b(k.eq(0))}},switchLanguageTab:function(i){jQuery(".voiceselector .categorytab",g).removeClass("selected").filter(function(){return jQuery(this).hasClass(i)}).addClass("selected")}};a.switchLanguageTab(e);return a}})();var CCBrowserSimple=function(d,f){var e=1;var b=null;var c={};var h=function(){for(var j=0;j<f.length;j++){c[f[j].id]=f[j]}};var i=function(){jQuery(".cc",d).empty().removeClass("enabled");var k=0;jQuery(".cc").removeData("ccid");jQuery.each(f.slice((e-1)*10,Math.min(e*10,f.length+1)),function(j,l){jQuery(".cc",d).eq(k).addClass("enabled").data("ccid",l.id).html('<img src="'+l.thumb_url+'" style="visibility: hidden" />').click(function(){b=jQuery(this).data("ccid");a()}).find("img").load(function(){var p=jQuery(this).width();var q=jQuery(this).height();var n=jQuery(this).parent().width();var m=jQuery(this).parent().height();var o=Math.min((m-5)/q,n/p);jQuery(this).css("width",o*p+"px");jQuery(this).css("height",o*q+"px");jQuery(this).css("left",(n-o*p)/2+"px");jQuery(this).css("top",(m-o*q)/2+"px");jQuery(this).css("visibility","visible")});k++});jQuery(".leftarrowcontainer",d)[(e<=1)?"addClass":"removeClass"]("disabled");jQuery(".rightarrowcontainer",d)[(e>=g.getPageCount())?"addClass":"removeClass"]("disabled")};var a=function(){jQuery(".cc",d).removeClass("selectedcc");jQuery(".cc",d).filter(function(){return b&&jQuery(this).data("ccid")==b}).eq(0).addClass("selectedcc")};jQuery(".leftarrow",d).click(function(j){if(jQuery(this).parent().hasClass("disabled")){return}g.prev();a()});jQuery(".rightarrow",d).click(function(){if(jQuery(this).parent().hasClass("disabled")){return}g.next();a()});d.bind("pageChanged",function(j){jQuery(".pagenumdisplay",d).html(g.getPageCount()>0?(g.getPageNumber()+" / "+g.getPageCount()):"")});var g={getPageNumber:function(){return e},getPageCount:function(){return Math.ceil(f.length/10)},setSelectedCcById:function(l){var k=-1;for(var j=0;j<f.length;j++){if(f[j].id==l){k=j}}if(k>=0){b=l;g.goToPage(parseInt(k/10,10)+1);a()}},getSelectedCc:function(){return(b?c[b]:null)},next:function(){var j=g.getPageCount();if((e+1)>j){e=j;return}e++;d.trigger("pageChanged");i()},prev:function(){if(e<=1){e=1;return}e--;d.trigger("pageChanged");i()},goToPage:function(j){if(j>0&&j<=g.getPageCount()){e=j;d.trigger("pageChanged");i()}}};h();d.trigger("pageChanged");i();return g};
