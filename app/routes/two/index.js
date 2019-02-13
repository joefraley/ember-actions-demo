import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    doSomething() {
      console.log("doSomething in the nested route2 index");
    }
  }
});
