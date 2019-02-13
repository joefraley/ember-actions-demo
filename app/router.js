import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("one");
  this.route("two", function () {});
  this.route("three");
  this.route("four");
});

export default Router;
