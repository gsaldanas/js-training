// Schrijf een object constructor TodoList.
function TodoList(name) {
  this.name = name;
  this.todoList = [];
}
//verander de naam van de lijst
// Geef alle TodoList objecten de mogelijkheid om hun naam te wijzigen.
TodoList.prototype.setListName = function (newListName) {
  this.name = newListName;
};
//voeg todos toe aan de lijst Array
TodoList.prototype.addTodo = function (lijst) {
  this.todoList.push({
    lijst,
  });
};
// Geef elke TodoList de mogelijkheid om een item te wissen.
TodoList.prototype.removeTodo = function (arr) {
  this.todoList.pop({
    arr,
  });
};
// tip: in je print kan je \n gebruiken om een nieuwe lijn te creeëren.
TodoList.prototype.getList = function () {
  //print de lijst uit
  console.log("printing the information...");
};
const list1 = new TodoList("tuin");
const list2 = new TodoList("werk");
// Zorg dat je bij het aanmaken van een nieuwe TodoList de naam
// van de lijst kan meegeven. Dus bijvoorbeeld:
// const list1 = new TodoList("tuin");
// const list2 = new TodoList("werk");

console.log(list1);
console.log(list2);
list1.setListName("studeren");
list2.setListName("fitness");
console.log(list1);
console.log(list2);
list1.addTodo("javascript", "php", "hmtl", "css");
console.log(list1.todoList);

// Geef elke TodoList de mogelijkheid om een mooie lijst uit te printen van zijn todo's.
// concreet kan je code dus hetvolgende
// const list1 = new TodoList("tuin");
// list1.setName("onze tuin");
// list1.addTodo("Gras afrijden");
// list1.addTodo("Plantjes verzorgen");
// list1.addTodo("Water geven");
// list1.getList();
