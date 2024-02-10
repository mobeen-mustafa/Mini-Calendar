
const date=document.querySelector("#date")
const day=document.querySelector("#day")
const month=document.querySelector("#month")
const year=document.querySelector("#year")




let today = new Date()

const weekdays =["Sun", "Mon", "Tue", "Wed", "Thu","Fri", "Sat"];

const allMonths = ["jan", "feb", "mar", "apr", "may","jun", "jul", "aug",
                    "sep", "oct", "nov", "des"];


date.innerHTML= (today.getDate() < 10?"0":"") +today.getDate()

day.innerHTML=weekdays[today.getDay()];

month.innerHTML=allMonths[today.getMonth()];
   
year.innerHTML=today.getFullYear()


