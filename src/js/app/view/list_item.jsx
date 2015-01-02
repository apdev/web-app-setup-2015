define(function(require) {

  "use strict";

  var React = require("react");

  /**
   *
   *
   *
   */
  var ListItemView = React.createClass({

    getInitialState: function() {
      return {
      };
    },

    componentWillMount: function() {},

    componentDidMount: function() {},

    componentWillUnmount: function() {},

    render: function() {
      return (
        <li>
          <div className="name">{this.props.model.get("name")}</div>
          <div className="age">{this.props.model.get("age")}</div>
          <div className="from">{this.props.model.get("from")}</div>
          <a href={this.props.model.id} className="link">Details</a>
        </li>
      );
    }

  }); // end ListItemView

  return ListItemView;
});