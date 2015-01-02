require.config({
  paths:{
    jquery: "vendor/jquery.2.1.1",
    underscore: "vendor/lodash.2.4.1",
    backbone: "vendor/backbone.1.1.2",
    
    react: "vendor/react_with_addons.0.12.1",
    JSXTransformer: "vendor/JSXTransformer.0.12.1",

    text: "vendor/require.text.2.0.12",
    jsx: "vendor/require.jsx.0.5.1"
  },

  shim:{
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    "underscore": {
      exports: "_"
    }
  },

  jsx: {
    fileExtension: ".jsx"
  }
});

require(
  [
    "react",
    "jsx!app/view/base"
  ],
  function (React, BaseView) {
    "use strict";

    React.render(new React.createFactory(BaseView)(), document.getElementById("page"));
  }
);
