//Home


//
$(document).ready(function(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
      } else {
        document.querySelector("header").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  });
  
  $(document).ready(function(){
    $('.nav-item').click(function(){
      $('#navbarNav').collapse('hide');
    });
  });

  $(document).ready(function () {
    $('.nav-link-scroll').click(function (event) {
      event.preventDefault();
  
      const target = $(this).attr('href');
      const offset = 70; // Define the offset value here
  
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        1000
      );
    });
  });
  
  document.getElementById('sayHello').addEventListener('click', function () {
    window.location.href = 'mailto:Shivang.patel1141@gmail.com?subject=Hello&body=Hello,%20I%20am%20interested%20in%20your%20work.';
  });

  document.getElementById('moreBtn').addEventListener('click', function () {
    const hiddenProjects = document.querySelectorAll('.project.hidden');
    let projectsToShow = 3; // Number of projects to show per click

    hiddenProjects.forEach(function (project, index) {
      if (index < projectsToShow) {
        project.classList.remove('hidden');
      }
    });

    // Hide the "More" button if no more hidden projects are left
    if (hiddenProjects.length <= projectsToShow) {
      this.style.display = 'none';
    }
  });
  


