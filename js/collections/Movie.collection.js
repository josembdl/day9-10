
// Movie Collection


// The collection of movies is backed by *localStorage* instead of a remote
// server.
var MoviesList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Movie,

    // Save all of the movie items under the `"movies"` namespace.
    localStorage: new Store("movies-backbone"),

    // We keep the Movie in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
        if (!this.length) return 1;
        return this.last().get('order') + 1;
    },

    // Movies are sorted by their original insertion order.
    comparator: function(movie) {
        return movie.get('order');
    }

});

// Create our global collection of **Movies**.
var Movies = new MoviesList;
