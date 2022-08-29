class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(itemName) {
    if (this.menu.find((menuItem) => menuItem.item === itemName)) {
      this.orders.push(itemName);
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    if (this.orders.length !== 0) {
      return `The ${this.orders.shift()} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    return this.orders
      .map(
        (order) => this.menu.find((menuItem) => menuItem.item === order).price
      )
      .reduce((totalAmount, orderPrice) => totalAmount + orderPrice, 0)
      .toFixed(2);
  }

  cheapestItem() {
    return this.menu.sort(
      (menuItemA, menuItemB) => menuItemA.price - menuItemB.price
    )[0].item;
  }

  drinksOnly() {
    return this.menu
      .filter((menuItem) => menuItem.type === "drink")
      .map((menuItem) => menuItem.item);
  }

  foodOnly() {
    return this.menu
      .filter((menuItem) => menuItem.type === "food")
      .map((menuItem) => menuItem.item);

    // const foodItems = this.menu.filter((menuItem) => menuItem.type === "food");
    //const foodItemsNames = foodItems.map((menuItem) => menuItem.name);
    //return foodItemsNames;
  }
}

const shop = new CoffeeShop(
  "Shop",
  [
    { item: "banana sandwich", type: "food", price: 2.5 },
    { item: "choco sandwich", type: "food", price: 3 },
    { item: "ice-cream", type: "food", price: 1 },
    { item: "coffee", type: "drink", price: 3.5 },
    { item: "tea", type: "drink", price: 2.2 },
  ],
  []
);
console.log(shop.cheapestItem());
console.log(shop.drinksOnly());
console.log(shop.foodOnly());
console.log(shop.listOrders());
console.log(shop.addOrder("hi"));
console.log(shop.addOrder(shop.cheapestItem()));
console.log(shop.listOrders());
shop.addOrder("coffee");
shop.addOrder("banana sandwich");
console.log(shop.listOrders());
console.log(shop.dueAmount());

console.log(shop.fulfillOrder());
console.log(shop.listOrders());
console.log(shop.dueAmount());

console.log(shop.fulfillOrder());
console.log(shop.listOrders());
console.log(shop.dueAmount());

console.log(shop.fulfillOrder());
console.log(shop.listOrders());
console.log(shop.dueAmount());

console.log(shop.fulfillOrder());
