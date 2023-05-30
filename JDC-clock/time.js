// let display = document.getElementById('time-display');

//         function getTime(){
//             let now = new Date();
//             let hour = now.getHours();
//             let min = now.getMinutes();
//             let sec = now.getSeconds();

//             display.textContent = `${hour}:${min}:${sec}`}

//         setInterval(getTime, 1000)

//         If you are following along, you'll notice that when the seconds, minutes, or hours are less than 10, the time looks like this:8:5:2

//         To fix this, we just need to add a little more logic to our function to tell it to add a '0' before the number if it's less than 10.

let display = document.getElementById('time-display');

        function getTime(){
            let now = new Date();
            let hour = now.getHours();
            let min = now.getMinutes();
            let sec = now.getSeconds();
            if(hour < 10){
                hour = `0${hour}`;
            }
            if(min < 10){
                min = `0${min}`;
            }
            if(sec < 10){
                sec = `0${sec}`;
            }

            display.textContent = `${hour}:${min}:${sec}`;
        }

        setInterval(getTime, 1000);