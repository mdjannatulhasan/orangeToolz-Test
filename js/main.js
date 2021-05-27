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
    $('ul li:not(:last)').click(function(){
      $('li').removeClass("active");
      $(this).addClass("active");
  });
	$('#burgerMenu').click(function(){
		$('#sideNavbar').toggleClass('expanded');
		$('#sideNavbar span').toggleClass('nav-link');
		$('#mainBody').toggleClass('smaller');
	});
    /*~~~~~~~~~~~~~ Custom Dropdown Admin Info ~~~~~~~~~~~~~~~*/

    jQuery('.dropdown-trigger').click(function(){
        $(this).data('clicked', true);
      });
    $(document).on('click', function (event) {
        if (jQuery('.dropdown-trigger').data('clicked')) {
            $('#dropdown1').toggleClass('aaa');
        }else if (!$(event.target).closest('#dropdown1').length) {
            $('#dropdown1').removeClass('aaa');
        }
      });
      $('.fsIcons span').click(function(){
        $('span').removeClass("active");
        $(this).addClass("active");
    });
});
