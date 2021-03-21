function getshowResult(){
	return document.getElementById("showResult-value").innerText;
}

function printshowResult(num){
	document.getElementById("showResult-value").innerText = num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}

function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText = num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}

// Função que limpa  a calculadora
function erase() {
    var out = document.getElementById('output-value');
    out.textContent = '';
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printshowResult("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var showResult=getshowResult();
			if(output==""&&showResult!=""){
				if(isNaN(showResult[showResult.length-1])){
					showResult= showResult.substr(0,showResult.length-1);
				}
			}
			if(output!="" || showResult!=""){
				output= output==""?output:reverseNumberFormat(output);
				showResult=showResult+output;
				if(this.id=="="){
					var result=eval(showResult);
					printOutput(result);
					printshowResult("");
				}
				else{
					showResult=showResult+this.id;
					printshowResult(showResult);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}