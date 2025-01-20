let DDcategory;
let sel;

function setup() {
  createCanvas(700, 700);
  background(220);
  let Btn = createButton("Random Dish")
    .position(100, 100)
    .size(100, 70)
    .mousePressed(() => Dish());
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
  
  sel = createSelect();
  sel.position(10, 10);
  sel.option('foo');
  sel.option('bar');
  sel.option('baz');
  sel.style('background-color', 'orange');
  sel.style('border-radius', '3px');
  sel.style('width', '200px');
  sel.style('padding', '0.5em');
  
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

  text(randomMeal.strMeal, 20, 200, 600);
  text(randomMeal.strCategory, 200, 200, 600);
  text(randomMeal.strInstructions, 20, 250, 600);
}