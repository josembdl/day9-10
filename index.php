<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script data-main="js/main" src="js/libs/require/require.js"></script> 
        
        <script src="js/libs/jquery/jquery-1.7.1.min.js"></script>
        <script src="js/libs/underscore/underscore-min.js"></script>
        <script src="js/libs/backbone/backbone.js"></script>
        <script src="js/libs/backbone/Backbone-localStorage.js"></script>
        <script src="js/libs/json/json2.js"></script>
        
         <style type="text/css">
            #movie-list .destroy {
                    color: blue;
            }
            #movie-list .destroy:hover {
                    color: red;
            }
        </style>
        
        <title>Tema 6</title>
    </head>
    <body>
        <p id="tema">Tema 6 - MVC & Mixin</p>
            
            <div id="movieapp">
    
                <header>
                <h1>Movies</h1>
                <input id="new-movie" size="40px" type="text" placeholder="What your favorite movie?">
                </header>

                <section id="main">
                <ul id="movie-list"></ul>
                </section>

            </div>
            
            
            <!-- Template -->
            <script type="text/template" id="item-template">
                <div class="view">
                    <label><%= titulo %></label>
                    <a class="destroy"> [Eliminar]</a>
                </div>
            </script>
            
    </body>
</html>
