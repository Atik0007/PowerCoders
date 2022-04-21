// count down timer
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

console.log(seconds);

function countdown() {
  const now = new Date();
  const eventDate = new Date(2022, 5, 7);

  const currentTime = now.getTime();
  const eventTime = eventDate.getTime();

  const remTime = eventTime - currentTime;

  const s = Math.floor(remTime / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);

  days.textContent = addZero(d);
  hours.textContent = addZero(h % 24);
  minutes.textContent = addZero(m % 60);
  seconds.textContent = addZero(s % 60);
}

countdown();
setInterval(countdown, 1000);

// if time < 10 seconds  add 0 before

function addZero(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}

// days and months in words

function dateInWords() {
  const now = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dateInWords = `${day} ${date} ${month} ${year}`;
  const dateInWordsEl = document.querySelector('#dateInWords');
  console.log(dateInWordsEl);
  dateInWordsEl.textContent = dateInWords;
}
dateInWords();
