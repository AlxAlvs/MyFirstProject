
 $(window).on('load', function () {
     $("#loading").css("display", "none");
     $("#conteudo").css("display", "block");
     $('[data-toggle="tooltip"]').tooltip();
    })

    var slideIndex = 1;
    showSlides(slideIndex);

    
    function adiciona_slide(n) {
    showSlides(slideIndex += n);
    }
    
    function slide_atual(n) {
    showSlides(slideIndex = n);
    }
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }

