document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  var booking = {
    name: name,
    date: date,
    time: time
  };

  addBooking(booking);
  clearForm();
});

function addBooking(booking) {
  var bookingsDiv = document.getElementById('bookings');
  var bookingDiv = document.createElement('div');
  bookingDiv.innerHTML = 'Name: ' + booking.name + '<br>Date: ' + booking.date + '<br>Time: ' + booking.time;
  bookingsDiv.appendChild(bookingDiv);
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
}
