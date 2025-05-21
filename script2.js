const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let selectedDate = new Date(2024, 4); // May 2024 (0-indexed)

const renderCalendar = () => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  const highlightDay = 15;
  monthYear.textContent = selectedDate.toLocaleString('default', { month: 'long' }) + " " + year;

  calendarDays.innerHTML = "";

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  weekdays.forEach(day => {
    const dayElem = document.createElement("div");
    dayElem.textContent = day;
    dayElem.classList.add("day-header");
    calendarDays.appendChild(dayElem);
  });

  // Previous month dates (grayed out)
  for (let i = firstDayOfMonth; i > 0; i--) {
    const div = document.createElement("div");
    div.textContent = prevMonthLastDate - i + 1;
    div.classList.add("prev-date");
    calendarDays.appendChild(div);
  }

  // Current month dates
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const div = document.createElement("div");
    div.textContent = i;

    // Highlight event date
    if (month === 4 && year === 2024 && i === highlightDay) {
      div.classList.add("today");
      div.title = "Event Day!"; // Tooltip on hover
    }

    calendarDays.appendChild(div);
  }

  // Next month dates (grayed out)
  const totalCells = firstDayOfMonth + lastDateOfMonth;
  const remaining = 7 - (totalCells % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      const div = document.createElement("div");
      div.textContent = i;
      div.classList.add("next-date");
      calendarDays.appendChild(div);
    }
  }
};

prevBtn.addEventListener("click", () => {
  selectedDate.setMonth(selectedDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  selectedDate.setMonth(selectedDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();




