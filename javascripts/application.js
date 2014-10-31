$(document).ready(function() {
  $("#twitter").getTwitter({
    userName: "rubinius",
    numTweets: 6,
    loaderText: "Loading @Rubinius Tweets&hellip;",
    slideIn: false,
    showHeading: false,
    headingText: "Latest Tweets",
    showProfileLink: true
  });
});

! function(a) {
  "use strict";
  a(function() {
    var b = a(window),
        c = a(document.body);

    c.scrollspy({
      target: ".affix"
    }), 
    b.on("load", function() {
      c.scrollspy("refresh")
    })

    var b = a(".affix");
        b.affix({
          offset: {
            top: function() {
              var c = b.offset().top,
                d = parseInt(b.children(0).css("margin-top"), 10),
                e = a("nav").height();
              return this.top = c - e - d
            },
          }
        })
      })
}(jQuery);
