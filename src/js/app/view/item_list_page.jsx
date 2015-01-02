define(function(require) {

  "use strict";

  var React = require("react");

  var ListItemView= require("jsx!app/view/list_item");

  /**
   *
   *
   *
   */
  var ItemListPage = React.createClass({

    getInitialState: function() {
      return {
      };
    },

    componentWillMount: function() {},

    componentDidMount: function() {},

    componentWillUnmount: function() {},

    render: function() {
      return (
        <ul>
          {
            this.props.collection.map(function(model) {
              return <ListItemView key={model.id} model={model} />;
            }, this)
          }
        </ul>
      );
    }

  }); // end ItemListPage

  return ItemListPage;
});