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

  let newDay = currentDay - selectedDay;
  let newMonth = currentMonth - selectedMonth;
  let newYear = currentYear - selectedYear;

  if (new Date(selectedYear, selectedMonth - 1, selectedDay) > currentDate) {
    alert("Selected date cannot be in the future");
    return;
  }

  if (newDay < 0) {
    const lastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    newDay += lastMonth;
    newMonth -= 1;
  }
  if (newMonth < 0) {
    newMonth += 12;
    newYear -= 1;
  }
  console.log(newDay, newMonth, newYear);
  result.innerHTML = `You are <span>${newYear}</span> years, <span>${newMonth}</span> months and <span>${newDay}</span> days old`;
}

const calculateButton = document.querySelector("#button-calculate");
calculateButton.addEventListener("click", () => {
  ageCalculator();
});
