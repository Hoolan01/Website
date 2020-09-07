$( ".side-nav__collapse" ).click(function() {
    $( "body" ).toggleClass( "is-collapsed" );
    $( ".side-nav__list-item-link" ).parent().removeClass( "open" );
  });

$( ".side-nav__list-item-link.has-dropdown" ).click(function() {
    $( this ).parent().toggleClass( "open" );
    $( this ).parent().siblings().removeClass( "open" );
    $( "body" ).removeClass( "is-collapsed" );
  });