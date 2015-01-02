define(function(require) {

  "use strict";

  var Backbone = require("backbone");

  var ItemModel = require("app/model/item_model");

  /**
   *
   *
   *
   */
  var ItemCollection = Backbone.Collection.extend({
    model: ItemModel,
    url: "/dummy_data.json"

  }); // end ItemCollection

  return ItemCollection;
});