import Controller from "@ember/controller";

export default Controller.extend({
  doSomething() {
    console.log("doSomething from the controller3");
  },
  actions: {
    doSomething() {
      console.log("doSomething from the controller3");
    }
  }
});
