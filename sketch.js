let DDcategory;
let sel;

function setup() {
  createCanvas(700, 700);
  background(220);
  let Btn = createButton("Random Dish")
    .position(100, 100)
    .size(100, 70)
    .mousePressed(() => Dish());
  let btn1 = createButton("Ingredients")
  .position(200,100)
  .size(100,70)
  .mousePressed(()=> Ingredients());
  DDcategory = createSelect();
  DDcategory.position(0, 100);
  DDcategory.option("Miscellaneous");
  DDcategory.option("Vegan");
  DDcategory.option("Dessert");
  DDcategory.option("Vegetarian");
  DDcategory.option("Starter");
  DDcategory.option("Side");
  DDcategory.option("Pasta");
  DDcategory.option("Seafood");
  DDcategory.option("Breakfast");
  DDcategory.option("Goat");
  
}

function Dish() {
  let categoryString = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

  //loadJSON("https://www.themealdb.com/api/json/v1/1/random.php", Console);
  loadJSON(categoryString + DDcategory.selected(), Console);
}

function Console(d) {
  console.log(d);
  background(220);
  textWrap(WORD);

  let randomMeal = random(d.meals);
  let mealId = randomMeal.idMeal

  text(randomMeal.strMeal, 20, 200, 600);
  text(randomMeal.strCategory, 200, 200, 600);
  text(randomMeal.strInstructions, 20, 250, 600);
}

function Ingredients(){
  let ingredientString="www.themealdb.com/api/json/v1/1/lookup.php?i=";

  //loadJSON("www.themealdb.com/api/json/v1/1/lookup.php", Console1);
  loadJSON(ingredientString + mealId(), Console1);
}

function Console1(e) {
textWrap(WORD);

let area=e.strArea
text(area,50,200,200)
}