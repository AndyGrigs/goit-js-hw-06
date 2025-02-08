console.log("task 2");
class Storage{
  #items

  constructor(initialItems){
    this.#items = initialItems;
  }

  getItems(){
    return this.#items;
  }

  addItem(newItem){
    this.#items.push(newItem);
  }

  removeItem(item){
    this.#items = this.#items.filter(i => i !== item);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
