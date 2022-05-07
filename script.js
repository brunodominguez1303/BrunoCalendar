/* Get current date */
const date = new Date();

/* Render calendar function */
function renderCalendar() {

	date.setDate(1);

	/* Gets the wrapper of month days */
	const monthDays = document.querySelector('.days');

	/* Variable used to store div elements to display days */
	let days = '';

	/* Last day of current month */
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	/* Last day of previous month */
	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	/* Show current month on calendar */
	document.querySelector('.date h1').innerHTML = months[date.getMonth()];

	/* Display entire current date on calendar */
	document.querySelector('.date p').innerHTML = new Date().toDateString();

	/* Add previous month's days */
	const firstDayIndex = date.getDay(); // week day index, zero based

	for(let i = firstDayIndex; i > 0; i--) {
		days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
	}


	/* Add current month's days */
	for(let i = 1; i <= lastDay; i++) {
		if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
			days += `<div class="today">${i}</div>`
		} else {
			days += `<div>${i}</div>`;
		}
	}

	/* Add next month's days */
	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

	const nextDays = 7 - lastDayIndex - 1;

	for(let i = 1; i <= nextDays; i++) {
		days += `<div class="next-date">${i}</div>`;
	}

	/* Display all days into calendar */
	monthDays.innerHTML = days;

}

/* Add event to prev and next month buttons */
document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

/* Render calendar */
renderCalendar();