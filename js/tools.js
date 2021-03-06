function href(loc, type){
	if(loc.match("http") != null || loc.match("ts3server") != null){
		console.log(loc);
		if(type != null){
			switch(type){
				case "parent": window.open(loc, '_blank'); break;
			}
		}
		else{
			window.location.href = loc;
		}
	}
	else{
		history.pushState("", "", loc + "/");
		document.querySelector("#pdp").closeDrawer();
		if(type != "nochange"){
			$("#toolbar-title").html(title(loc.split("/")));
			$("#content").fadeOut(250, function(){$("#content").html(content(loc.split("/"))).fadeIn(250);});
		}
	}
}
function toast(msg, dur, hide){
	dur = ((dur == null) ? 3000 : dur);
	$("#toast").attr("duration", dur);
	if(hide){msg += " <span class='link' style='color: #FF9800; float: right; margin-left: 10px;' onClick='document.querySelector(\"#toast\").hide()'>OK</span>";}	
	$("#toast").html(msg);
	document.querySelector("#toast").show();
}
function keyevent(gkeycode, func, e){
	if(e.keyCode == gkeycode){
		func();
	}
}
function getUrl(){
	return window.location.pathname.split('/').slice(1);
}
function l(msg){
	console.log(msg);
}
function ajax(url, data){
	return $.ajax({
		type: "POST",
		url: url,
		data: data,
		async: false
		}).responseText;
}

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}
String.prototype.hexDecode = function(){
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}