codes = ["950643"]
var html = document.getElementsByTagName('html')[0];
html.setAttribute('class', 'normal');
tries = 0;


let socket = new WebSocket("ws://192.168.1.30:8080");
    readySocket();
    function readySocket() {
      socket.onmessage = function (event) {
		  console.log(event.data)
        const data = JSON.parse(event.data);
		if(data.topic == "showScreen"){
			document.getElementById("overlay").setAttribute("style","visibility:hidden;");	
		}
		if(data.topic == "hideScreen"){
			document.getElementById("overlay").setAttribute("style","visibility:visible;");	
		}
	}
}
    setInterval(() => {
      if (socket.readyState === WebSocket.CLOSED) {
        socket = new WebSocket("ws://192.168.1.30:8080");
        readySocket();
      }
	}, 1000);
	
$(function () {
	$(".content").click(function () {

		var value = $(this).find(".number").text();
		var audio = new Audio(value+'.mp3');
		audio.play();
	
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
			tries++
			if(codes.includes(code)){
				document.body.style.backgroundColor = "green";
			    $.get("http://192.168.1.30:3000/externalTrigger/exitPuzzle", function(data, status){
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
	