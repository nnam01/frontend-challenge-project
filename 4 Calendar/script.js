const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

let currentMonth;
let currentYear;
let selectedDate;
let memoData = {};


function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const tbody = document.querySelector('.date-month tbody');
  tbody.innerHTML = '';

  document.getElementById('month-year').textContent = currentYear+ " " + monthNames[currentMonth];

  //달력 셀 생성
  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < firstDay || date > daysInMonth) {
        row.appendChild(cell);
      } else {
        cell.textContent = date;
        cell.setAttribute('data-date', `${currentYear}-${currentMonth + 1}-${date}`);
        cell.addEventListener('click', handleDateClick);
        //메모 유무 표시
        if (memoData[cell.dataset.date]) {
          const memoMarker = document.createElement('div');
          memoMarker.classList.add('memo-marker');
          cell.appendChild(memoMarker);
        }
        row.appendChild(cell);
        date++;
      }
    }
    tbody.appendChild(row);
  }
}


// 날짜 클릭 시 메모
function handleDateClick(event) {
  selectedDate = event.target.dataset.date;
  const memoContent = memoData[selectedDate] || '';
  document.getElementById('memo').value = memoContent;
  document.getElementById('memoItem').style.display = 'block';
}

function saveMemo() {
  const memoContent = document.getElementById('memo').value;
  memoData[selectedDate] = memoContent;
  document.getElementById('memoItem').style.display = 'none';
  renderCalendar();
}

document.getElementById('month-prev').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
});
  
  
document.getElementById('month-next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
});
  

function init() {
  const today = new Date();
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  renderCalendar();
}


init();