document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('ul li:not(:last)').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
  });
  $(document).ready(function(){
	$('#burgerMenu').click(function(){
		$('#sideNavbar').toggleClass('expanded');
		$('#sideNavbar span').toggleClass('nav-link');
	});
});
