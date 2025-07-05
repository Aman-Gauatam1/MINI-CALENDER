const Dates=document.getElementById("date");
const Days=document.getElementById("day");
const Months=document.getElementById("month");
const Years=document.getElementById("year");

const Today=new Date();

const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"];

const allMonths=["January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"];

Dates.innerHTML=(Today.getDate()<10?"0":"")+Today.getDate();
Days.innerHTML=weekDays[Today.getDay()];
Months.innerHTML=allMonths[Today.getMonth()];
Years.innerHTML=Today.getFullYear();