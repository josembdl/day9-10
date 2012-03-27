

require(['models/Movie.model','collections/Movie.Collection','views/Movie.view'], function(miEditor){
    
// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  var AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#movieapp"),

    // Delegated events for creating new items.
    events: {
      "keypress #new-movie":  "createOnEnter"
    },

    // At initialization we bind to the relevant events on the `Movies`
    // collection, when items are added. Kick things off by
    // loading any preexisting movies that might be saved in *localStorage*.
    initialize: function() {
      this.input = this.$("#new-movie");
      Movies.bind('add', this.addOne, this);
      Movies.bind('all', this.render, this);
      this.main = $('#main');
      Movies.fetch();
    },

    render: function() {
      if (Movies.length) {
        this.main.show();
      } else {
        this.main.hide();
      }
    },

    // Add a single movie item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(movie) {
      var view = new MovieView({model: movie});
      this.$("#movie-list").append(view.render().el);
    },

    // If you hit return in the main input field, create new **Movie** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Movies.create({titulo: this.input.val()});
      this.input.val('');
    }

  });

  var App = new AppView;

});


//Lista de peliculas pre-cargada
Movies.create({titulo: "Esperando la carroza"});
Movies.create({titulo: "El secreto de sus ojos"});
Movies.create({titulo: "La cara oculta"});


});
