const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      } else {
        return "Incorrect data";
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      } else {
        return "Incorrect data";
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for $${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  let listOfFood = [
    { meal: "Coca-Cola", price: 2 },
    { meal: "Salad", price: 5 },
    { meal: "Icecream", price: 3 },
    { meal: "Cheeseburger", price: 8 },
    { meal: "French fries", price: 6 },
    { meal: "Surprise of the day", price: 10 },
  ];
  
  let randomIndex = function () {
    return Math.floor(Math.random() * listOfFood.length);
  };
  
  let randomFoodIndex = randomIndex();
  menu.meal = listOfFood[randomFoodIndex].meal;
  menu.price = listOfFood[randomFoodIndex].price;
  
  /* For checking if it works correctly
  console.log(randomFoodIndex);
  console.log(listOfFood[randomFoodIndex].meal);
  */
  
  console.log(menu.todaysSpecial);
  