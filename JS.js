$(document).ready(function() {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Remove 'active' class from all navigation links
    $('nav ul li').removeClass('active');

    // Check each navigation link and add the 'active' class to the corresponding link
    $('nav ul li a').each(function() {
        var linkUrl = $(this).attr('href');
        if (currentUrl.endsWith(linkUrl)) {
            $(this).closest('li').addClass('active');
        }
    });
});

