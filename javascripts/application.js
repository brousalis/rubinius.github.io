$(function() {
  if($('body').find('.doc-wrapper')) {
    $('#search-query').lunrSearch({
      indexUrl: '/search.json',
      results:  '#search-results',
      entries:  '.entries',
      template: '#search-results-template'
    });

    var path = window.location.pathname;
    $('.sidebar-links a[href="'+path+'"]').addClass('active');

    $('.languages').click(function() { 
      $(this).toggleClass('open');
    });
  }
});
