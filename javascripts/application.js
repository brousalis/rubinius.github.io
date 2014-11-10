$(function() {

  if($('body').find('.doc-wrapper')) { // i know, i know.
    var lang = $('.languages .current').text().trim();

    $('#search-query').lunrSearch({
      indexUrl: '/search_'+lang+'.json',
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
