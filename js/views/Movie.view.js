
// Movie View


// The DOM element for a movie item...
var MovieView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
    events: {
        "click a.destroy" : "clear"
    },

    // The MovieView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Movie** and a **MovieView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
        this.model.bind('destroy', this.remove, this);
    },

    // Re-render the titles of the movie item.
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
   
    // Remove the item, destroy the model.
    clear: function() {
        this.model.clear();
    }

});
