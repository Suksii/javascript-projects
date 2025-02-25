function ageCalculator() {
  const currentDate = new Date();
  const selectedDate = document.querySelector(".container input").value;
  const result = document.querySelector("#age");

  if (!selectedDate) {
    alert("You must select a date");
    return;
  }

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const selectedDay = Number(selectedDate.split("-")[2]);
  const selectedMonth = Number(selectedDate.split("-")[1]);
  const selectedYear = Number(selectedDate.split("-")[0]);

  let newDay;
  let newMonth;
  let newYear;

  newYear = currentYear - selectedYear;

  if (currentMonth >= selectedMonth) {
    newMonth = currentMonth - selectedMonth;
  } else {
    newMonth = 12 + (currentMonth - selectedMonth);
    newYear -= 1;
  }
  if (currentDay >= selectedDay) {
    newDay = currentDay - selectedDay;
  } else {
    newDay = 30 + (currentDay - selectedDay);
    newMonth -= 1;
  }
  console.log(newDay, newMonth, newYear);
  result.innerHTML = `You are <span>${newYear}</span> years, <span>${newMonth}</span> months and <span>${newDay}</span> days old`;
}

const calculateButton = document.querySelector("#button-calculate");
calculateButton.addEventListener("click", () => {
  ageCalculator();
});
