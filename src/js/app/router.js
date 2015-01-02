define(function(require) {

  "use strict";

  var Backbone = require("backbone");

  /**
   *
   *
   *
   */
  var Router = Backbone.Router.extend({
    routes: {
      "": "list",
      ":id(/)": "detail"
    }
  }); // end Router


  return Router;
});

