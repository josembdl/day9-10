
// Movie Model

var Movie = Backbone.Model.extend({

    // Default attributes for the movie item.
    defaults: function() {
    return {
        titulo: "sin Titulo",
        // el atributo detalles es para el ejercicio 2
        detalles: "Sin Detalles",
        order: Movies.nextOrder()
    };
    },

    initialize: function() {},
   
    // Remove this Movie from *localStorage* and delete its view.
    clear: function() {
    this.destroy();
    }

});