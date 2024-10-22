setInterval(updateClock, 1000);
updateClock();
getFormattedDate(new Date());

function updateClock() {
    const now = new Date();

    var h = now.getHours(); // 0 - 23
    var m = now.getMinutes(); // 0 - 59
    var s = now.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
    document.getElementById('session').textContent = session;
}



function getDayOfWeek(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
}

function getMonthName(date) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months[date.getMonth()];
}

function getDaySuffix(date) {
    const day = date.getDate();
    if (day > 3 && day < 21) return 'th'; // catch 11th, 12th, 13th
    switch (day % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

function getFormattedDate(date) {
    const dayOfWeek = getDayOfWeek(date);
    const monthName = getMonthName(date);
    const day = date.getDate();
    const suffix = getDaySuffix(date);
    const year = date.getFullYear();   
    const formatted_date = `${dayOfWeek} ${monthName} ${day}${suffix}, ${year}`;

    document.getElementById('formatted_date').textContent = formatted_date;
    
}

// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setClockWidth();
//     setTimeout(showTime, 1000);
    
// }

// showTime();

// function setClockWidth() {
    
//     var clockText = document.getElementById("MyClockDisplay").innerText;
    
//     let chars = clockText.split('');
    
//     for (let i = 0; i < chars.length; i++) {
//         console.log(chars[i]);
//     }
// }
