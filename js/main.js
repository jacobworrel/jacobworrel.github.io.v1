console.log('howdy ho!');

$(document).ready(() => {
  //toggle active class for nav links
  switch (window.location.pathname) {
    case '/views/projects.html':
        $('.active').removeClass('active');
        $('#projects').addClass('active');
        break;
    case '/views/writing.html':
        $('.active').removeClass('active');
        $('#writing').addClass('active');
        break;
    case '/views/contact.html':
        $('.active').removeClass('active');
        $('#contact').addClass('active');
        break;
  }
});
