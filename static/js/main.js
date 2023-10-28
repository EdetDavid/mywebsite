


window.addEventListener("load", function () {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";

  var body = document.getElementById('body')
  body.classList.add('fade')

  window.onscroll = function () {
    var nav = document.getElementById("mynav");
    if (
      document.body.scrollTop >= 30 ||
      document.documentElement.scrollTop >= 30
    ) {
      nav.classList.remove( "bg-white", "p-3",);
      nav.classList.add("fixed-top", );
    }else{
      nav.classList.add(  "p-3");
      nav.classList.remove("fixed-top", "bg-white");
    }
  };

});




var links = document.querySelectorAll('.hide-nav');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
}




document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var form = event.target; // Reference to the form
  var formData = new FormData(form); // Collect form data

  // Create and configure the AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request successful, handle response if needed
        console.log(xhr.responseText);
        form.reset(); // Reset the form
      } else {
        // Request failed, handle error if needed
        console.error("Request failed with status:", xhr.status);
      }
    }
  };

  // Send the form data
  xhr.send(new URLSearchParams(formData));
});
