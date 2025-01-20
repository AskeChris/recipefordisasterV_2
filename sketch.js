let DDcategory;
let sel;

function setup() {
  createCanvas(700, 700);
  background(255);
  let Btn = createButton("Random Dish")
    .position(100, 100)
    .size(140, 30)
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
  

  //sel.style('background-color', 'orange');
  //sel.style('border-radius', '3px');
  //sel.style('width', '200px');
  //sel.style('padding', '0.5em');
  
}

function Dish() {
  const categoryString = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

  //loadJSON("https://www.themealdb.com/api/json/v1/1/random.php", Console);
  loadJSON(categoryString + DDcategory.selected(), Console);

}

function Console(d) {
  console.log(d);
  background(255);
  textWrap(WORD);

  let randomMeal = random(d.meals);

  text(randomMeal.strMeal, 20, 200, 600);

  const idString = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  loadJSON(idString + randomMeal.idMeal, (mealData)=> {
    console.log(mealData);
    text(mealData.meals[0].strArea, 20, 300, 600);
  });

}

