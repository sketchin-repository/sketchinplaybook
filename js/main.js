function setIdToHeadings() {
    // Give id to each title
    $('h2, h3, h4').each(function() {
        var _text = $(this).text();
        var _parsedId = _text.replace(/ /g, "-").toLowerCase();
        $(this).attr("id", _parsedId);
    });
}

function tableOfContents() {
    // Initialize Table of Contents
    $("#wrapper").tableofcontents({
        id: "#tableofcontents"
    });
}

function smoothScrolling() {
    // Smooth scrolling anchor links
    $("#tableofcontents li a").click(function() {
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 1000);
    });
}

function scrollToTop() {
    //scroll to top
      var _scrollTrigger = $('#scrollToTop'),
          _scrollDestination = $('#tableofcontents'),
          _scrollValue = _scrollDestination.offset().top;

      $(window).scroll(function() {
          //Check to see if the window is on top otherwise display the button
          if ($(this).scrollTop() > _scrollValue + 200) {
            $('#scrollToTop').fadeIn('slow');
          } else {
            $('#scrollToTop').fadeOut('slow');
          }
        });

        //Click event to scroll to top
        $('#scrollToTop').click(function(e){
          e.preventDefault();
          $('html, body').animate({scrollTop : 0},1000);
          return false;
        });
}

function lazyLoading() {
    // Initialize images lazy loading 
     $("#content img").lazyload({
      effect: 'fadeIn'
    });
}

$(document).ready(function() {
    setIdToHeadings();
    tableOfContents();
    smoothScrolling();
    scrollToTop();
    lazyLoading(); 
});