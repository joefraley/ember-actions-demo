import Controller from "@ember/controller";

export default Controller.extend({
  myCustomName: 4,
  doSomething() {
    console.log("doSomething from the controller4");
    console.log(this)
    console.log(this.get('myCustomName'))
  }
});
