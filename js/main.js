$(document).ready(function() {
    // Initialize Table of Contents
    $("#wrapper").tableofcontents({
        id: "#tableofcontents"
    });

    // Smooth scrolling anchor links
    $("#tableofcontents li a").click(function() {
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 2000);
    });

    // Give id to each title
    $('h2, h3, h4').each(function() {
        var temp = $(this).text();
        temp.toLowerCase.replace(" ", "-");
        $(this).attr("id", temp);
    })
});