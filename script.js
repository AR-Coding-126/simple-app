// A simple function to display an alert
function showMessage() {
    alert('Hello, everyone! My name is Aqib Raza (FA19-BCS-126)');
  }
  
  // Attach an event listener to the document ready event
  document.addEventListener('DOMContentLoaded', function() {
    var paragraph = document.querySelector('p');
    paragraph.addEventListener('click', showMessage);
  });
  