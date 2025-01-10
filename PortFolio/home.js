  // Function to toggle the side navigation
  function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("mainContent");

    // Toggle the open class on both sidenav and content
    sidenav.classList.toggle("open");
    mainContent.classList.toggle("open");
}
// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Validate fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Thank you for contacting me, ' + name + '!');
      document.getElementById('contactForm').reset(); // Clear the form
  } else {
      alert('Please fill out all fields before submitting.');
  }
});
