// Array of days of the week in Dutch
const daysOfWeekInDutch = [
    'zondag',    // Sunday
    'maandag',   // Monday
    'dinsdag',   // Tuesday
    'woensdag',  // Wednesday
    'donderdag', // Thursday
    'vrijdag',   // Friday
    'zaterdag'   // Saturday
];

// Array of months in Dutch
const monthsInDutch = [
    'januari',   // January
    'februari',  // February
    'maart',     // March
    'april',     // April
    'mei',       // May
    'juni',      // June
    'juli',      // July
    'augustus',  // August
    'september', // September
    'oktober',   // October
    'november',  // November
    'december'   // December
];

// Object mapping days of the week to background colors
const dayColors = {
    0: '#8B8B8B', // Sunday
    1: '#FF1E00', // Monday
    2: '#FF9B00', // Tuesday
    3: '#FFE300', // Wednesday
    4: '#33AC00', // Thursday
    5: '#00D1FF', // Friday
    6: '#8B8B8B'  // Saturday
};

// Get the current date
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayInDutch = daysOfWeekInDutch[currentDayIndex];
const day = currentDate.getDate();
const month = monthsInDutch[currentDate.getMonth()];
const year = currentDate.getFullYear();

// Format the date as '25 juni 2024'
const formattedDate = `${day} ${month} ${year}`;

// Set the text of the paragraph with id "day"
document.getElementById('day').textContent = currentDayInDutch;

// Set the text of the paragraph with id "date"
document.getElementById('date').textContent = formattedDate;

// Set the background color of the container with id "day-container"
document.getElementById('day-container').style.backgroundColor = dayColors[currentDayIndex];

const element = document.getElementById('time');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    element.textContent = `${currentTime}`;
}

// Call updateClock once immediately to set initial time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);