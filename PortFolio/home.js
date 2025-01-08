  // Function to toggle the side navigation
  function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("mainContent");

    // Toggle the open class on both sidenav and content
    sidenav.classList.toggle("open");
    mainContent.classList.toggle("open");
}