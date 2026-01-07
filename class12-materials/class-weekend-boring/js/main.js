document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if (day === 'Monday', 'Tuesday', 'Thursday', 'Friday') {
    alert("boring day");
  } else if (day === 'Saturday', 'sunday') {
    alert("Weekend");
  } else {
    alert('Humpday')
  }
}
