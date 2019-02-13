import Route from "@ember/routing/route";

export default Route.extend({
  doSomething() {
    console.log("doSomething without the actions in route3");
  },
  actions: {
    doSomething() {
      console.log("doSomething in the actions of route3");
    }
  }
});
