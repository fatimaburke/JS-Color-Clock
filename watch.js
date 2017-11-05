function logTime() {
	var time = new Date();
	var hr = time.getHours();
	//Convert Hours from Military time
	var notMil = hr > 12 ? hr -= 12 : hr;
	// Add Zero
	var addZero = notMil < 10 ? '0' + hr : hr;
	var min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
	var sec = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
	var hours = document.querySelector('.hours');
	hours.innerText = addZero;
	var mins = document.querySelector('.mins');
	mins.innerText = min;
	var secs = document.querySelector('.secs');
	secs.innerText = sec;
	var colorTime = "#" + addZero + "" + min + "" + sec;
	document.querySelector('body').style.backgroundColor = colorTime;
	document.querySelector('.secs').style.color = colorTime;
}
setInterval(logTime, 1000);
