console.log('howdy ho!');

$(document).ready(() => {
  const path = window.location.pathname;
  //toggle active class for nav links
  if (path.includes('/views/projects.html')) {
    $('.active').removeClass('active');
    $('#projects').addClass('active');
  } else if (path.includes('/views/writing.html') || path.includes('/views/articles')){
    $('.active').removeClass('active');
    $('#writing').addClass('active');
  } else if (path.includes('/views/contact.html')) {
    $('.active').removeClass('active');
    $('#contact').addClass('active');
  }
});
