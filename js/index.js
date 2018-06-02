window.onload=function(){
	document.getElementById("devalor").onkeyup = function(){Divisa()};
	document.getElementById("a").onkeyup = function(){Divisa()};
	document.getElementById("b").onkeyup = function(){Divisa()};
};

function Divisa(){
	var api_key="ba39781de0098e18c387947ea231c859";
	var a = document.getElementById("a").value; 
	var b = document.getElementById("b").value;
	var xmlHttp = new XMLHttpRequest();

	var url = "http://data.fixer.io/api/latest?access_key="+api_key+"&symbols="+a+","+b;
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange =function(){
		if (xmlHttp.readyState == 4 && xmlHttp.status ==200) {
			var result = xmlHttp.responseText;

			var jsResult =JSON.parse(result);
			var oneUnit = jsResult.rates[a]/jsResult.rates[a];
			var cantidad = document.getElementById("devalor").value;
			document.getElementById("avalor").value = (oneUnit*cantidad).toFixed(6);

		}
	}
}
