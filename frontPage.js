//User operators START
let u1Day = ['01', 11, 14, 16];
let u2Day = ['02', 11, 17];
let u3Day = [20];
let user1 = new user('Stanislav','Smirnov','Nikolaevich','admin','admin', dayArr(u1Day));
let user2 = new user('Evgenia', 'Kozhukhova', 'Aleksandrovna', 'example', 'example', dayArr(u2Day));
let user3 = new user('Evgeniy', 'Abolin', 'Sergeevich', 'example', 'example');
function dayArr(usable) {
	day = usable;
return day;
}
function user(name, midleName,secondName, login, password, day) {
	this.name = name;
	this.midleName = midleName;
	this.secondName = secondName;
	this.login = login;
	this.password = password;
	this.day = day;
}
//Logic for .CalCell constructor STAR
	Date.prototype.getDays = function () {
	   	let check = new Date(this.getTime());
	    check.setDate(32);
	return 32 - check.getDate();
	};

//Debug getDays
	$(function() {
			$("#outputs").on("click", function() {
				alert(new Date().getDays());
			});
	});
//Logic for .CalCell constructor END
//Users operators END
/**/
//Onload scripts START
window.onload = function() {
//CrewList adder START
/*
There can be a code, but sompthing going wrong!! 
*/
//CrewList adder END
/**/
//.show and .hide START
$("#crewListHead").click(function() {
	$("#crewListPersona").fadeToggle(600)
});
	let upperCount = 0;
	$('#pName').click(function() {
		if (upperCount == 0) {
			upperCount++;
			$("#upper").hide(300);
		} else {
			upperCount--;
			$("#upper").show(300);
		}
	});
//.show and .hide END
/**/
//LoginBox START
	let count = 0;
	function logBox() {
		let countIn = count;
		let header = document.getElementById('headerBox');
		let diva = document.createElement("div");
		let par = document.createElement("p");
		let aPar = document.createElement("p");
		let	loginText = document.createTextNode("  :Log");
		let passText = document.createTextNode("  :Pas");
		let loginBox = document.createElement("input");
		let passBox = document.createElement("input");
		let submit = document.createElement("input");
			submit.setAttribute("type", "submit");
			submit.setAttribute("value", "Send");
			submit.id = 'remover';
		if (count == 0) {
			count++;
			par.appendChild(loginBox);
			par.appendChild(loginText);
			aPar.appendChild(passBox);
			aPar.appendChild(passText);
			par.appendChild(aPar);
			par.appendChild(submit);
			diva.appendChild(par);
			header.appendChild(diva);
			let remover = document.getElementById('remover');
			remover.addEventListener("click", logBoxCut);
		}
		function logBoxCut() { 
			count--;
			let remover = document.getElementById('remover');
			remover.addEventListener("click", header.removeChild(diva));
			header.removeChild(header.diva);
		}
	}
	let logInBox = document.getElementById("login");
	logInBox.addEventListener("click", logBox);
//LoginBox END
/**/
//.calCell dynamic highlight START
	$('.users').mouseenter(function(){
	  	let uIdFinder = this.id;
	  	let userNum = (getParse(uIdFinder));
	  		function getParse(uId) {
				let result = 0;
					for (let i = 0; i < uId.length; i++) {
						let temporaryGetParseCharAt = uId.charAt(i);
							if (isNaN(temporaryGetParseCharAt) === false) {
								result = temporaryGetParseCharAt;
							}
					}
			return result;
			} 
			function uDayNumberConstructor(num) {
				let interimRes = ("u" + num + "Day");
				let results = eval(interimRes);
				return results;
			}
		let interrimResForGetNum = eval(uDayNumberConstructor(userNum));
		let $calCellHighLight = eval(getNum(interrimResForGetNum));
	  	$calCellHighLight.css('color', 'goldenrod');	
	});
	$('.users').mouseout(function(){
		$('.calCell').css('color', 'khaki');
		removeHighLightFromCell();
	});				
	function removeHighLightFromCell() {
		$('.calCell').hover(function(){
			//:hover color
	  		$(this).css("color", 'goldenrod');
		}, function () {
	  		//not :hover color
	  	$(this).css("color", 'khaki');
		});
	}
//.calCell dynamic highlight END
/**/
//From SL START
	$(function() {
		$("#add").on("click", function() {
			let val = $("input").val();
			if (val !== '') {
				let elem = $("<li></li>").text(val);
				$(elem).append("<button class='rem'>X</button>");
				$("#newList").append(elem);
				$("input").val("");
				$(".rem").on("click", function() {
					$(this).parent().remove();
				});
			}
		});
	});
//From SL END
//Onload scripts END
/**/
//Function for dynamicH Highlight START
	function getNum(uArr) {
	let num = uArr.length;
	let localCount = 0;
	let pieceRght = (" +')");
	let result = ("$('.calCell:contains('+ ");
		for (let i = 0; i < num; i++) {
			localCount = i;
			function localLft(numLft) {
				if (numLft > 0) {
					lft = (".calCell:contains('+ ");
				} else {
					lft = "";
				}
				return lft;
			}
			function localRght (numRght) {
				if (numRght == (num - 1)) {
					rght = (pieceRght + ("');"));
				} else {
					rght = (pieceRght + (","));	
				}
				return rght;
			}
			function localZeroFinder(number) {
				switch (number) {
					case '01':
						return "'01'";
					break;
					case '02':
						return "'02'";
					break;
					case '03':
						return "'03'";
					break;
					case '04':
						return "'04'";
					break;
					case '05':
						return "'05'";
					break;
					case '06':
						return "'06'";
					break;
					case '07':
						return "'07'";
					break;
					case '08':
						return "'08'";
					break;
					case '09':
						return "'09'";
					break;
				}
				return number;
			}
	
			result += (localLft(i) + localZeroFinder(uArr[i]) + localRght(i));
		}
	return result;
	}
}
//Function for dynamicH Highlight END
/**/
//Dynamic calCell add START
	$(function() {
	let wCount = 1;
	let table = $("<table border ='2'></table>").attr('id', 'calCellTab');
	let thead = $("<thead></thead>").attr('id', 'calCellTabHead');
	let tbody = $("<tbody></tbody>").attr('id', 'calCellTabBody');
	let trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"");
	let wDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
	"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
	"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
	"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
	"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	$('#callBox').append(table);
	$("#calCellTab").append(thead);
	$("#calCellTab").append(tbody);
		for (let i = 0; i < 7; i++) {
			let day = wDay[i];
			let tHeadIns = $("<th></th>").addClass("tHead").text(day);
			$(calCellTabHead).append(tHeadIns);
		} 
		for (let i = 0; i < (new Date().getDays()); i++) {
			$(calCellTabBody).append(trBody);
			if (wDay[i]  != "Sunday") {
				if (i < 9) {
					let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ ("0" + (i + 1)) +"</button>");
					$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
				} else {
					let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ (i + 1) +"</button>");
					$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
				}
			}
    		if (wDay[i]  == "Sunday") {
    			if (i < 9) {
    				let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ ("0" + (i + 1)) +"</button>");
    				$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
    				$(calCellTabBody).append(trBody);
    			} else {
    				let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ (i + 1) +"</button>");
    				$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
    				$(calCellTabBody).append(trBody);
    			}
    			wCount++;
    			trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"")
    		}
		} 	
	});
//Dynamic calCell add END