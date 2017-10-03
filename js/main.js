console.log('howdy ho!');

$(document).ready(() => {
  //toggle active class for nav links
  switch (window.location.pathname) {
    case '/projects.html':
        console.log('case 1 projects')
        $('.active').removeClass('active');
        $('#projects').addClass('active');
        break;
    case '/writing.html':
        console.log('case 2 writing')
        $('.active').removeClass('active');
        $('#writing').addClass('active');
        break;
    case '/contact.html':
        console.log('case 3 contact')
        $('.active').removeClass('active');
        $('#contact').addClass('active');
        break;
  }
});
