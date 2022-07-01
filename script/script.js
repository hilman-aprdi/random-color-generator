//date & time
 function showDateTime() {
 	let date = new Date(),
 		dayList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
 		monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],

 		//current date
 		today = dayList[date.getDay()] + " " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear() + " ",

 		//current time 
 		time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

 	document.querySelector("#date").innerHTML = today + time;
 }

 setInterval(showDateTime, 1000);

 //get user battery
 let battery = navigator.getBattery().then((battery) => {
 	let level = Math.round(battery.level * 100) + "%";
 	x.style.width = level;
 	document.querySelector("#number").innerHTML = level;
 });

 //user device name
 document.querySelector("#device").innerHTML = WURFL.complete_device_name;

 //dark mode 
 const dark = document.querySelector("#dark"),
 	content = document.querySelector(".cont"),
 	topBox = document.querySelector(".topBox"),
 	title = content.children[0],
 	info = content.children[3];

 dark.addEventListener("click", () => {
 	function bg(el, hex) {
 		el.style.background = hex;
 	}
 	if (dark.checked) {
 		dark.nextElementSibling.innerHTML = "🌙";
 		document.body.style.background = "#002952";
 		info.style.color = "#fff";
 		bg(topBox, "#001429");
 		bg(title, "#001429");
 		bg(content, "#003d7a");
 	} else {
 		dark.nextElementSibling.innerHTML = "☀️";
 		document.body.style.background = "#7b9aec";
 		info.style.color = "#000";
 		bg(topBox, "#0057ff");
 		bg(title, "#0057ff");
 		bg(content, "#fff");
 	}
 });
 
 
 const minus = document.querySelector("#minus"),
 	add = document.querySelector("#add"),
 	numPlace = document.querySelector("#numPlace"),
 	x = document.querySelector("#battery");

 //plus button
 add.addEventListener("click", () => {
 	if (numPlace.value < 100) {
 		let current = Number(numPlace.value);
 		numPlace.value = current + 1;
 		numPlace.setAttribute("value", numPlace);
 	} else {
 		warning();
 	}
 });

 //minus button
 minus.addEventListener("click", () => {
 	if (numPlace.value > 0) {
 		let current = Number(numPlace.value);
 		numPlace.value = current - 1;
 		numPlace.setAttribute("value", numPlace);
 	} else {
 		warning();
 	}
 });


 function warning() {
 	const warnStyle = 'border: 4px solid #dc1431; background: #f0ecb1;';
 	const warnBox = document.querySelector(".warnBox");
 	warnBox.style.display = "block";
 	numPlace.style.cssText = warnStyle;
 	setTimeout(() => {
 		numPlace.style.border = "1px solid grey";
 		numPlace.style.backgroundColor = "#fff";
 		warnBox.style.display = "none";
 	}, 5000);
 }

 const btn = document.querySelector("#btn");


 //submit button
 btn.addEventListener("click", () => {
 	document.querySelector("#out").innerHTML = numPlace.value
 	let rgbCode = '';
 	for (i = 1; i <= numPlace.value; i++) {
 		rgbCode += "<div class='wrap'>" + "<div style='background-color:" + randomRGB() + ";'>" + "</div>" + "<span>" + randomRGB() + "</span>" + "</div>";

 		let x = document.querySelector(".result");
 		x.innerHTML = rgbCode;
 	}
 });

 //random rgb generator
 function randomRGB() {
 	let r = Math.floor(Math.random() * 256) + 1,
 		g = Math.floor(Math.random() * 256) + 1,
 		b = Math.floor(Math.random() * 256) + 1;
 	let color = "rgb(" + r + "," + g + "," + b + ")";
 	return color;
 }
