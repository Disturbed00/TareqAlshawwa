document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-me-button').addEventListener('click', function () {
      console.log('About me button clicked');
      window.location.href = "about_me.html";
    });

    document.getElementById('contact-me-button').addEventListener('click', function(){
      console.log('contact me button clicked');
      window.location.href = "contact.html";
    });
  });
  