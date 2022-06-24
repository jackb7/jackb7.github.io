
  $(".hoverDropdown").hover(
    function() {
      $(this).addClass("dropdownOpen");
    },
    function() {
      $(this).removeClass("dropdownOpen");
    }
  );

  $(".clickDropdown").click(
    function() {
      if ($(this).hasClass("dropdownOpen")) {
        $(this).removeClass("dropdownOpen");
      } else {
        $(this).addClass("dropdownOpen");
      }
    }
  );
