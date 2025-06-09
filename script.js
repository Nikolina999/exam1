/* 
  Автор: Дзензелевська Ніколіна
  Група: ФІТ-2-11
  Файл: script.js
*/

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function confirmBooking() {
  const service = document.getElementById('service').value;
  const timeslot = document.getElementById('timeslot').value;
  const confirmation = document.getElementById('confirmation');

  if (service && timeslot) {
    confirmation.textContent = `Ви успішно забронювали: "${service}" на ${timeslot}. Дякуємо!`;
    confirmation.classList.remove('hidden');
  } else {
    confirmation.textContent = "Будь ласка, оберіть послугу та час.";
    confirmation.classList.remove('hidden');
  }
}
