var digital = document.getElementById("digital");
setInterval(() => {
	date = new Date(); //object of date()
	hr = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;
	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
    digitalClock();
    
}, 1000);

function digitalClock(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
	seconds = date.getSeconds();
    am_pm = "AM";
  
    if (hours > 12) {
        hours -= 12;
        am_pm = "PM";
    }
    if (hours == 0) {
        houre = 12;
        am_pm = "AM";
    }
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let currentTime = hours + ":" + minutes + ":" + seconds + am_pm;
    document.getElementById("digital").innerHTML = currentTime;


}