define(function(require) {

  "use strict";

  var React = require("react");

  var Router = require("app/router");

  var ItemCollection = require("app/model/item_collection");

  var ItemListPageView = require("jsx!app/view/item_list_page");
  var ItemDetailPageView = require("jsx!app/view/item_detail_page");

  /**
   *
   *
   *
   */
  var BaseView = React.createClass({

    getInitialState: function() {
      var collection = new ItemCollection(),
        fetching = true;

      return {
        path: null,
        pathParts: null,
        router: new Router(),
        collection: collection,
        fetching: fetching
      };
    },

    componentWillMount: function() {
      this.state.router.on("route", this.onPathChanged, this);

      Backbone.history.start({pushState: true});
    },

    componentDidMount: function() {
      this.state.collection.on("sync", function() {
        this.setState({
          fetching: false
        });
      }, this);

      this.state.collection.fetch();
    },

    render: function() {
      var itemId = this.state.pathParts && this.state.pathParts.length && !isNaN(Number(this.state.pathParts[0])) && this.state.pathParts[0],
        content;

      if (this.state.fetching) {
        return (
          <div className="base">
            <span>Loading...</span>
          </div>
        );
      }

      if (this.state.path === "list") {
        content = new React.createFactory(ItemListPageView)({
          collection: this.state.collection
        });
      } else if (this.state.path === "detail") {
        if (!this.state.collection.get(itemId)) {
          content = (<p><br/>Item not found</p>);
        } else {
          content = new React.createFactory(ItemDetailPageView)({
            model: this.state.collection.get(itemId)
          });
        }
      } else {
        content = (<p><br/>Error, page not found</p>);
      }

      return (
        <div onClick={this.onLinkClick} className="base">
          {content}
        </div>
      );
    },

    onPathChanged: function(action, parts) {
      this.setState({
        path: action,
        pathParts: parts || []
      });
    },

    onLinkClick: function(evt) {
      evt.preventDefault();

      if (evt.target.tagName !== "A") {
        return;
      }

      this.state.router.navigate(evt.target.pathname, {trigger: true});
    }

  }); // end BaseView

  return BaseView;
});