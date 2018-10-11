codes = ["834563","123456"]
var html = document.getElementsByTagName('html')[0];
html.setAttribute('class', 'normal');

$(function () {
	$(".content").click(function () {

		var value = $(this).find(".number").text();
	
		if (value !== "<") {
			$(".numberinput").each(function () {
				var a = $(this).text();
				if (!a) {
					$(this).text(value);
					$(this).addClass("nocircle");
					return false;
				}
			});
		} else {
			$($(".numberinput").get().reverse()).each(function () {
				var a = $(this).text();
				if (a) {
					$(this).text("");
					$(this).removeClass("nocircle");
					return false;
				}
			});
		}
		code = ""
		for(i=1;i<7;i++){
			code+=document.getElementById("d"+i).textContent;
		}
		


		
		console.log(code);
		if(code.length > 5){
			if(codes.includes(code)){
				document.body.style.backgroundColor = "green";
			    $.get("http://192.168.1.130/unarmLaser", function(data, status){
				});
			}else{
				html.setAttribute('class', 'denied');
				setTimeout("html.setAttribute('class', 'normal')", 200);
				setTimeout("html.setAttribute('class', 'denied')", 300);
				setTimeout("html.setAttribute('class', 'normal')", 500);
			for(i=1;i<7;i++){	
				$($(".numberinput").get().reverse()).each(function () {
				var a = $(this).text();
				if (a) {
					$(this).text("");
					$(this).removeClass("nocircle");
					return false;
				}
			});
			}

		}
		}else{
			html.setAttribute('class', 'normal');
			document.body.style.backgroundColor = "rgba(130, 130, 130, .1)";
		} 
		
	});
		document.body.style.backgroundColor = "rgba(130, 130, 130, .1)";
});