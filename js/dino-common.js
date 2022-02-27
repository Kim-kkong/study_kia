// common script
$(document).ready(function() {
  preventDefaultAnchor();
  gnbUI();
  lnbUI();
});



function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
      e.preventDefault();
  });
}


function gnbUI() {

}


function lnbUI() {
  $('#lnb ul.link li.quick a').on('click', function() {
    $(this).parent().toggleClass('on');
  });
}



