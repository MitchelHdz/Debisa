$("#myNavbarWeb a,#myNavbarMobile a, .click-scrolling ").on('click', function (event) {
    event.preventDefault();
    var pageRef = $(this).attr("href");
    var offset = 80;
    if(pageRef[0] != '#') {
        window.location.href = pageRef;
      }
      else{
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top -0
        }, 800, function () {
            window.location.hash = hash;

        });
      }
    });