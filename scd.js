new Shortcode(document.querySelector('body'), {
  item: function(done) {
    return this.contents;
  }
});
